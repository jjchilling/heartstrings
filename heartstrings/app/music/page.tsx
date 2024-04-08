"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/components/sparkle.module.css";
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


export default function Music() {
interface Sparkle {
  id: number;
  style: {
    left: string;
    top: string;
    animationDuration: string;
    animationDelay: string;
  };
}

const titleSubText = "Time Machine";
const titleName = "Heesu";

const [sparkles, setSparkles] = useState<Sparkle[]>([]);

useEffect(() => {
  const newSparkles = Array.from({ length: 30 }).map((_, index) => ({
    id: index,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() + 0.5}s`,
      animationDelay: `${Math.random() * 2}s`,
    },
  }));
  setSparkles(newSparkles);
}, []);

const router = useRouter(); // Now correctly imported

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[#5062B6] to-[#CAAEFB] relative ${styles.sparklingBackground}`}
    >
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className={styles.sparkle}
          style={{
            ...sparkle.style,
            position: "absolute",
          }}
        ></div>
      ))}
      <Navbar />
      <div className="flex flex-col items-center justify-center grow">
        <h1 className="text-white text-5xl font-bold mt-4 md:mt-8 font-serif">
          {titleSubText}
        </h1>
        <h2 className="text-pink-100 text-3xl mt-2 font-serif">{titleName}</h2>
        <h2 className="text-pink-200 text-2xl mt-2 font-serif">04.28.2024</h2>
        <div className="flex flex-col items-center justify-center grow space-y-4">
          <div>
            <Release
              imageUrl="/time-machine.jpg"
              imageAlt="Time Machine"
              buttonText="Coming Soon"
              buttonLink="https://linktr.ee/JulieChung"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center grow space-y-4">
          <h1 className="text-white text-5xl font-bold mt-4 md:mt-8 font-serif">
            {"New City"}
          </h1>
          <h2 className="text-pink-100 text-3xl mt-2 font-serif">{"Heesu"}</h2>
          <h2 className="text-pink-200 text-2xl mt-2 font-serif">07.01.2023</h2>
          <div>
            <Release
              imageUrl="/new-city.png"
              imageAlt="New City"
              buttonText="Listen"
              buttonLink="https://youtu.be/MRcFSgx2W7s?si=vsuTDFytNW5WFKh6"
            />
          </div>
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