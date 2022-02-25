import { title } from 'process';
import { useState } from 'react'
import './App.css';
import TaskList from './components/TaksList';
import TaskForm from './components/TaskForm';
import { Task } from './interfaces/Task';

interface Props {
  title?: string
}



export function App({ title }: Props): JSX.Element {

  const [tasks, setTasks] = useState<Task[]>([]);

  const getTimeStamp = (): number => new Date().getTime();

  const addNewTask = (task: Task) => setTasks([
    ...tasks,
    { ...task, id: getTimeStamp(), completed: false }
  ]);

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <div className='bg-dark' style={{ height: '100vh' }}>
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container'>
          <div className='title'>
            {title && <h1>{title}</h1>}
          </div>
        </div>
      </nav>
      <main className='container p-4'>
        <div className="row">
          <div className="col-md-4">
            <TaskForm addNewTask={addNewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

