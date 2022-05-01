import * as React from "react";

const List = ({ note, id, deleteDatt }) => {
    function remove () {
        deleteDatt(function(prev){
            console.log(prev);
            // return ["c8 c8 c8 "]
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