import React,{useState,useEffect} from "react";
import "./Spinner.css";
import loading from "../../../src/assets/speeding.jpeg";
import LoadingBar from "react-top-loading-bar";
const Spinner = () => {
  const [filled, setfilled] = useState(0);
  // const [isRunning, setisRunning] = useState(false);
  // useEffect(() => {
  //   if(filled<100 && isRunning){
  //     setTimeout(() => {
  //       setfilled(prev=>prev+=2)
  //     }, 50);
  //   }
  // }, [filled,isRunning])
  setTimeout(() => {
    setfilled(prev=>prev+=0.6)
  }, 50);
  return (
    <div class="d-flex justify-content-center">
      <img src={loading} alt="" />
      <p>It is illegal to climb trees in Oshawa, a town in Ontario, Canada.</p>
      <div className="progressbar">
        <div
          className="progress"
          style={{
            height: "100%",
            width: `${filled}%`,
            backgroundColor: "white",
            transition: "width 0.5s",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
