import Header from './components/Header';
import Footer from './components/Footer';
import styles from './App.module.css';
import TaskList from './components/TaskList';
import { ITask } from './interfaces/Task';
import { useState } from 'react';
import { TaskForm } from './components/TaskForm';


function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
   <><div>
      <Header />
      <div>
        <main className={styles.main}>
          <h2>O Que voce vai fazer?</h2>
          <TaskForm
            btnText='Adicionar Tarefa'
            TaskList={taskList}
            setTaskList={setTaskList} />
          <div>
            <h2>Suas tarefa:</h2>
            <TaskList  TaskList={taskList}
             />
          </div>
        </main>
      </div>
    </div>
    <Footer />
    </>

  );
}

export default App;
