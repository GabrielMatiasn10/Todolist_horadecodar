import  Header  from './components/Header';
import  Footer  from './components/Footer';
import React from 'react';

import './App.css';
import  styles  from './components/App.module.css';

function App() {
  return (
   <div>
    <Header />
    <main className={styles.main}>
    <h1>conteudo</h1>
    </main>
    <Footer />

   </div>
   
  );
}

export default App;
