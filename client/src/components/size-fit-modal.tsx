import { useState, useEffect, useCallback } from "react";
import { SizeChartTab } from "./size-fit/size-chart-tab";
import { SizeCalculatorTab } from "./size-fit/size-calculator-tab";
import { HowToMeasureTab } from "./size-fit/how-to-measure-tab";
import { InternationalConversionTab } from "./size-fit/international-conversion-tab";
import { DescriptionPanel } from "./size-fit/description-panel";

type TabId = "size-chart" | "calculator" | "measure" | "conversion";

const tabs: { id: TabId; label: string }[] = [
  { id: "size-chart", label: "Size Chart" },
  { id: "calculator", label: "Size Calculator" },
  { id: "measure", label: "How to Measure" },
  { id: "conversion", label: "International Size Conversion" },
];

export function SizeFitModal({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<TabId>("size-chart");

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      data-testid="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        display: "flex",
        position: "fixed",
        inset: 0,
        zIndex: 35,
        backgroundColor: "rgba(18, 18, 18, 0.2)",
        justifyContent: "center",
        alignItems: "flex-start",
        overflow: "auto",
      }}
    >
      <div
        data-testid="modal-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          width: "1100px",
          maxWidth: "1100px",
          maxHeight: "calc(100vh - 20px)",
          margin: "10px",
          padding: "0 30px 55px 30px",
          overflow: "auto",
          boxShadow: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 63,
            background: "#ffffff",
            paddingTop: "30px",
            paddingBottom: "20px",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              columnGap: "32px",
            }}
          >
            <h2
              data-testid="text-modal-title"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                color: "rgb(18, 18, 18)",
                lineHeight: "24px",
                margin: 0,
                padding: 0,
                whiteSpace: "nowrap",
              }}
            >
              Size & Fit
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                columnGap: "8px",
              }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  data-testid={`button-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "rgb(32, 32, 32)",
                    backgroundColor: "#ffffff",
                    border:
                      activeTab === tab.id
                        ? "2px solid rgb(32, 32, 32)"
                        : "2px solid rgb(230, 230, 230)",
                    borderRadius: "40px",
                    padding: "10px 14px",
                    height: "41px",
                    cursor: "pointer",
                    transition: "0.4s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <button
            data-testid="button-close-modal"
            onClick={onClose}
            style={{
              display: "block",
              width: "16px",
              height: "16px",
              background: "transparent",
              border: "none",
              padding: 0,
              marginLeft: "auto",
              cursor: "pointer",
              color: "rgb(32, 32, 32)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="1" y1="1" x2="15" y2="15" />
              <line x1="15" y1="1" x2="1" y2="15" />
            </svg>
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: activeTab === "measure" || activeTab === "conversion" ? "20px" : "56px",
          }}
        >
          {activeTab === "size-chart" && (
            <>
              <SizeChartTab />
              <DescriptionPanel />
            </>
          )}
          {activeTab === "calculator" && (
            <>
              <SizeCalculatorTab />
              <DescriptionPanel />
            </>
          )}
          {activeTab === "measure" && <HowToMeasureTab />}
          {activeTab === "conversion" && <InternationalConversionTab />}
        </div>
      </div>
    </div>
  );
}
