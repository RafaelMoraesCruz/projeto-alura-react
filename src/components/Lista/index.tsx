import "./style.scss";
import Item from "./item";

function Lista({tarefas}: any) {
  return (
    <aside>
      <ul className="listaTarefas">
        <h2
        >
          Estudos do dia
        </h2>
        {tarefas.map(({ tarefa, tempo } : any, index: any) => (
          <Item tarefa={tarefa} tempo={tempo} key={index} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
