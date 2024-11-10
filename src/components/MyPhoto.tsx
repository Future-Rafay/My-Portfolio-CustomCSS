import React from "react";
import Image from "next/image";
import mainImage from "../../public/images/Future-Rafay.png"
import "../styles/MyPhoto.module.css";

const Photo = () => {
  return (
    <div>
      <Image
        src={mainImage}
        alt="Main Image"
        width={350}
        height={350}
        className="Photo"
      />
    </div>
  );
};

export default Photo;