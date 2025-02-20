import { useRef } from 'react';
import { useTask } from '../components/context';


export default function NewTask() {
    const { taskList, addTask } = useTask();


    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    function sendNewTask() {
        let newTaskBody =
        {
            "id": taskList[taskList.length - 1].id + 1,
            "title": `Tarea ${taskList[taskList.length - 1].id + 1}`,
            "description": `Descripcion de la tarea ${taskList[taskList.length - 1].id + 1}`,
            "completed": false
        }
        addTask(newTaskBody);
    }

    return (
        <div>
            <input ref={titleRef} placeholder='Escribe titulo...' style={{ color: 'black' }} />
            <input ref={descriptionRef} placeholder='Escribe descripcion...' style={{ color: 'black' }} />
            <button onClick={() => sendNewTask()} >Agregar Tarea</button>
        </div>
    );
}
