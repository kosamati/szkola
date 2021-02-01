import React from 'react';
import './App.css';
import SideBar from './SideBar';
import Topbar from './topbar';


function App() {
  return (
    <div className="App">
      <SideBar pageWrapID={"page-wrap"} outerContainerID={"App"}/>
      <Topbar />
    </div>
  );
}

export default App;
