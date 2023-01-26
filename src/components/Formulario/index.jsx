import React from "react";
import Botao from "../Botao";
import "./style.scss";

function Formulario({setTarefas, tarefas}) {
  const [state, setState] = React.useState({
    tarefa: '',
    tempo: '00:00'
  })


  function adicionarTarefa(evento){
    setTarefas([...tarefas, {tarefa: state.tarefa, tempo: state.tempo}])
    setState({
      tarefa: '',
      tempo: '00:00'
    })
    evento.preventDefault()
  }

  return (
    <form className="novaTarefa" onSubmit={adicionarTarefa}>
      <div className="inputContainer">
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={state.tarefa}
          onChange={evento => setState({...state, tarefa: evento.target.value})}
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={state.tempo}
          onChange={evento => setState({...state, tempo: evento.target.value})}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type='submit' texto='Adicionar'></Botao>
    </form>
  );
}

export default Formulario;
