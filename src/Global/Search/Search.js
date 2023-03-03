import React, { useState } from "react";
import searchContext from "./SearchContext";
import PocketBase from "pocketbase";

export default function Search(props) {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const [search, setSearch] = useState(null);
  const [clicked, setClicked] = useState({
    id: null,
    vid: null,
    title: null,
  });
  const setClick = (id, vid, title) => {
    setClicked({
      id: id,
      vid: vid,
      title: title,
    });
  };
  const getSearches = async (item) => {
    const records = await pb.collection("streams").getFullList(200, {
      filter: `title ~ "${item}"`,
    });
    setSearch(records);
  };
  return (
    <>
      <searchContext.Provider
        value={{ search, getSearches, clicked, setClick }}
      >
        {props.children}
      </searchContext.Provider>
    </>
  );
}
