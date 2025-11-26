import React, { useEffect, useState } from "react";
import { preloaderData } from "../constant/preloaderSection";

const Preloader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <h2 style={{ marginBottom: "20px", fontSize: "2rem" }}>
        {preloaderData.heading}
      </h2>

      <img
        src={preloaderData.image}
        alt={preloaderData.heading}
        style={{ width: preloaderData.imageWidth, height: "auto" }}
      />n
    </div>
  );
};

export default Preloader;
