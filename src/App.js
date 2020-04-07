import React, { useEffect } from 'react';
import Button from "./Components/Buttons/Button.js";
import SitesContainer from "./Sites/SitesContainer.js";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from 'Components/ScrollToTop.js';

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <SitesContainer />
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
