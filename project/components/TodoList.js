import React from "react";

function TodoList({todos,toogleComplete,removeTodo}) {
    return(
<ul>
    {todos.map(todo =>(
     <Todo
        key={todo.id} 
        todo={todo}
        toogleComplete={toogleComplete}
      />   
    ))}
    </ul>
    );
}

export default TodoList;