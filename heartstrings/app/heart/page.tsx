"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Heart() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(true);

  // Initialize audio in a state that can be either an Audio object or undefined
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>(undefined);

  useEffect(() => {
    // Dynamically import the Audio object to ensure it's not undefined
    if (typeof Audio !== "undefined") {
      const newAudio = new Audio("/alliwanted-loop.wav");
      newAudio.loop = true;
      setAudio(newAudio); // Set the audio state with the new Audio object
    }
  }, []);

  useEffect(() => {
    // Effect to handle auto-play when component mounts and manage play state
    const playAudio = async () => {
      if (audio && isPlaying) {
        try {
          await audio.play();
        } catch (err) {
          console.error("Failed to play audio automatically:", err);
          setIsPlaying(false);
        }
      } else if (audio && !isPlaying) {
        audio.pause();
      }
    };

    playAudio();

    // Cleanup function to pause and reset audio on component unmount
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audio, isPlaying]); // Depend on audio and isPlaying so this effect reacts to their changes

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const navigateToHome = () => {
    router.push("/"); // Navigate to home
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
          backgroundImage: `url("/heart.gif")`,
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
          style={{ textAlign: "center", width: "100%", marginBottom: "10px" }}
        >
          {" "}
          {/* Aligns text to left */}
          <p>All I want to do is run</p>
          <p>All I wanted was some fun</p>
          <p>All I wanted was no longer</p>
          <p>My own my own my own...</p>
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
