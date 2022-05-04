import * as React from "react";
import './addForm.css'
import List from '../list/list'

const AddForm = ( { data , deleteData }) => {
    console.log("deleteData",deleteData);
    console.log("我要看這邊",data)
    return (
        <div className="add_form">
            {
                data.map((elem)=>{
                    console.log("我看看會不會跑")
                    return <List 
                            id={elem.id} 
                            key={elem.id}
                            note={elem.info} 
                            deleteDate={deleteData}
                        />
                })
            }
        </div>
    )
}

export default AddForm