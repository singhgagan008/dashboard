import React from "react";
import "../index.css";
import "./app.css";
import AppHeader from "../common/AppHeader";
import DataComponent from "../components/DataComponent";


const App = () => {
    return(
      <div>
        <AppHeader />
        <div className = 'last-updated' >
          Last updated: April 11, 2020, 21:21 GMT
        </div>
        <DataComponent />
      </div>
  );
}

export default App;

