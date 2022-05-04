import * as React from "react";
import { db } from "../../../connection"
import { doc , deleteDoc } from "firebase/firestore";

const List = ({ note, id, deleteDate }) => {
    console.log(process.env)
    console.log(process.env.REACT_APP_apiKey)
    async function delete_data_from_firsbase () {
        try{
            await deleteDoc(doc(db, "test", id));
            console.log("刪除成功");
        }catch( error ){
            console.error(`error:${error}`);
        }
    }

    async function remove () {
        await delete_data_from_firsbase();
        deleteDate(function(prev){
            console.log(prev);
            return prev.filter((item)=>{ return item.id!==id})
        })
    }

    return (
    <div className="add_form">
        <div className="add_form_frame">
            <div className="add_form_block">{`${note}`}</div>
            <button onClick={remove} className="add_form_button">刪除</button>
        </div>
    </div>
    );
}

export default List