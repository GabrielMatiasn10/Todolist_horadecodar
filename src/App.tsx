import  Header  from './components/Header';
import  Footer  from './components/Footer';
import React from 'react';

import './App.css';
import  styles  from './App.module.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
   <div>
    <Header />
    <div>
      <main className={styles.main}>
        <h2>O Que voce vai fazer?</h2>
       <TaskForm btnText='Criar tesk'/>
       <div>
      <h2>Suas tarefa:</h2>
      <TaskList />
      </div>
      </main>
    </div>
  
    <Footer />
   </div>
  );
}

export default App;
