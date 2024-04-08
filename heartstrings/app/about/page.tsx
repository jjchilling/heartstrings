"use client";
import { useState, useEffect, ReactElement } from "react";
import styles from "../../components/sparkle.module.css";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
library.add(faInstagram, faSpotify, faYoutube);

const Music = () => {
  interface Sparkle {
    id: number;
    style: {
      left: string;
      top: string;
      animationDuration: string;
      animationDelay: string;
    };
  }

  type Image = {
    caption: string;
    file_name: string;
  };

  const img1: Image = {
    caption: "",
    file_name: "heesu2.jpg",
  };

  const images: Image[] = [img1];

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

  let images_section: ReactElement[] = [];
  images.forEach((image, index) => {
    images_section.push(
      <div className="px-10 py-20">
        <img
          src={`/assets/${image.file_name}`}
          width={"500px"}
          height={"500px"}
        />
        <div className="text-center italic mt-1 px-5 py-2 w-full lg:text-lg text-lg">
          {image.caption}
        </div>
      </div>
    );
  });

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[#5062B6] to-[#CAAEFB] relative ${styles.sparklingBackground}`}
    >
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className={styles.sparkle}
          style={sparkle.style}
        ></div>
      ))}
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-5xl font-bold mt-4 md:mt-8 font-serif">
            About
          </h1>
          <div className="flex flex-wrap justify-center font-serif">
            {images_section}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="p-2 space-y-1">
            <h2 className="text-2xl text-center font-serif">
              Hi. I'm Heesu, and I am an independent artist based in Providence.
            </h2>
            <h2 className="text-2xl font-serif">
              Single Time Machine will be released on April 28th, with album
              HeartStrings releasing on May 10th!
            </h2>
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
};
export default Music;
