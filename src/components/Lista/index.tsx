import React from "react";
import './style.scss'

function Lista() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
    {
    tarefa: "Python",
    tempo: "01:20:00",
    }
  ];

  return (
    <aside>
      <ul className="listaTarefas">
        {tarefas.map(({tarefa, tempo},index) => (
          <li className="item" key={index}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
