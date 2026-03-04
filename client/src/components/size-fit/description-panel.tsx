export function DescriptionPanel() {
  const headingStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "12px",
    fontWeight: 700,
    color: "rgb(18, 18, 18)",
    letterSpacing: "-0.14px",
    margin: "0 0 12px 0",
    textTransform: "none",
  };

  const paragraphStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "12px",
    fontWeight: 400,
    color: "rgb(18, 18, 18)",
    lineHeight: 1.5,
    margin: "12px 0",
    letterSpacing: "-0.14px",
  };

  return (
    <div
      data-testid="panel-description"
      style={{
        display: "block",
        backgroundColor: "rgb(250, 249, 248)",
        padding: "28px",
        width: "260px",
        maxWidth: "260px",
        height: "fit-content",
        flex: "0 0 260px",
        borderRadius: "12px",
      }}
    >
      <div>
        <h3 style={headingStyle}>HOW TO MEASURE</h3>
        <p style={paragraphStyle}>
          Measure around your ribcage (under your bust) on an exhale for your
          band size. Then measure around the fullest part of your bust for your
          cup size.
        </p>
        <p style={paragraphStyle}>
          If you're between cup sizes, we recommend sizing up.
        </p>
        <p style={{ ...paragraphStyle, marginBottom: "24px" }}>
          Questions? Contact us at{" "}
          <a
            href="mailto:pepsquad@wearpepper.com"
            style={{ textDecoration: "underline", color: "inherit" }}
          >
            pepsquad@wearpepper.com
          </a>
        </p>
      </div>

      <div>
        <h3 style={headingStyle}>FIND YOUR SISTER SIZE</h3>
        <p style={{ ...paragraphStyle, marginBottom: "24px" }}>
          Moving vertically on the chart finds sister sizes with the same cup
          volume. For example, 30A and 32AA are sister sizes.
        </p>
      </div>

      <div>
        <h3 style={headingStyle}>PEPPER FIT TIPS</h3>
        <p style={paragraphStyle}>
          Our bras are designed for AA–B cups.
        </p>
        <p style={paragraphStyle}>
          Go true-to-size for maximum lift. Size up the band and down the cup
          for a more relaxed fit.
        </p>
        <p style={{ ...paragraphStyle, marginBottom: "24px" }}>
          Fuller-B cups? Try our Signature All You, Limitless Wirefree Scoop
          Bra, or Signature Unlined Demi Bra.
        </p>
      </div>

      <div>
        <h3 style={headingStyle}>ADDITIONAL FIT TIPS</h3>
        <p style={paragraphStyle}>
          Want a snug, supportive fit with maximum lift? Go with your true band
          and cup size.
        </p>
        <p style={paragraphStyle}>
          Prefer a relaxed, easy fit? Size up the band, and size down the cup.
        </p>
        <p style={{ ...paragraphStyle, marginBottom: 0 }}>
          Consider yourself a fuller B cup? Styles we recommend: Signature All
          You, Limitless Wirefree Scoop Bra, Signature Unlined Demi Bra.
        </p>
      </div>
    </div>
  );
}
