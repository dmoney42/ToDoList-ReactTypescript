import React from 'react'
import { Todo } from '../model';
import "./styles.css";
import SingleTodo from './SingleTodo';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos }:Props) => {
  return (
    <div className="todos">
        {todos.map(todo =>(
            //<li>{todo.todo}</li>
            <SingleTodo />
        ))}

    </div>
  )
}

export default TodoList