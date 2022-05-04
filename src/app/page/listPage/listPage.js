import * as React from "react";
import { useState , useEffect } from 'react'
import { v4 } from 'uuid'
import AddForm from './addForm/addForm'
import '../base.css'
import './list/list.css'
import '../homePage/homePage.css' //for back to home page botton 
import { Routes, Route, Link } from "react-router-dom";
import {db} from "../../connection"
import { collection , getDocs , doc, setDoc , serverTimestamp , query, orderBy } from "firebase/firestore";

const ListPage = () => {

    async function insert_data_to_firebase(info,id) {
    try {
        await setDoc(doc(db, "test", id),{
            data: info,
            id: id,
            timestamp: serverTimestamp()
        });
        console.log("新增成功");
        return "ok";
    } catch (error) {
        console.error(`資料沒有新增成功:${error}`);
        return `failed:${error}`;
        }
    }
      
    async function get_data_from_firebase () {
        let res = query(collection(db, "test"), orderBy("timestamp"));
        let snapshot = await getDocs(res);
        snapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            console.log("我要的資料",doc.data());
            let info=doc.data()
            setData(function(pre){
                return [...pre,{
                                "id":info.id,
                                "info":info.data
                                }]
            })
        })
    }

    useEffect(()=>{
        get_data_from_firebase();
    },[])

    // ==========================================================================================

    const [ info , setInfo ] = useState("")
    function changeInfo (message) {
        setInfo(message.target.value);
    }

    const [ data , setData ] = useState([])
    async function addInfo () {
        let id=v4();
        let res= await insert_data_to_firebase(info,id);
        console.log(res);
        if (res == "ok"){
            setData(function(pre){
                return [...pre,{
                                "id":id,
                                info
                                }]
                // let n=pre.push({data})
                // console.log(n)
                // return n
            })
        }else{
            alert("資料沒有新增");
        }
    }

    return (
    <div>
        <div className="input">
            <input value={info} onChange={changeInfo} className="input-input" placeholder="輸入一些文字吧" type="text"></input>
            <button onClick={addInfo} className="input-button">新增</button>
        </div>
        <hr className="hr"/>
        <AddForm data={data} deleteData={setData} />
        <nav className="to_next_page"> 
            <Link to="/" className="button">返回首頁</Link>
        </nav>
    </div>)

}

export default ListPage