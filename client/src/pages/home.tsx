import { useState } from "react";
import { SizeFitModal } from "@/components/size-fit-modal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#FAF9F8" }}>
      <button
        data-testid="button-open-size-guide"
        onClick={() => setIsOpen(true)}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          fontWeight: 700,
          color: "#ffffff",
          backgroundColor: "#202020",
          border: "none",
          borderRadius: "40px",
          padding: "14px 32px",
          cursor: "pointer",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        Size & Fit Guide
      </button>
      {isOpen && <SizeFitModal onClose={() => setIsOpen(false)} />}
    </div>
  );
}
