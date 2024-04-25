import React from 'react'

import  styles  from './TaskForm.module.css';

interface Props {
    btnText: string
    }
    

const TaskForm = ({ btnText }: { btnText: string }) => {
    return (
     <form className={styles.form}>
        <div className={styles.input_container}>
                <label htmlFor="title">Titulo</label>
                <input type="text" id="title" name="title" placeholder='titulo da tarefa'/>
        </div>
        <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade</label>
                <input id="difficulty" name="difficulty" placeholder='Dificuldade'></input>
     </div>
     <input type="submit" value={btnText}/>
     </form>
    )
}

export default TaskForm