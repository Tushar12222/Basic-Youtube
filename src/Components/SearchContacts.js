import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import searchContext from "../Global/Search/SearchContext";

export default function SearchContacts(props) {
  const context = useContext(searchContext);
  const { search, setClick } = context;

  return (
    <>
      {props.ele ? (
        <li>
          <Link className="dropdown-item" onClick={()=>{setClick(props.ele.id,props.ele.video,props.ele.title); localStorage.setItem("name",props.ele.title)}} to="/fullscreen">
            <div className="d-flex container my-0">
              <ReactPlayer
                height={"20%"}
                width={"20%"}
                controls={false}
                url={`http://127.0.0.1:8090/api/files/streams/${props.ele.id}/${props.ele.video}?thumb="100x400`}
              />
              <div className="container">
                <b>{props.ele.title}</b>
              </div>
            </div>
          </Link>

          {search && search.length - 1 != props.index && <hr />}
        </li>
      ) : (
        <li>No results found</li>
      )}
    </>
  );
}
