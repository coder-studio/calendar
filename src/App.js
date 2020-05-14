//Libraries
import React from "react";

//Components
import CalendarTask from "./components/calendarTask/calendarTask.component";
import CalendarDay from "./components/calendarDay/calendarDay.component";

//Styles
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <br></br>
      <CalendarDay />
    </div>
  );
}

export default App;
