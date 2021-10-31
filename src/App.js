import React, { useEffect, useState } from "react";
import "./App.css";
import Piano from "./Piano";
import Effect from "./Effects/Effect";

function App() {

  return (
    <>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/addons/p5.sound.min.js"></script>
    <div class="wrapper">
      <Effect id="effect"/> 
      <div className="app-container">
        <Piano id="piano"/>
      </div>
    </div>
    </>
  );
}

export default App;
