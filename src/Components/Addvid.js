import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import streamContext from "../Global/Streams/streams/StreamContext";


export default function Addvid() {
  const navigate = useNavigate();
  const context = useContext(streamContext);
  const { addStreams } = context;
  const [file, setFile] = useState(null);
  const [details, setDetails] = useState({
    title: "",
    desc: "",
  });
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    addStreams(file, details.title, details.desc);
    swal("Success", "Video Uploaded!", "success");
    navigate("/");
  };
  return (
    <>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="input-group container my-3">
          <input
            name="file"
            accept=".mp4"
            type="file"
            onChange={handleFileChange}
            className="form-control"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
          />
          {file && (
            <button
              className="btn btn-outline-danger"
              type="button"
              onClick={() => {
                document.getElementById("inputGroupFile04").value = null;
                setFile(null);
              }}
              id="inputGroupFileAddon04"
            >
              Clear
            </button>
          )}
        </div>
        <div className="container">
          <div className="input-group flex-nowrap my-2">
            <span className="input-group-text" id="addon-wrapping">
              Title
            </span>
            <input
              name="title"
              onChange={handleChange}
              value={details.title}
              type="text"
              className="form-control"
              placeholder="Type here"
              aria-label="title"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div className="input-group flex-nowrap my-3">
            <span className="input-group-text" id="addon-wrapping">
              Description
            </span>
            <textarea
              name="desc"
              onChange={handleChange}
              value={details.desc}
              type="text"
              className="form-control"
              placeholder="Type here"
              aria-label="desc"
              aria-describedby="addon-wrapping"
              rows={5}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </div>
      </form>
    </>
  );
}
