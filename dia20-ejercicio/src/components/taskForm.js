import { useRef } from "react";
import { useTask } from "../components/context";

export default function NewTask() {
    const { taskList, addTask } = useTask();

    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    function sendNewTask() {
        let newTaskBody = {
            id: taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 1,
            title: titleRef.current.value || `Tarea ${taskList.length + 1}`,
            description: descriptionRef.current.value || `Descripción de la tarea ${taskList.length + 1}`,
            completed: false,
        };
        addTask(newTaskBody);
        titleRef.current.value = "";
        descriptionRef.current.value = "";
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Agregar Nueva Tarea</h2>

                <input
                    ref={titleRef}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-black"
                    placeholder="Escribe el título..."
                />

                <textarea
                    ref={descriptionRef}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 resize-none text-black"
                    placeholder="Escribe la descripción..."
                />

                <button
                    onClick={sendNewTask}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                    Agregar Tarea
                </button>
            </div>
        </div>
    );
}
