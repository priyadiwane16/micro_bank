import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import AppName from "./component/AppName";
import AppSlogan from "./component/AppSlogan";
import ClockTime from "./component/ClockTime";

function App() {
  return (
    <center>
      <AppName></AppName>
      <AppSlogan></AppSlogan>
      <ClockTime></ClockTime>
    </center>
  );
}

export default App;
