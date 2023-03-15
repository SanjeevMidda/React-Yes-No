import React from "react";
import Color from "./component/Color";
import "./styles.css";

function App() {

  let result = false;
  

  return (
    <div>
      <h1>Hello</h1>
      <Color outcome = {result}/>
    </div>
  );
}

export default App;
