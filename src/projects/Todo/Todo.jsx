
import { useState } from 'react';
import './Todo.css';
import { CiCircleCheck, CiTrash } from 'react-icons/ci';
export const Todo = () => {

    const [inputValue, setInputvalue] = useState("");
    const [task, setTask] = useState([]);

    const inputHandler = (value) => {
        setInputvalue(value);
    }

    const fromHandler = (event) => {
        event.preventDefault();

        if(!inputValue) return;
        if(task.includes(inputValue)) return;
        setTask((prev) => [...prev, inputValue])
        setInputvalue("");
    }



    return <>
        <section className="todo-container">
            <header>
                <h1>Tod List</h1>
            </header>
            <section className='form'>
                <form onSubmit={(event) => fromHandler(event)}>
                   <div>
                        <input type="text" onChange={ (event) => inputHandler(event.target.value)} name="todo-input" value={inputValue} autoComplete='off' />
                   </div>
                   <div>
                        <button type='submit' className='todo-btn'>Add Task</button>
                   </div>
                </form>
            </section>
            <section className='myUnOrderList'>
                <ul>
                   {task.map((curTask, index) => {
                    return (
                        <li className='todo-item ' key={index}>
                            {curTask}
                            <button className='delete-btn'><CiCircleCheck/></button>
                            <button className='delete-btn'><CiTrash/></button>
                        
                        </li>
                    )
                   })}
                </ul>
            </section>
        </section>
    
    </>
}