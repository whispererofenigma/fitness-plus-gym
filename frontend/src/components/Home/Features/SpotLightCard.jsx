import { useEffect, useRef } from "react";
import "./Spotlightcard.css";

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  baseline = "50vh", // Baseline to measure distance from (default is top of the viewport)
}) => {
  const divRef = useRef(null);

  let ticking = false;
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (divRef.current) {
          const rect = divRef.current.getBoundingClientRect();
          const baselineInPx = typeof baseline === "string" && baseline.includes("vh")
            ? (parseFloat(baseline) / 100) * window.innerHeight
            : parseFloat(baseline);
          const distanceFromBaseline = rect.top - baselineInPx;

          const spotlightIntensity = Math.max(1 - Math.abs(distanceFromBaseline) / 500, 0);
          const spotlightY = Math.max(Math.min(rect.top + rect.height / 2, window.innerHeight), 0);

          divRef.current.style.setProperty("--spotlight-y", `${spotlightY}px`);
          divRef.current.style.setProperty("--spotlight-intensity", spotlightIntensity);
          divRef.current.style.setProperty("--spotlight-color", spotlightColor);
        }
        ticking = false;
      });
      ticking = true;
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize spotlight position on load

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [baseline]);

  return (
    <div ref={divRef} className={`card-spotlight ${className}`}>
      {children}
    </div>
  );
};

export default SpotlightCard;
