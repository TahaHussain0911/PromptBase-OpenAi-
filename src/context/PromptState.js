import React, { useEffect, useState } from "react";
import PromptContext from "./PromptContext";
import { Configuration, OpenAIApi, OpenAIApiFactory } from "openai";
const PromptState = (props) => {
  // let a = "taha";
  const apiKey = process.env.REACT_APP_RECIPE_API;
  const [input, setinput] = useState("");
  const [image, setimage] = useState("");
  const [data, setdata] = useState(false);
  const [error, seterror] = useState(false)
  const [loadingBar, setloadingBar] = useState(false);
  const [imageValue, setimageValue] = useState(1)
  const getApi = new Configuration({
    apiKey: apiKey,
  });
  const getOpenAi = new OpenAIApi(getApi);
  const getOpenAiImage = async () => {
    // setdata(false);
    if (input !== "") {
      setloadingBar(true);
      try {
        const response = await getOpenAi.createImage({
          prompt: input,
          n: imageValue,
          size: "512x512",
        });
        // console.log(response);
        // console.log("hello")
        setimage(response.data.data);
        console.log(response.data.data);
        setdata(true);
        seterror(false)
      } catch (error) {
        seterror(true);
      }
      setloadingBar(false);
    }
  };

  return (
    <PromptContext.Provider
      value={{
        apiKey,
        getOpenAiImage,
        input,
        setinput,
        image,
        data,
        setdata,
        loadingBar,
        error,
        setimageValue
      }}
    >
      {props.children}
    </PromptContext.Provider>
  );
};

export default PromptState;
