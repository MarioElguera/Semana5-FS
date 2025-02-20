// import { useNavigate } from 'react-router-dom';
import { useTask } from '../components/context';
import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from "react-icons/im";

export default function News() {
    const [taskListHome, setTaskListHome] = useState([]);
    const { taskList, deleteTask, completedTask } = useTask();

    useEffect(() => {
        setTaskListHome(taskList);
        console.log("useEffect taskList");
    }, [taskList]);

    const handleDelete = (id) => {
        deleteTask(id);
        setTaskListHome((prevList) => prevList.filter(task => task.id !== id));
    };

    return (
        <div>
            <h1>Tareas</h1>
            <ul>
                {taskListHome.map((task) => (
                    <li key={task.id}>
                        <button onClick={() => navigate(`/task/${task.id}`)}>
                            {task.title}
                        </button>
                        <a>{task.completed ? <FaCheck /> : <ImCross />}</a>
                        <button onClick={() => handleDelete(task.id)} >Eliminar Tarea</button>
                        <button onClick={() => completedTask(task.id)} >Completar</button>
                        <hr></hr>
                    </li>

                ))}
            </ul>
        </div>
    );
}
