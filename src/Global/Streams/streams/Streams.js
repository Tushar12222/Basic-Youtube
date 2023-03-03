import React, { useState } from "react";
import streamContext from "./StreamContext";
import PocketBase from "pocketbase";

export default function Streams(props) {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const [streams, setStreams] = useState(null);
  const getStreams = async () => {
    const records = await pb
      .collection("streams")
      .getFullList(200 /* batch size */, {
        sort: "-created",
      });
    setStreams(records);
    subscribe();
  };
  const subscribe = async () => {
    await pb
      .collection("streams")
      .subscribe("*", async ({ action, record }) => {
        if (action === "create") {
          getStreams();
        }
        if (action === "delete") {
          getStreams();
        }
      });
  };
  const addStreams = async (file, title, desc) => {
    
    const formData = new FormData();
    formData.append("video",file);
    formData.append("title",title);
    formData.append("description",desc);
    
    
    const record = await pb.collection("streams").create(formData);
    
  };
  return (
    <>
      <streamContext.Provider value={{ streams, getStreams, addStreams }}>
        {props.children}
      </streamContext.Provider>
    </>
  );
}
