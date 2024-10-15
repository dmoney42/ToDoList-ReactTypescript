import React from 'react';
import InputFeild from './components/InputFeild';
import './App.css';
import { useState } from 'react';
import { Todo } from './model';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();

      if(todo){
        setTodos([...todos,{ id:Date.now(),todo,isDone:false}])
        setTodo("");
      }
  };

  //console.log(todo);
  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      {todos.map((t)=>(
        <li>{t.todo}</li>
      ))}
     {/* <TodoList /> */}
    </div>
  );
}

export default App;
 