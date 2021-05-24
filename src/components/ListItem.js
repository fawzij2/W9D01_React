import React from "react";

const ListItem = (prop)=>{
    const {todoList}= prop;
    return (
        <>
        <div>
            <ol>
                {todoList.map((elem,i)=>{
                    return <li key={i} order={i}>{elem}</li>
                })}
            </ol>
        </div>
        </>
    )
}


export default ListItem;
