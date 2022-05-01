import { useState } from 'react'
import { v4 } from 'uuid'
import AddForm from './addForm/addForm'
import '../base.css'
import './list/list.css'
import '../homePage/homePage.css' //for back to home page botton 
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

const ListPage = () => {
    const [ info , setInfo ] = useState("")
    function changeInfo (v) {
        setInfo(v.target.value);
    }

    const [ data , setData ] = useState([])
    function addInfo () {
        setData(function(pre){
            console.log("preprepre",pre)
            console.log("setData",setData)
            return [...pre,{
                            id:v4(),
                            info
                            }]
            // let n=pre.push({data})
            // console.log(n)
            // return n
        })
    }

    return <div>
            <div className="input">
            <input value={info} onChange={changeInfo} className="input-input" placeholder="輸入一些文字吧" type="text"></input>
            <button onClick={addInfo} className="input-button">新增</button>
        </div>
        <hr className="hr"/>
        <AddForm data={data} deleteData={setData}/>
        <nav className="to_next_page"> 
            <Link to="/" className="button">返回首頁</Link>
        </nav>
    </div>
}

export default ListPage