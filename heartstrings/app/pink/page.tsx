"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Heart() {
  const router = useRouter(); // Initialize the useRouter hook

  const [isPlaying, setIsPlaying] = useState(true);
  const [audio] = useState(() => {
    if (typeof Audio !== "undefined") {
    const newAudio = new Audio("/timemachine-loop.wav");
    newAudio.loop = true; // Set audio to loop
    return newAudio;
    }
    return undefined;
  });

  useEffect(() => {
    // This function is called when the component mounts
    // Start playing music automatically if needed or perform other initialization tasks

    return () => {
      audio.pause(); // Stop the music
      audio.currentTime = 0; // Reset the play time to the start
      setIsPlaying(false); // Reset play state
    };
  }, [audio]);

  const navigateToHome = () => {
    router.push("/"); // Correct use of router.push to navigate to the home route
  };

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying, audio]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Keeps content vertically centered
        alignItems: "center", // Aligns content container to center
        textAlign: "center", // Aligns button text to center, not the paragraphs
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
          <p>We're still the same</p>
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
          Go Home
        </button>
      </div>
      <div style={{ height: "50px" }}></div>
    </div>
  );
}
