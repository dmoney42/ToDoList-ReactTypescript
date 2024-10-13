import React from 'react'
import "./styles.css";


interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent)=> void;
}

/* todo and setTodo was passed in from App.tsx */
const InputFeild: React.FC<Props> = ({todo, setTodo, handleAdd} : Props) => {
  return (
    <form className="input">
        <input 
            type="input" 
            onSubmit={handleAdd}
            value={todo}
            onChange={
                (e)=> setTodo(e.target.value)
            }
            className="input__box" 
            placeholder='Enter a task' 
        />

        <button className="input__submit" type="submit">Go</button>
    </form>
  )
}

export default InputFeild