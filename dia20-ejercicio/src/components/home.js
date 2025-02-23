import { useTask } from "../components/context";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function News() {
    const { taskList, deleteTask, completedTask } = useTask();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center">
                    Lista de Tareas
                </h1>

                <ul className="space-y-4">
                    {taskList.map((task) => (
                        <li
                            key={task.id}
                            className="flex justify-between items-center p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50"
                        >
                            <div className="flex items-center space-x-3">
                                <span className={`text-lg font-semibold 
                                    ${task.completed
                                        ? "text-green-600 line-through"
                                        : "text-gray-700"}`} >
                                    {task.title}
                                </span>
                                {task.completed
                                    ? (<FaCheck className="text-green-600" />)
                                    : (<ImCross className="text-red-600" />)}
                            </div>

                            <div className="flex space-x-2">
                                <button onClick={() => deleteTask(task.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300"
                                >
                                    Eliminar
                                </button>
                                <button
                                    onClick={() => completedTask(task.id)}
                                    className={`px-3 py-1 rounded-lg font-semibold transition duration-300
                                        ${task.completed
                                            ? "bg-gray-400 text-white cursor-not-allowed"
                                            : "bg-blue-500 text-white hover:bg-blue-600"
                                        }`}
                                    disabled={task.completed}
                                >
                                    {task.completed
                                        ? "Completado"
                                        : "Completar"
                                    }
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
