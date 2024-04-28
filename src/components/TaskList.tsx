import React from 'react';
import { ITask } from '../interfaces/Task';
import styles from './TaskList.module.css';

type Props = {
  TaskList: ITask[];
};

const TaskList = ({ TaskList }: Props) => {
  return (
    <>
      {TaskList.length > 0 ? (
        <>
          {TaskList.map(task => (
            <div key={task.id} className={styles.task}>
              <div className={styles.details}>
                <h4> {task.title}</h4>
               <p> Dificudade{task.dificulty}</p>
              </div>
              <div className={styles.actions}>
                <i className='bi bi-pencil'></i>
                <i className='bi bi-trash'></i>
              </div>
            </div>
          ))}
          <p>tem tarefas cadastradas</p>
        </>
      ) : (
        <p>não tem tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;
