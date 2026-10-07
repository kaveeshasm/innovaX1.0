"use client";

import Lottie from "lottie-react";
import loadingAnimation from "../../public/animations/loading.json";

export default function LoadingAnimation() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#05080C]">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        style={{ width: 400, height: 400 }}
      />
    </div>
  );
}