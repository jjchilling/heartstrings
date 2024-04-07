"use client";
import { useState, useEffect, ReactElement } from "react";
import title from "../public/heartstrings-title.png";
import logo from "../public/logo.png";

const Music = () => {
  const [uid, setUid] = useState<string>("");


    type Image = {
    caption: string;
    file_name: string;
    };

    const img1: Image = {
      caption: "Are you there?",
      file_name: "image1.jpg",
    };
    const img2: Image = {
      caption: "Can you hear me?",
      file_name: "image2.jpg",
    };
    const img3: Image = {
      caption: "Please say you need me.",
      file_name: "image3.jpg",
    };

    const images: Image[] = [img1, img2, img3];

    let images_section: ReactElement[] = [];
    images.forEach((image, index) => {
        images_section.push(
        <div className="px-10 py-20">
            <img
            src={`/assets/${image.file_name}`}
            width={"400px"}
            height={"400px"}
            />
            <div className="text-center italic mt-1 px-5 py-2 w-full lg:text-lg text-lg">
            {image.caption}
            </div>
        </div>
        );
    });
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5062B6] to-[#CAAEFB]">
      <div className="pt-10 lg:pt-20 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl text-white font-bold font-serif">
            Music
          </h1>
          <div className="lg:pt-[100px] flex flex-wrap justify-center font-serif">
            {images_section}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="p-10 space-y-6">
            {/* Your Music page content here */}
            {/* If I want vertical image section instead */}
            {/* <div className="lg:pt-[100px]">{images_section}</div> */}
            <h1 className="text-4xl lg:text-4xl text-white font-serif">
              Songs:
            </h1>
            <h2 className="text-2xl font-serif">1. Needy </h2>
            <h2 className="text-2xl font-serif">2. Time Machine </h2>
            <h2 className="text-2xl font-serif">3. Fantasy Love </h2>
            <h2 className="text-2xl font-serif">4. Ever Wanted </h2>
            <h2 className="text-2xl font-serif">5. You never say Goodbye </h2>
            <h2 className="text-2xl font-serif">6. New City </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
