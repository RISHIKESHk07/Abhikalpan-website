"use client";
import React, { useState, useEffect } from "react";

function VideoComponent() {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isVideoEnded) {
      setTimeout(() => setFadeOut(true), 1000);
    }
  }, [isVideoEnded]);

  return (
    <div>
      {fadeOut ? null : (
        <video
          src="/assets/video.mp4"
          className={`absolute top-0 left-0 ${isVideoEnded ? "fade-out" : ""}`}
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            zIndex: 9999,
          }}
          autoPlay
          muted
          onEnded={() => setIsVideoEnded(true)}
        >
          Your browser does not support the video tag.
        </video>
      )}
      <style jsx>{`
        .fade-out {
          animation: fadeOut 2s forwards;
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default VideoComponent;
