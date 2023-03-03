import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import searchContext from "../Global/Search/SearchContext";
import SearchContacts from "./SearchContacts";

export default function Navbar() {
  const context = useContext(searchContext);
  const { search, getSearches, setClick, clicked } = context;
  const [item, setItem] = useState("");
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getSearches(item);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            onClick={() => {
              setClick(null);
            }}
            to="/"
          >
            Videos
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <div className="">
                  <Link
                    className="text-decoration-none text-light"
                    to="/addvid"
                  >
                    Add Video
                  </Link>
                </div>
              </li>

              {clicked && (
                <div className="text-light mx-2">
                  <li>{clicked.title}</li>
                </div>
              )}
            </ul>

            <form
              className="d-flex dropdown"
              onSubmit={handleSubmit}
              role="search"
              style={{ width: "50%" }}
            >
              <input
                className="form-control me-2"
                data-bs-auto-close="false"
                type="search"
                placeholder="Tap to open or close search results"
                aria-label="Search"
                value={item}
                data-bs-toggle="dropdown"
                onChange={handleChange}
                aria-required
              />
              <div>
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </div>

              {
                <ul
                  className="dropdown-menu"
                  style={{ height: "400%", overflowY: "scroll" }}
                >
                  {search && search.length == 0 && (
                    <div className="container">
                      {" "}
                      <li>No results found</li>{" "}
                    </div>
                  )}
                  {search ? (
                    search.map((ele, i) => {
                      return (
                        <SearchContacts key={ele.id} ele={ele} index={i} />
                      );
                    })
                  ) : (
                    <li>
                      <div className="container">Type to search</div>
                    </li>
                  )}
                </ul>
              }
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
