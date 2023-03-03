import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import searchContext from "../Global/Search/SearchContext";

export default function Fullscreen() {
    const context = useContext(searchContext);
    const {clicked} = context;
    
    
  return (
    <>
      {clicked && (
        <div>
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            controls={true}
            url={`http://127.0.0.1:8090/api/files/streams/${clicked.id}/${clicked.vid}?thumb="100x400`}
          />
        </div>
      )}
    </>
  );
}
