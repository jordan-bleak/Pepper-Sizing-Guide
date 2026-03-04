import { useState } from "react";
import {
  sizeChartInch,
  sizeChartCm,
  bustHeadersInch,
  bustHeadersCm,
} from "./size-chart-data";

export function SizeChartTab() {
  const [unit, setUnit] = useState<"in" | "cm">("in");

  const data = unit === "in" ? sizeChartInch : sizeChartCm;
  const bustHeaders = unit === "in" ? bustHeadersInch : bustHeadersCm;

  const cellBase: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "clamp(10px, 1.3vw, 14px)",
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
    textAlign: "center",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    lineHeight: 1,
    padding: "clamp(8px, 1.2vw, 15px) clamp(2px, 0.4vw, 4px)",
    border: "1px solid rgb(230, 230, 230)",
  };

  return (
    <div
      style={{
        paddingLeft: "clamp(40px, 5vw, 60px)",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "block",
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          maxWidth: "clamp(32px, 4vw, 46px)",
          width: "clamp(32px, 4vw, 46px)",
          textAlign: "center",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(11px, 1.3vw, 14px)",
          color: "rgb(18, 18, 18)",
          fontWeight: 700,
          lineHeight: 1.3,
        }}
      >
        Under
        <br />
        bust
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "10px",
          marginBottom: "clamp(8px, 1.2vw, 16px)",
        }}
      >
        <span
          data-testid="text-bust-label"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(11px, 1.3vw, 14px)",
            fontWeight: 700,
            color: "rgb(18, 18, 18)",
          }}
        >
          Bust
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            border: "2px solid rgb(230, 230, 230)",
            borderRadius: "40px",
            overflow: "hidden",
            width: "fit-content",
          }}
        >
          <button
            data-testid="button-unit-in"
            onClick={() => setUnit("in")}
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
            data-testid="button-unit-cm"
            onClick={() => setUnit("cm")}
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

      <div>
        <table
          data-testid="table-size-chart"
          style={{
            borderCollapse: "collapse",
            width: "100%",
            tableLayout: "fixed",
          }}
        >
          <colgroup>
            <col style={{ width: "12.5%" }} />
            {bustHeaders.map((_, i) => (
              <col key={i} style={{ width: `${87.5 / bustHeaders.length}%` }} />
            ))}
          </colgroup>
          <thead>
            <tr>
              <th
                style={{
                  ...cellBase,
                  background: "none",
                  border: "none",
                  height: "auto",
                }}
              />
              {bustHeaders.map((h, i) => (
                <th
                  key={h}
                  style={{
                    ...cellBase,
                    height: "auto",
                    fontWeight: 400,
                    backgroundColor: "#ffffff",
                    borderBottom: "2px solid rgb(32, 32, 32)",
                    borderTop: "2px solid rgb(32, 32, 32)",
                    ...(i === 0
                      ? { borderLeft: "2px solid rgb(32, 32, 32)" }
                      : {}),
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIdx) => (
              <tr key={row.underBust}>
                <td
                  style={{
                    ...cellBase,
                    height: "auto",
                    borderLeft: "2px solid rgb(32, 32, 32)",
                    borderRight: "2px solid rgb(32, 32, 32)",
                    fontWeight: 400,
                    backgroundColor: "#ffffff",
                    ...(rowIdx === 0
                      ? { borderTop: "2px solid rgb(32, 32, 32)" }
                      : {}),
                  }}
                >
                  {row.underBust}
                </td>
                {row.cells.map((cell, colIdx) => {
                  const isOddCol = colIdx % 2 === 1;
                  let bgColor = "#ffffff";
                  if (cell) {
                    bgColor = isOddCol
                      ? "rgb(225, 232, 247)"
                      : "rgb(250, 249, 248)";
                  }

                  return (
                    <td
                      key={colIdx}
                      data-testid={cell ? `cell-size-${cell.size}` : undefined}
                      style={{
                        ...cellBase,
                        height: "auto",
                        backgroundColor: bgColor,
                        ...(rowIdx === 0
                          ? { borderTop: "2px solid rgb(32, 32, 32)" }
                          : {}),
                      }}
                    >
                      {cell ? (
                        <>
                          {cell.size}
                          <br />
                          <span
                            style={{
                              fontSize: "clamp(9px, 1vw, 11px)",
                              opacity: 0.7,
                            }}
                          >
                            {cell.alpha}
                          </span>
                        </>
                      ) : (
                        ""
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
