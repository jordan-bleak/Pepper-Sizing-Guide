import { conversionData } from "./size-chart-data";

const columns = [
  { key: "us", label: "US" },
  { key: "alpha", label: "Alpha" },
  { key: "uk", label: "UK" },
  { key: "eu", label: "EU" },
  { key: "aus", label: "AUS" },
  { key: "fr", label: "FR" },
  { key: "it", label: "ITLY" },
  { key: "jp", label: "JP" },
] as const;

export function InternationalConversionTab() {
  return (
    <div
      style={{
        overflowX: "auto",
        overflowY: "hidden",
        width: "100%",
      }}
    >
      <table
        data-testid="table-conversion"
        style={{
          borderCollapse: "collapse",
          boxShadow: "none",
          width: "100%",
        }}
      >
        <thead
          style={{
            position: "sticky",
            top: "-1px",
            zIndex: 33,
          }}
        >
          <tr
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(8, 1fr)",
            }}
          >
            {columns.map((col, i) => (
              <th
                key={col.key}
                style={{
                  backgroundColor: "rgb(225, 232, 247)",
                  color: "rgb(32, 32, 32)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  textAlign: "center",
                  padding: "16px 4px",
                  height: "52px",
                  border: "none",
                  borderRight:
                    i < columns.length - 1
                      ? "1px solid rgb(144, 144, 144)"
                      : "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ...(i === 0
                    ? {
                        position: "sticky" as const,
                        left: "-1px",
                        zIndex: 30,
                      }
                    : {}),
                }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {conversionData.map((row, rowIdx) => (
            <tr
              key={row.us}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(8, 1fr)",
              }}
            >
              {columns.map((col, colIdx) => {
                const isOdd = rowIdx % 2 === 0;
                return (
                  <td
                    key={col.key}
                    data-testid={
                      col.key === "us"
                        ? `cell-conversion-${row.us}`
                        : undefined
                    }
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      fontWeight: 400,
                      textAlign: "center",
                      padding: "16px 4px",
                      height: "47px",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: isOdd
                        ? "rgb(250, 249, 248)"
                        : "rgb(255, 255, 255)",
                      borderRight:
                        colIdx < columns.length - 1
                          ? "1px solid rgb(144, 144, 144)"
                          : "none",
                      borderBottom: isOdd
                        ? "1px solid rgb(230, 230, 230)"
                        : "none",
                      borderTop:
                        isOdd && rowIdx !== 0
                          ? "1px solid rgb(230, 230, 230)"
                          : "none",
                      ...(rowIdx === conversionData.length - 1
                        ? { borderBottom: "1px solid rgb(230, 230, 230)" }
                        : {}),
                      ...(colIdx === 0
                        ? {
                            position: "sticky" as const,
                            left: "-1px",
                            zIndex: 30,
                          }
                        : {}),
                    }}
                  >
                    {row[col.key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
