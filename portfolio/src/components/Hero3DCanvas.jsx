import React, { Suspense } from "react";
import ThreeErrorBoundary from "./ThreeErrorBoundary";

const ThreeHeroScene = React.lazy(() => import("./ThreeHeroScene"));

const Hero3DCanvas = () => {
  return (
    <ThreeErrorBoundary fallback={null}>
      <Suspense fallback={null}>
        <ThreeHeroScene />
      </Suspense>
    </ThreeErrorBoundary>
  );
};

export default Hero3DCanvas;
