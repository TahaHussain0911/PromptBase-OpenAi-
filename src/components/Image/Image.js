import React, { useContext } from "react";
import PromptContext from "../../context/PromptContext";
import Spinner from "../Spinner/Spinner";
import "./Image.css";
const Image = () => {
  const getContext = useContext(PromptContext);
  const { image, data,loadingBar } = getContext;
  return (
    <>
      {loadingBar && <Spinner/>}
    <div className="image-container">
      {data && !loadingBar && (
        <>
          <div className="btn">
            <button>Sell Prompt</button>
          </div>
          <div className="image">
            <img src={image} className="img-fluid" alt="" />
            <a href={image} target="_blank" rel="noreferrer"><i class="fa-solid fa-download"></i></a>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default Image;
