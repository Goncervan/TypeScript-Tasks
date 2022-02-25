import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";

interface Props {
    tasks: Task[];
    deleteTask: (id: number) => void;
}
export default function TaskList({ tasks, deleteTask }: Props) {
    return (
        <>
            {tasks.map((t) => (
                <div key={t.id} className="col-md-4 pb-2">
                    <TaskCard deleteTask={deleteTask} task={t} />
                </div>
            ))}
        </>
    )
}