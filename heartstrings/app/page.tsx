"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "../components/sparkle.module.css";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import Navbar from "@/components/Navbar";

export default function Home() {

  interface Sparkle {
    id: number;
    style: {
      left: string;
      top: string;
      animationDuration: string;
      animationDelay: string;
    };
  }
  
  const [uid, setUid] = useState<string>("");
  const subText = ["H", "e", "a", "r", "t", "S", "t", "r", "i", "n", "g", "s"];
  const [subTextIndex, setSubTextIndex] = useState<number>(0);
  const [titleSubText, setTitleSubtext] = useState<string>("");
  const [isBlinking, setIsBlinking] = useState<string>("");

  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: 30 }).map((_, index) => ({
      id: index,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() + 0.5}s`, // Ensures the animation lasts at least 0.5s
        animationDelay: `${Math.random() * 2}s`, // Starts the animation at a random time
      },
    }));

    setSparkles(newSparkles);
  }, []);


  const router = useRouter();

  useEffect(() => {
    if (subTextIndex < subText.length) {
      let delay = subTextIndex == 0 ? 400 : 200;
      setIsBlinking((_) => "");
      const timeout = setTimeout(() => {
        setTitleSubtext((prevText) => prevText + subText[subTextIndex]);
        setSubTextIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      setIsBlinking((_) => "animate-pulse");
      const timeout = setTimeout(() => {
        setTitleSubtext("");
        setSubTextIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [subTextIndex, subText]);

  // Example function to navigate to the /about page
  const navigateToMusic = () => {
    router.push("/music"); // Use router.push to navigate
  };

  return (
    <div
      className={`${styles.sparklingBackground} flex flex-col h-screen bg-gradient-to-b from-[#5062B6] to-[#CAAEFB]`}
    >
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className={styles.sparkle}
          style={sparkle.style}
        ></div>
      ))}
      <Navbar />
      <div className={styles.contentContainer}>
        {/* Title and subtitle section, margin bottom adjusted for closer positioning */}
        <div className="flex flex-row justify-center items-center mt-4 md:mt-8">
          <div className="text-center">
            <div className="text-white lg:text-5xl text-2xl font-semibold font-serif mb-4 md:mb-8">
              {" "}
              {titleSubText}
              <div
                className={`inline-block w-8 h-8 rounded-full bg-[#D292FF] ${isBlinking}`}
              />
            </div>
          </div>
        </div>
        {/* Clickable Image Section for navigation, adjusted for central positioning and reduced spacing from title */}
        <div className="flex items-center justify-center mt-2 md:mt-2">
          {/* Wrapping the Image component with an anchor tag or another clickable element */}
          <a onClick={navigateToMusic} style={{ cursor: "pointer" }}>
            <Image
              src="/heartstrings-title.png"
              alt="Heartstrings"
              width={500}
              height={300}
            />
          </a>
        </div>
        {/* Additional content */}
      </div>
    </div>
  );
}