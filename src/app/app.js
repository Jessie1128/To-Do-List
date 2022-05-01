import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import "./App.css";
import HomePage from "./page/homePage/homePage"; 
import ListPage from './page/listPage/listPage';
// import './page/homePage/homePage.css'
// import './page/base.css'
// import './page/listPage/addForm/addForm.css'
// import './page/listPage/list/list.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </div>
    
  );
}

export default App