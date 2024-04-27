import React, {ChangeEvent, FormEvent, useEffect} from 'react'

import  styles  from './TaskForm.module.css';
import {ITask} from '../interfaces/Task';
import { useState } from 'react';
import TaskList from './TaskList';

interface Props {
    btnText: string
    TaskList: ITask[]
    setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>
    }
    

    export const TaskForm = ({ btnText, TaskList, setTaskList }: Props) => {
        const [id, setId] = useState<number>(0);
        const [title, setTitle] = useState<string>('');
        const [difficulty, setDifficulty] = useState<number>(0);
    
        const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
    
            const id = Math.floor(Math.random() * 1000);
    
            const newTask: ITask = {
                id: id,
                title: title,
                dificulty: difficulty,
            };

            setTaskList([...TaskList, newTask]);
    
            setTaskList([...TaskList, newTask]);
            setTitle('');
            setDifficulty(0);
        };
    
        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            if (name === 'title') {
                setTitle(value);
            } else {
                setDifficulty(Number(value));
            }
        };
    
        return (
            <form onSubmit={addTaskHandler} className={styles.form}>
                <div className={styles.input_container}>
                    <label htmlFor="title">Titulo</label>
                    <input type="text" id="title" name="title" placeholder="titulo da tarefa" onChange={handleChange} />
                </div>
                <div className={styles.input_container}>
                    <label htmlFor="difficulty">Dificuldade</label>
                    <input id="difficulty" name="difficulty" placeholder="Dificuldade" onChange={handleChange} />
                </div>
                <input type="submit" value={btnText} />
            </form>
        );
    };