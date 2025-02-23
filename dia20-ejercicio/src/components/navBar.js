import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <nav className="bg-gray-800 text-white p-4 shadow-md">
            <ul className="flex space-x-4">
                <li>
                    <button
                        onClick={() => navigate("/")}
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md transition-all duration-300"
                    >
                        Inicio
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => navigate("/new-task")}
                        className="px-4 py-2 bg-green-500 hover:bg-green-700 rounded-md transition-all duration-300"
                    >
                        Agregar Tarea
                    </button>
                </li>

            </ul>
        </nav>
    );
}
