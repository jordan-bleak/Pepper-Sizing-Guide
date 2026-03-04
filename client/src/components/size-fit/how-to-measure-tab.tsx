import { useState, useRef } from "react";

export function HowToMeasureTab() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

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
        data-testid="video-container"
        style={{
          display: "flex",
          width: "100%",
          position: "relative",
          cursor: "pointer",
        }}
        onClick={handlePlayPause}
      >
        <video
          ref={videoRef}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "12px",
          }}
          onEnded={() => setIsPlaying(false)}
          playsInline
        >
          <source src="/videos/finding-your-bra-size.mp4" type="video/mp4" />
        </video>
        {!isPlaying && (
          <button
            data-testid="button-play-video"
            onClick={(e) => {
              e.stopPropagation();
              handlePlayPause();
            }}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
              background: "rgba(255, 255, 255, 0.85)",
              border: "none",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="rgb(18, 18, 18)"
            >
              <polygon points="6,3 20,12 6,21" />
            </svg>
          </button>
        )}
      </div>

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
          How do I measure?
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
          Before you start, put on a lightly lined bra — no push-ups or
          compression sports bras — and grab a soft measuring tape. If you don't
          have a measuring tape, it's no big deal. A string and a ruler work too.
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
