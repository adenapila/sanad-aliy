import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import IjazahList from "./components/IjazahList";

class App extends Component {
  render() {
    return (
    <main>
      <Navbar />
      <IjazahList />
    </main>
    );
  }
}

export default App;
