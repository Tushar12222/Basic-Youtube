import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Search from "./Global/Search/Search";
import Streams from "./Global/Streams/streams/Streams";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fullscreen from "./Components/Fullscreen";
import Addvid from "./Components/Addvid";

function App() {
  return (
    <>
    <Router>
      <Search>
        <Streams>
          <Navbar />
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/fullscreen" element={<Fullscreen/>}/>
          <Route exact path="/addvid" element={<Addvid/>}/>
          </Routes>
        </Streams>
        
      </Search>
      </Router>
    </>
  );
}

export default App;
