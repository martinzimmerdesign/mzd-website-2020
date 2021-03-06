import React, { useEffect } from 'react';
import Button from "./Components/Buttons/Button.js";
import SitesContainer from "./Sites/SitesContainer.js";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {

  return (
    <div>

      <div className="App">
          <BrowserRouter>
            <SitesContainer />
          </BrowserRouter>
        </div>

    </div>
  );
}
export default App;
