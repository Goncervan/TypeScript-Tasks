import { ChangeEvent, FormEvent, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Task } from '../interfaces/Task';

type inputAndTextArea = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
    addNewTask: (task: Task) => void;
}

export default function TaskForm({ addNewTask }: Props) {

    const [task, setTask] = useState({
        title: '',
        description: ''
    });

    const handleInputChange = ({
        target: { name, value }
    }: inputAndTextArea) => {
        setTask({ ...task, [name]: value })
    }

    const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addNewTask(task);
        setTask({
            title: '',
            description: ''
        })
    }


    return (
        <div className="card card-body bg-secondary text-dark">
            <h1>Agregar Tarea</h1>
            <form onSubmit={(e) => handleNewTask(e)}>
                <input
                    name="title"
                    type="text"
                    placeholder="Escribe un titulo"
                    className="form-control mb-3 rounded-0 shadow-none border-0"
                    onChange={(e) => handleInputChange(e)}
                    value={task.title}
                />
                <textarea
                    name="description"
                    rows={2}
                    placeholder="Descripción"
                    className="form-control mb-3 shadow-none rounded-0 resize-none"
                    onChange={(e) => handleInputChange(e)}
                    value={task.description}
                />
                <button className="btn btn-primary">
                    Guardar
                    <AiOutlinePlus />
                </button>
            </form>
        </div>
    )
}