import { createContext, useContext, useState } from 'react';

// ---------------------------------------------------------------------------------------
const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const taskList = [
        { id: 1, title: "Tarea 1", description: "Descripción de la Tarea 1", completed: false },
        { id: 2, title: "Tarea 2", description: "Descripción de la Tarea 2", completed: false },
        { id: 3, title: "Tarea 3", description: "Descripción de la Tarea 3", completed: false },
    ];

    function addTask(task) {
        taskList.push(task);
    }

    function deleteTask(idTask) {
        const taskToDelete = taskList.findIndex(x => x.id === idTask);

        if (taskToDelete !== -1) {
            taskList.splice(taskToDelete, 1);
        } else {
            console.log('Tarea no encontrada');
        }
    }


    function completedTask(idTask) {
        const task = taskList.findIndex(x => x.id === idTask);
        task.completed = true;
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