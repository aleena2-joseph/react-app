import React,{useEffect,useState}from"react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY="react-todo-List-todos";
function App() {
    const[todos,setTodos]=usestate([]);


   useEffect(()=> {
const storageTodos =JSON.parse (localStorage.getItem(LOCAL_STORAGE_KEY));
if(storageTodos){
    setTodos(storageTodos);
}
   },[])
   
    useEffect(()=>{
localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
    },[todos]);
    function addTodo(todo){
        setTodos([todo,...todos]);
    }
    function tooglecomplete(id){
 setTodos(
   todos.map(todo =>{
     if(todo.id == id){
      return{
        ...todo,
        completed: !todo.completed
      };
     }
      return todo;
   })
 );
    }

function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id));
}

return (
   <div class name="App">
    <header classname="App-header">
        <p>React Todo</p>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos}
         tooglecomplete={tooglecomplete} 
        removeTodo={removeTodo}
        />
    </header>
   </div> 
)
}
