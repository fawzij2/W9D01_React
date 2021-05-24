import React from "react";
    const {todoList}= prop;
const ListItem = (prop)=>{
    const handleClick = ()=>{
        return todoList.map((elem,i)=>{
            console.log(elem.id)
    }
    return (
        <>
        <div>
            <ol>
                {todoList.map((elem,i)=>{
                    return <li key={i} order={i} onClick={handleClick}>{elem}</li>
                })}
            </ol>
        </div>
        </>
    )
}


export default ListItem;
