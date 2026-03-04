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
    fontSize: "14px",
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
    textAlign: "center",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    lineHeight: 1,
    padding: "15px 4px",
    width: "76px",
    border: "1px solid rgb(230, 230, 230)",
  };

  return (
    <div
      style={{
        overflow: "auto",
        paddingLeft: "60px",
        position: "relative",
        width: "752px",
        flex: "0 1 auto",
      }}
    >
      <div
        style={{
          display: "block",
          position: "absolute",
          left: 0,
          top: "230px",
          maxWidth: "46px",
          width: "46px",
          textAlign: "center",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
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
          marginBottom: "16px",
        }}
      >
        <span
          data-testid="text-bust-label"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
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
            width: "672px",
            marginLeft: "auto",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  ...cellBase,
                  background: "none",
                  border: "none",
                  height: "45px",
                }}
              />
              {bustHeaders.map((h, i) => (
                <th
                  key={h}
                  style={{
                    ...cellBase,
                    height: "45px",
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
                    height: "54px",
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
                  const isBCupCol = colIdx === 3;
                  const isACupCol = colIdx === 2;
                  let bgColor = "#ffffff";
                  if (cell) {
                    if (isBCupCol) {
                      bgColor = "rgb(225, 232, 247)";
                    } else if (isACupCol) {
                      bgColor = "rgb(225, 232, 247)";
                    } else {
                      bgColor = "rgb(250, 249, 248)";
                    }
                  }

                  return (
                    <td
                      key={colIdx}
                      data-testid={cell ? `cell-size-${cell.size}` : undefined}
                      style={{
                        ...cellBase,
                        height: "54px",
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
                          <span style={{ fontSize: "11px", opacity: 0.7 }}>
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
