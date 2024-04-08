"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Heart() {
  const router = useRouter();

  // Initialize audio state with undefined and set it in useEffect
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState(true);

  // UseEffect for initializing the audio object
  useEffect(() => {
    if (typeof Audio !== "undefined") {
      const newAudio = new Audio("/timemachine-loop.wav");
      newAudio.loop = true;
      setAudio(newAudio);
    }
  }, []);

  // Handle automatic play/pause based on isPlaying state
  useEffect(() => {
    const togglePlayback = async () => {
      if (audio) {
        if (isPlaying) {
          try {
            await audio.play();
          } catch (err) {
            console.error("Playback failed:", err);
            setIsPlaying(false); // Optionally handle the error, such as updating UI
          }
        } else {
          audio.pause();
        }
      }
    };

    togglePlayback();

    // Cleanup function to pause and reset the audio when the component unmounts
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [isPlaying, audio]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundImage: `url("/timemachine.gif")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      <div
        style={{
          zIndex: 2,
          color: "white",
          padding: "20px",
          fontFamily: "serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center", // Centers the button, not the text container
          width: "100%", // Ensures the container spans the width of the viewport
        }}
      >
        {/* Text Container */}
        <div
          style={{
            textAlign: "center",
            color: "blue",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          {" "}
          {/* Aligns text to left */}
          <p>Down the road</p>
          <p>We&apos;re still the same</p>
          <p>As we were at</p>
          <p>Seventeen...</p>
        </div>
        <button
          onClick={togglePlay}
          style={{
            background: `url(${
              isPlaying ? "/logo.png" : "/logo.png"
            }) no-repeat center center`,
            backgroundSize: "contain",
            width: "150px", // Set as per your image aspect ratio
            height: "150px", // Set as per your image aspect ratio
            border: "none",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          {/* Invisible text for accessibility */}
          <span style={{ visibility: "hidden" }}>
            {isPlaying ? "Pause" : "Play"}
          </span>
        </button>
        <button
          onClick={navigateToHome}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            color: "white",
            backgroundColor: "transparent",
            border: "2px solid white",
            borderRadius: "30px",
            cursor: "pointer",
          }}
        >
          Heart
        </button>
      </div>
      <div style={{ height: "50px" }}></div>
    </div>
  );
}
