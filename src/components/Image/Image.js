import React, { useContext } from "react";
import PromptContext from "../../context/PromptContext";
import Spinner from "../Spinner/Spinner";
import "./Image.css";
const Image = () => {
  const getContext = useContext(PromptContext);
  const { image, data, loadingBar } = getContext;
  const showSelect=(e)=>{
    // console.log(e.target.id)
    const image_numbers=document.querySelectorAll('.image');
    const select_images=document.querySelectorAll('.select-image')
    image_numbers.forEach((element)=>{
      element.classList.remove('select');
      element.classList.remove('stop');
    });
    select_images.forEach((element)=>{
      element.classList.remove('hide');
    })
    // console.log(image_numbers)
    const select=document.getElementById(`${e.target.id}`).parentNode;
    const select_image=select.querySelector('.select-image');
    select_image.classList.toggle('hide')
    select.classList.toggle('select')
    select.classList.toggle('stop')
  }
  return (
    <>
      {loadingBar && <Spinner />}
      <div className="image-container">
        {data && !loadingBar && (
          <>
            <div className="btn">
              <button>Sell Prompt</button>
            </div>
            <div className="images">

            {image.map((element,index) => {
              return (
                <div className="image" onClick={showSelect}>
                  <img src={element.url} className="img-fluid" alt="" id={`${index+20}`}/>
                  <a href={element.url} target="_blank" rel="noreferrer">
                    <i class="fa-solid fa-download"></i>
                  </a>
                  <img src="https://tse1.mm.bing.net/th?id=OIP.uGCy5KgxPmLDvY7ACQ475wHaHa&pid=Api&P=0" className="select-image" alt="" />
                </div>
              );
            })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Image;
