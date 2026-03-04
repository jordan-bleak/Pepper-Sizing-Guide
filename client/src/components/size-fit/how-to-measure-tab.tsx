export function HowToMeasureTab() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "58%",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h3
          data-testid="text-measure-heading"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            margin: "0 0 12px",
            textAlign: "center",
            color: "rgb(18, 18, 18)",
          }}
        >
          Finding Your Bra Size
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            lineHeight: "21px",
            color: "rgb(18, 18, 18)",
            margin: "14px 0 0",
            textAlign: "center",
          }}
        >
          Wear a lightly lined bra (no push-ups or compression bras) and use a
          soft measuring tape. If you don't have a measuring tape, use a string
          and then measure it against a ruler.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        <StepCard
          stepNumber={1}
          title="Underbust Measurement"
          items={[
            "Wrap the tape around your ribcage just beneath your bust",
            "Keep the tape parallel to the floor and level around your back",
            "Exhale and take the measurement",
          ]}
          bgColor="rgb(244, 242, 239)"
        />
        <StepCard
          stepNumber={2}
          title="Bust Measurement"
          items={[
            "Wrap the tape around the fullest part of your bust",
            "Keep the tape parallel to the floor",
            "Make sure the tape is snug but not too tight",
          ]}
          bgColor="rgb(225, 232, 247)"
        />
      </div>
    </div>
  );
}

function StepCard({
  stepNumber,
  title,
  items,
  bgColor,
}: {
  stepNumber: number;
  title: string;
  items: string[];
  bgColor: string;
}) {
  return (
    <div
      data-testid={`card-step-${stepNumber}`}
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "calc(50% - 10px)",
        overflow: "visible",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "340px",
          borderRadius: "12px",
          backgroundColor: bgColor,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "20px",
          position: "absolute",
          top: 0,
          left: 0,
          margin: "21px 20px",
          columnGap: "20px",
          minHeight: "auto",
          zIndex: "auto",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgb(191, 205, 193)",
              borderRadius: "100%",
              width: "30px",
              height: "30px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              color: "rgb(18, 18, 18)",
              flexShrink: 0,
            }}
          >
            {stepNumber}
          </div>
          <h3
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "rgb(18, 18, 18)",
              margin: 0,
            }}
          >
            {title}
          </h3>
        </div>
        <ul
          style={{
            margin: 0,
            paddingLeft: "24px",
            listStyleType: "disc",
          }}
        >
          {items.map((item, i) => (
            <li
              key={i}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                lineHeight: 1.4,
                color: "rgb(18, 18, 18)",
                margin: "0 0 4px",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
