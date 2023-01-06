import "./style.scss";
import Item from "./item";
import { useState } from "react";

function Lista() {
  const [tarefas, setTarefas] = useState([
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
    },
  ]);

  return (
    <aside>
      <ul className="listaTarefas">
        <h2
          onClick={() => setTarefas([
            ...tarefas,
            { tarefa: "Pandas", tempo: "01:00:00" },
          ])}
        >
          Estudos do dia
        </h2>
        {tarefas.map(({ tarefa, tempo }, index) => (
          <Item tarefa={tarefa} tempo={tempo} key={index} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
