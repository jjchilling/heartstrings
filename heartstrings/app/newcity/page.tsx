"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Heart() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(true);
  // Initialize audio with undefined to ensure type safety
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>(undefined);

  // Effect for initializing the audio object
  useEffect(() => {
    // Ensure Audio is defined (e.g., not during SSR)
    if (typeof Audio !== "undefined") {
      const newAudio = new Audio("/newcity-loop.wav");
      newAudio.loop = true; // Set audio to loop
      setAudio(newAudio); // Set the initialized audio object to state
    }
  }, []);

  // Effect for handling play/pause based on isPlaying state
  useEffect(() => {
    const togglePlayback = async () => {
      if (audio) {
        if (isPlaying) {
          try {
            await audio.play();
          } catch (err) {
            console.error("Playback failed:", err);
            setIsPlaying(false); // Optionally handle error, e.g., due to autoplay policy
          }
        } else {
          audio.pause();
        }
      }
    };

    togglePlayback();

    // Cleanup function to pause and reset audio on component unmount
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
          backgroundImage: `url("/newcity.gif")`,
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
            color: "white",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          {" "}
          {/* Aligns text to left */}
          <p>1, 2, 3, 4</p>
          <p>Woke up in a new city</p>
          <p>But you weren&apos;t there for me</p>
          <p>Ran across the bridges</p>
          <p>To find out you were gone...</p>
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
            border: "1px solid white",
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
