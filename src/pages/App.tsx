import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'
import Cronometro from '../components/Cronometro';


function App() {
  const [tarefas, setTarefas] = useState([]);
  return (
    <div className={style.AppStyle}>
      <h1>Hello world</h1>
      <Formulario setTarefas={setTarefas} tarefas={tarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
