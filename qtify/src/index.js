import React from "react";
import ReactDOM from "react-dom"
import App from "./App";
import HomePage from "./component/Pages/HomePage";
import AlbumPage from "./component/Pages/AlbumPage";
// router import
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // switch is old version routes is updated version
    <React.StrictMode>
      <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/album/albumId" element={<AlbumPage/>} />
      </Routes>
      </Router>
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
