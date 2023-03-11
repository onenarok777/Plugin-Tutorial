import "animate.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CardPlugin = ({ data }) => {
  const navigate = useNavigate();
  let [imgSize, setImgSize] = useState({
    width: "5rem",
    height: "5rem",
  });

  return (
    <div
      className="animate__animated animate__fadeInRight card"
      style={{
        padding: "1.5rem",
        background: "transparent",
        cursor: "pointer",
      }}
      onMouseOver={() =>
        setImgSize({
          width: "6rem",
          height: "6rem",
        })
      }
      onMouseOut={() =>
        setImgSize({
          width: "5rem",
          height: "5rem",
        })
      }
      onClick={() => navigate(data.link)}
    >
      <img
        style={{ width: imgSize.width, height: imgSize.height, margin: "auto" }}
        src={data.img}
      />
      <hr />
      <h5 style={{ textAlign: "center", fontWeight: "bold" }}>{data.name}</h5>
    </div>
  );
};
export default CardPlugin;
