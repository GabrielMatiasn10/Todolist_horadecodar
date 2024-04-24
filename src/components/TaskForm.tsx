import React from 'react'

interface Props {
    btnText: string
    }
    

const TaskForm = (props: Props) => {
  return (
   <form>
    <div>
        <label htmlFor="title">Titulo</label>
        <input type="text" id="title" name="title" placeholder='titulo da tarefa'/>
    </div>
    <div>
        <label htmlFor="difficulty">Dificuldade</label>
        <input id="difficulty" name="difficulty" placeholder='Dificuldade'></input>
   </div>
   <input type="submit" value={btnText} />
   </form>
  )
}

export default TaskForm