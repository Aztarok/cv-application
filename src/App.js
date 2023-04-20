import { React, useState } from "react";
import { Header, Footer, Body } from "./components/exports";
import "./styles/App.css";
import "./styles/globals.css";

function App() {
  return (
    <div className="App text-white">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
