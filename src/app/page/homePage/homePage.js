import '../base.css'
import './homePage.css'
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

const HomePage = () => {
    return <div>
        <div className='header'>React 專案練習</div>
        <div className="contain">歡迎光臨我的首頁</div>
        <nav className="to_next_page"> 
            <Link to="/list" className="button">點此開始</Link>
        </nav>
    </div>
}

export default HomePage


