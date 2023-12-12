import "./App.css";

import { setAssetPath } from "@esri/calcite-components/dist/components";
import { Route, Routes } from "react-router-dom";
import PopoverPage from "./components/PopoverPage";
import Home from "./components/Home";

function App() {
  // CDN hosted assets
  setAssetPath("https://js.arcgis.com/calcite-components/2.0.0/assets");

  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route exact path="/popover" element={<PopoverPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
