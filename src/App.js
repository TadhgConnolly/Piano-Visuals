import React, { useEffect, useState } from "react";
import "./App.css";
import Piano from "./Piano";
import Effect from "./Effects/Effect";

function App() {

  return (
    <>
    <Effect />
    {/* <div className="app-container"> */}
      <Piano />
    {/* </div> */}
    </>
  );
}

export default App;
