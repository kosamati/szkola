import React from 'react';
import './App.css';
import SideBar from './SideBar';

function Home() {
    return (
      <div className="App">
        <SideBar pageWrapID={"page-wrap"} outerContainerID={"Home"}/>
      </div>
    );
  }
  const rootElement = document.getElementById("root");
  export default Home;