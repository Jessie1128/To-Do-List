import '../base.css'
import './homePage.css'
import * as React from "react";
// import { Routes, Route, Link } from "react-router-dom";

const HomePage = () => {
    function to_list_page () {
        window.location.href='/list';
    }
    return <div>
        <div className='header'>React 專案練習</div>
        <div className="contain">歡迎光臨我的首頁</div>
        <div className="to_next_page">
            <div className="button" onClick={to_list_page}>點此開始</div>
        </div>
        {/* <nav className="to_next_page"> 
            <Link to="/list" className="button">點此開始</Link>
        </nav> */}
    </div>
}

export default HomePage


