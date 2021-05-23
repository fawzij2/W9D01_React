import React from "react";

const List = (props)=>{
    console.log(props);
    const {todoList} = props;
    return( 
        <>
        <div className = "todoList">
            <ul>
                {todoList.map((elem,i) => {
                    return <li key= {i} order = {i}></li>
                })}
            </ul>
        </div>
        </>
    )
};

export default List;