import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Videocards(props) {
  return (
    <>
      <div className="col-md-4 container my-3">
        <div className="card" style={{ width: "100%" }}>
          <ReactPlayer
            height={"100%"}
            width={"100%"}
            controls={true}
            url={`http://127.0.0.1:8090/api/files/streams/${props.ele.id}/${props.ele.video}?thumb="100x400`}
            playing={false}
          />
          <div className="card-body">
            <h5 className="card-title">{props.ele.title}</h5>
            <p className="card-text">
              {props.ele.description}
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}
