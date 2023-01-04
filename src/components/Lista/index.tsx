import "./style.scss";
import Item from "./item";

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
    },
  ];

  return (
    <aside>
      <ul className="listaTarefas">
        {tarefas.map(({ tarefa, tempo }, index) => (
          <Item tarefa={tarefa} tempo={tempo} key={index} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
