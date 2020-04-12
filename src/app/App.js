import React from "react";
import "../index.css";
import "./app.css";
import AppHeader from "../common/AppHeader";
import DataComponent from "../components/DataComponent";


const App = () => {
    return(
      <div>
        <AppHeader />
        <DataComponent />
      </div>
  );
}

export default App;

