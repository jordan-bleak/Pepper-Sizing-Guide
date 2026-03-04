import { useState } from "react";
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

export function SizeFitGuide() {
  const [activeTab, setActiveTab] = useState<TabId>("size-chart");

  return (
    <div
      data-testid="size-fit-guide"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 30px 55px 30px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "clamp(8px, 1.5vw, 16px)",
          position: "sticky",
          top: 0,
          zIndex: 63,
          background: "#ffffff",
          paddingTop: "clamp(16px, 2.5vw, 30px)",
          paddingBottom: "clamp(12px, 1.5vw, 20px)",
          marginBottom: "10px",
        }}
      >
        <h2
          data-testid="text-page-title"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(16px, 1.8vw, 20px)",
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
            flexWrap: "wrap",
            gap: "clamp(4px, 0.6vw, 8px)",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              data-testid={`button-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(10px, 1.1vw, 12px)",
                fontWeight: 400,
                color: "rgb(32, 32, 32)",
                backgroundColor: "#ffffff",
                border:
                  activeTab === tab.id
                    ? "2px solid rgb(32, 32, 32)"
                    : "2px solid rgb(230, 230, 230)",
                borderRadius: "40px",
                padding: "clamp(6px, 0.9vw, 10px) clamp(8px, 1.2vw, 14px)",
                height: "auto",
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: activeTab === "measure" || activeTab === "conversion" ? "20px" : "56px",
        }}
      >
        {activeTab === "size-chart" && (
          <>
            <SizeChartTab />
            <div style={{ marginTop: "40px" }}>
              <DescriptionPanel layout="horizontal" />
            </div>
          </>
        )}
        {activeTab === "calculator" && (
          <>
            <SizeCalculatorTab />
            <div style={{ marginTop: "40px" }}>
              <DescriptionPanel layout="horizontal" />
            </div>
          </>
        )}
        {activeTab === "measure" && <HowToMeasureTab />}
        {activeTab === "conversion" && <InternationalConversionTab />}
      </div>
    </div>
  );
}
