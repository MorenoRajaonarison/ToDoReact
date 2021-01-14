import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ tasks,match,onToggleCompleted }) => {
    let filtertask
    switch (match.params.filter) {
        case 'completed':
            filtertask = tasks.filter(task => task.completed)
            break;
    
        default:
            filtertask = tasks
    }
    if (filtertask.length === 0) {
        return (
            <>
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    <li className="list-group-item">Aucune tache a affiché</li>
                </ul>
            </>
        )
    } else {
        return (
            <>
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    {
                        filtertask.map(task => <ToDo task={task} key={task.id} onToggleCompleted={onToggleCompleted}/>)
                    }
                </ul>
            </>
        )
    }    
}

export default ToDoList