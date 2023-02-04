import React, { useContext } from "react";
import "./Options.css";
import PromptContext from "../../context/PromptContext";
const Options = () => {
  const getContext = useContext(PromptContext);
  const { setimageValue } = getContext;
  const getImage = (e) => {
    setimageValue(parseInt(e.target.id));
    const option_container = document.querySelector(".options"),
      down_arrow = document.querySelector(".fa-angle-down"),
      select_text = document.querySelector(".select-btn span");
    select_text.innerText = e.target.id;
    option_container.classList.toggle("active");
    down_arrow.classList.toggle("rotate");
  };
  const showOptions = () => {
    const option_container = document.querySelector(".options");
    const down_arrow = document.querySelector(".fa-angle-down");
    option_container.classList.toggle("active");
    down_arrow.classList.toggle("rotate");
  }; 
  return (
    <div className="option-relative">
      <div className="option-container">
        <div className="option-menu">
          <div className="select-btn" onClick={showOptions}>
            <span>Number</span>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div className="options">
            <ul>
              <li id="1" onClick={getImage}>
                1
              </li>
              <li id="2" onClick={getImage}>
                2
              </li>
              <li id="3" onClick={getImage}>
                3
              </li>
              <li id="4" onClick={getImage}>
                4
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
