import { useState } from 'react'
import * as React from "react";
import './addForm.css'
import List from '../list/list'

const AddForm = ( {data , deleteData }) => {
    // const [add,setAdd] = useState('')
    console.log("deleteData",deleteData);
    return <div className="add_form">
        {
            data.map((elem)=>{
                // console.log("elem",elem);
                // const note=elem.info
                return <List 
                        id={elem.id} 
                        key={elem.id}
                        note={elem.info} 
                        deleteDatt={deleteData}
                       />
            })
        }
    </div>
}

export default AddForm