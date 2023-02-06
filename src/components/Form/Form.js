import React, { useContext,useEffect,useState } from "react";
import PromptContext from "../../context/PromptContext";
import Options from "../Options/Options";
import './Form.css'
const Form = () => {
  const getContext = useContext(PromptContext);
  const [value, setvalue] = useState("")
  const {getOpenAiImage,input,setinput,setdata } = getContext;
  useEffect(() => {
    getOpenAiImage();
  }, [input])
  const getInput=(e)=>{
    setvalue(e.target.value);
    // console.log(e.target.value);
  }
  const handleClick=(e)=>{
    e.preventDefault();
    console.log(value)
    console.log(input)
    if (value!=="") {
      setinput(value);
    }
    else{
      setdata(false);
    }
    // console.log(value);

  }
  return (
    <div className="search-container">
      <div className="search-bar">
        <form action="" className="row search-bar gap-4" onSubmit={handleClick}>
          <label htmlFor="text" className="label">Enter a detailed description</label>
          <input
            type="text"
            name=""
            style={{ textTransform: "capitalize" }}
            id=""
            value={value}
            onChange={getInput}
            className="col-lg-10"
            placeholder="A lemon with glasses on the beach cosmic energy bright light"
            // placeholder={`Showing results for ${search}`}
          />
          <button type="submit" className="col-lg-1">
            Create
          </button>
        </form>
          <Options/>
      </div>
    </div>
  );
};

export default Form;
