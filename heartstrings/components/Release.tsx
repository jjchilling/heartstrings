import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface ReleaseProps {
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
  onImageClick?: () => void;
}


export default function Release({ imageUrl, imageAlt, buttonText, buttonLink, onImageClick } : ReleaseProps) {
      return (
        <div className="flex flex-col items-center justify-center mt-2 md:mt-4">
          {/* Image Container */}
          <div className="mb-4">
            <div onClick={onImageClick} style={{ cursor: "pointer" }}>
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={500}
                height={300}
                layout="intrinsic"
              />
            </div>
          </div>
          {/* Button Container */}
          <div>
            <button
              onClick={() => window.open(buttonLink, "_blank")}
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
              {buttonText}
            </button>
          </div>
        </div>
      );
    };
