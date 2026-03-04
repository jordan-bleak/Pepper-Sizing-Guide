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
            data-testid="text-page-title"
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
