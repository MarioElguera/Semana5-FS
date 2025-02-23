import { createContext, useContext, useState, useEffect } from 'react';
const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const loadTasksFromStorage = () => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [
            { id: 1, title: "Tarea 1", description: "Descripción de la Tarea 1", completed: false },
            { id: 2, title: "Tarea 2", description: "Descripción de la Tarea 2", completed: false },
            { id: 3, title: "Tarea 3", description: "Descripción de la Tarea 3", completed: false },
        ];
    };

    const [taskList, setTaskList] = useState(loadTasksFromStorage);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskList));
    }, [taskList]);

    function addTask(task) {
        setTaskList((prevTasks) => [...prevTasks, task]);
    }

    function deleteTask(idTask) {
        setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== idTask));
    }

    function completedTask(idTask) {
        setTaskList((prevTasks) =>
            prevTasks.map((task) =>
                task.id === idTask ? { ...task, completed: !task.completed } : task
            )
        );
    }

    return (
        <TaskContext.Provider value={{ taskList, addTask, deleteTask, completedTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTask = () => {
    return useContext(TaskContext);
};