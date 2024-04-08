"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../components/sparkle.module.css";
import Navbar from "@/components/Navbar";
import Release from "@/components/Release";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
library.add(faInstagram, faSpotify, faYoutube);



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
  const subText = ["H", "e", "e", "s", "u"];
  const [subTextIndex, setSubTextIndex] = useState<number>(0);
  const [titleSubText, setTitleSubtext] = useState<string>("");
  const [isBlinking, setIsBlinking] = useState<string>("");

  const name = ["H", "e", "a", "r", "t", "S", "t", "r", "i", "n", "g", "s"];
  const [nameIndex, setNameIndex] = useState<number>(0);
  const [titleName, setTitleName] = useState<string>("");
  const [nameBlinking, setNameBlinking] = useState<string>("");

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
      let delay = subTextIndex == 0 ? 400 : 100;
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


  useEffect(() => {
    if (nameIndex < name.length) {
      let delay = nameIndex == 0 ? 400 : 200;
      setIsBlinking((_) => "");
      const timeout = setTimeout(() => {
        setTitleName((prevText) => prevText + name[nameIndex]);
        setNameIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      setNameBlinking((_) => "blink");
      const timeout = setTimeout(() => {
        setTitleName("");
        setNameIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [nameIndex, name]);

  // Example function to navigate to the /about page
  const navigateToMusic = () => {
    router.push("/music"); // Use router.push to navigate
  };

  const navigateToAbout= () => {
    router.push("/about"); // Use router.push to navigate
  };

  const navigateToHeart = () => {
    router.push("/heart"); // Use router.push to navigate
  };

  const navigateToPink = () => {
    router.push("/pink"); // Use router.push to navigate
  };

  const navigateToNewCity = () => {
    router.push("/newcity"); // Use router.push to navigate
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[#5062B6] to-[#CAAEFB] relative ${styles.sparklingBackground}`}
    >
      <div className={`flex flex-col min-h-screen`}>
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className={styles.sparkle}
            style={sparkle.style}
          ></div>
        ))}
        <Navbar />
        <div className={`${styles.contentContainer} flex-grow`}>
          {/* Title and subtitle section, margin bottom adjusted for closer positioning */}
          <div className="flex flex-row justify-center items-center mt-4 md:mt-8">
            <div className="text-center">
              <div className="text-white lg:text-5xl text-2xl font-serif mb-4 md:mb-8">
                {" "}
                {titleSubText}
                <div
                  className={`inline-block w-8 h-8 rounded-full bg-[#D292FF] ${isBlinking}`}
                />
              </div>

              <div className="text-sky-100 lg:text-3xl text-1xl font-serif mb-4 md:mb-8 text-opacity-70">
                {" "}
                {titleName}
                <div
                  className={`inline-block w-8 h-8 rounded-full bg-[#D292FF] ${nameBlinking}`}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-pink-200 text-1xl mt-1 font-serif text-opacity-50">
              Click on image! Click on the Hearts!
            </h2>
          </div>

          <Release
            imageUrl="/heartstrings-title.png"
            imageAlt="HeartStrings"
            buttonText="Pre-save"
            buttonLink="https://youtu.be/MRcFSgx2W7s?si=vsuTDFytNW5WFKh6"
            onImageClick={navigateToHeart}
          ></Release>

          <Release
            imageUrl="/time-machine.jpg"
            imageAlt="Time Machine"
            buttonText="Pre-save"
            buttonLink="https://youtu.be/MRcFSgx2W7s?si=vsuTDFytNW5WFKh6"
            onImageClick={navigateToPink}
          ></Release>

          <Release
            imageUrl="/new-city.png"
            imageAlt="New City"
            buttonText="Listen"
            buttonLink="https://youtu.be/MRcFSgx2W7s?si=vsuTDFytNW5WFKh6"
            onImageClick={navigateToNewCity}
          ></Release>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <a
            href="https://www.instagram.com/heesuhh/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px" }}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "white", fontSize: "34px" }}
            />
          </a>

          <a
            href="https://open.spotify.com/artist/3t2IEVb5kQqpofto7Pc2J6?si=ENAi6kaSRgmrYY8rg4iTLw"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "10px" }}
          >
            <FontAwesomeIcon
              icon={faSpotify}
              style={{ color: "white", fontSize: "34px" }}
            />
          </a>

          <a
            href="https://youtube.com/channel/UC3xwbxOQdoiTPkj8bXUFV-A?si=lIJUa30KreJcGrWl"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px" }}
          >
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ color: "white", fontSize: "34px" }}
            />
          </a>
        </div>
      </div>

      <div style={{ height: "50px" }}></div>
    </div>
  );
}