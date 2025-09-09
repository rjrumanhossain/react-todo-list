
import { useEffect, useState } from 'react';
import './Todo.css';
import { CiCircleCheck, CiTrash } from 'react-icons/ci';
export const Todo = () => {

    const [inputValue, setInputvalue] = useState("");

    const [task, setTask] = useState(JSON.parse(localStorage.getItem('task'))?? []);


    const [dateTime, setDateTime]  = useState("");

    const inputHandler = (value) => {
        setInputvalue(value);
    }

    const fromHandler = (event) => {
        event.preventDefault();
        if(!inputValue) return;

        if(task[name].includes(inputValue)) return;

        setTask((prev) =>{
            const final = {
                "name": inputValue,
                "status": false
            }
            const updated =  [...prev, final];

            localStorage.setItem('task', JSON.stringify(updated));
            return updated;
        });
        setInputvalue("");
    }

    useEffect(() => {
        const interval = setInterval(() => {
        const now = new Date();
        const formateDate = now.toLocaleDateString();
        const formateTime = now.toLocaleTimeString();
        setDateTime(`${formateDate} - ${formateTime}`);
        return () => clearInterval(interval);
    }, 1000);
    }, []);

    const checkInIteam = (id) => {

        let getData = JSON.parse(localStorage.getItem('task')) || [];

        if(!getData[id]) return ;

        getData[id].status = !getData[id].status;
        localStorage.setItem("task", JSON.stringify(getData));

        setTask(getData);

    }

    const deleteIteam = (id) => {
        setTask((prev) => {
            const updated = [...prev];
            updated.splice(id, 1);
            localStorage.setItem('task', JSON.stringify(updated));
            return updated;
        })
    }

   

    return <>
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className='date-time'>{dateTime} </h2>
            </header>
            <section className='form'>
                <form onSubmit={(event) => fromHandler(event)}>
                   <div>
                        <input type="text" onChange={ (event) => inputHandler(event.target.value)} name="todo-input" value={inputValue} autoComplete='off' />
                   </div>
                   <div>
                        <button type='submit' className="todo-btn">Add Task</button>
                   </div>
                </form>
            </section>
            <section className='myUnOrderList'>
                <ul>
                   {task.map((curTask, index) => {
                    return (
                        <li className='todo-item ' key={index}>
                            {curTask.name}
                            <button onClick={() => checkInIteam(index)} className={curTask.status == false ?"delete-btn":"check-btn" }><CiCircleCheck/></button>
                            <button onClick={() => deleteIteam(index)} className='delete-btn'><CiTrash/></button>
                        </li>
                    )
                   })}
                </ul>
            </section>
        </section>
    
    </>
}