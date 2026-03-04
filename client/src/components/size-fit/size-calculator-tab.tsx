import { useState } from "react";
import { calculateSize } from "./size-chart-data";

export function SizeCalculatorTab() {
  const [unit, setUnit] = useState<"in" | "cm">("in");
  const [band, setBand] = useState("");
  const [bust, setBust] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleCalculate = () => {
    const bandVal = parseFloat(band);
    const bustVal = parseFloat(bust);
    if (isNaN(bandVal) || isNaN(bustVal)) {
      setResult(null);
      setHasCalculated(true);
      return;
    }
    const size = calculateSize(bandVal, bustVal, unit);
    setResult(size);
    setHasCalculated(true);
  };

  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "60%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <span
          data-testid="text-calculator-heading"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            color: "rgb(18, 18, 18)",
            width: "50%",
          }}
        >
          Bra Size Calculator
        </span>
        <div style={{ display: "flex", width: "fit-content" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "2px solid rgb(230, 230, 230)",
              borderRadius: "40px",
              overflow: "hidden",
              width: "fit-content",
            }}
          >
            <button
              data-testid="button-calc-unit-in"
              onClick={() => {
                setUnit("in");
                setBand("");
                setBust("");
                setResult(null);
                setHasCalculated(false);
              }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                border: "none",
                padding: "5px 13px",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                ...(unit === "in"
                  ? {
                      backgroundColor: "rgb(32, 32, 32)",
                      color: "#ffffff",
                      borderRadius: "40px",
                      opacity: 1,
                    }
                  : {
                      backgroundColor: "#ffffff",
                      color: "rgb(32, 32, 32)",
                      opacity: 0.5,
                    }),
              }}
            >
              IN
            </button>
            <button
              data-testid="button-calc-unit-cm"
              onClick={() => {
                setUnit("cm");
                setBand("");
                setBust("");
                setResult(null);
                setHasCalculated(false);
              }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                border: "none",
                padding: "5px 13px",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                ...(unit === "cm"
                  ? {
                      backgroundColor: "rgb(32, 32, 32)",
                      color: "#ffffff",
                      borderRadius: "40px",
                      opacity: 1,
                    }
                  : {
                      backgroundColor: "#ffffff",
                      color: "rgb(32, 32, 32)",
                      opacity: 0.5,
                    }),
              }}
            >
              CM
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "rgb(18, 18, 18)",
              width: "20%",
              flexShrink: 0,
            }}
          >
            Step 1
          </span>
          <input
            data-testid="input-band-size"
            type="number"
            placeholder={
              unit === "in" ? "Band Size (e.g. 34.5)" : "Underbust Size (e.g. 76)"
            }
            value={band}
            onChange={(e) => setBand(e.target.value)}
            style={{
              backgroundColor: "rgb(244, 242, 239)",
              border: "none",
              borderRadius: "12px",
              padding: "18px",
              width: "100%",
              fontSize: "15px",
              fontFamily: "Arial, sans-serif",
              color: "rgb(32, 32, 32)",
              outline: "none",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "rgb(18, 18, 18)",
              width: "20%",
              flexShrink: 0,
            }}
          >
            Step 2
          </span>
          <input
            data-testid="input-bust-size"
            type="number"
            placeholder={
              unit === "in" ? "Bust Size (e.g. 34.5)" : "Bust Size (e.g. 86)"
            }
            value={bust}
            onChange={(e) => setBust(e.target.value)}
            style={{
              backgroundColor: "rgb(244, 242, 239)",
              border: "none",
              borderRadius: "12px",
              padding: "18px",
              width: "100%",
              fontSize: "15px",
              fontFamily: "Arial, sans-serif",
              color: "rgb(32, 32, 32)",
              outline: "none",
            }}
          />
        </div>
      </div>

      <button
        data-testid="button-get-my-size"
        onClick={handleCalculate}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#C8D540";
          e.currentTarget.style.color = "rgb(18, 18, 18)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgb(32, 32, 32)";
          e.currentTarget.style.color = "#ffffff";
        }}
        style={{
          display: "inline-block",
          backgroundColor: "rgb(32, 32, 32)",
          color: "#ffffff",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "1.4px",
          textTransform: "uppercase",
          border: "1px solid transparent",
          borderRadius: "11px",
          padding: "11px 40px",
          cursor: "pointer",
          marginTop: "16px",
          transition: "all 0.2s ease-in-out",
        }}
      >
        Get My Size
      </button>

      {hasCalculated && (
        <>
          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgb(230, 230, 230)",
              margin: "20px 0",
            }}
          />
          <div
            data-testid="text-calculator-result"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "65px",
              padding: "20px 0",
            }}
          >
            {result ? (
              <>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "16px",
                    fontWeight: 350,
                    color: "rgb(18, 18, 18)",
                  }}
                >
                  Your recommended size is:
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "rgb(18, 18, 18)",
                    backgroundColor: "#C8D540",
                    borderRadius: "40px",
                    padding: "8px 24px",
                  }}
                >
                  {result}
                </span>
              </>
            ) : (
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "rgb(18, 18, 18)",
                  lineHeight: 1.5,
                }}
              >
                We currently do not offer this size. Please double check your
                measurements or reach out to our fit experts.
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
}
