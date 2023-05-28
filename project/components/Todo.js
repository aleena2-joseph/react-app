import React from "react";

function Todo({todo}) {
function handleCheckboxClick(){
toogleComplete(todo.id);
}
function handleCheckboxClick(){
    removeTodo(todo.id);
}

 return(
    <div style={{display:"flex"}}>
    <><input type="checkbox" onClick={handleCheckboxClick} />
    <li
    style={{
        color:"white",
        textDecoration: todo.completed ? "Line-through" : null
    }}
    >
        {todo.task}</li>
    <button onClick={handleRemoveClick}>X</button></>
    </div> 
 );
}

export default Todo;