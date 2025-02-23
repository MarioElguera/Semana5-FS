import { useParams, useNavigate } from 'react-router-dom';
import { useTask } from '../components/context';

export default function DetalleTask() {
    const { taskList } = useTask();
    const { id } = useParams();
    const navigate = useNavigate();
    const task = taskList.find((task) => task.id === parseInt(id));

    if (!task) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
                <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-700 text-center">
                        Tarea no encontrada
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center">
                    Detalle de la Tarea
                </h1>

                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Título:</h2>
                    <p className="text-gray-700">{task.title}</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Descripción:</h2>
                    <p className="text-gray-700">{task.description}</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Estado:</h2>
                    <p className={`text-gray-700 ${task.completed ? 'text-green-600' : 'text-red-600'}`}>
                        {task.completed ? 'Completada' : 'Pendiente'}
                    </p>
                </div>

                <div className="flex justify-center space-x-4">
                    <button
                        onClick={() => navigate('/')} // Usamos navigate en lugar de history.goBack()
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                    >
                        Volver
                    </button>
                </div>
            </div>
        </div>
    );
}
