import React from "react";
import NewCom from "./Components/NewCom";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <NewCom />
      </div>
    );
  }
}

export default App;
