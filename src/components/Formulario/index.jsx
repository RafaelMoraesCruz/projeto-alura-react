import React, { useRef } from "react";
import Botao from "../Botao";

function Formulario() {
    const listaTarefas = []
    const tarefa = useRef(null)
    const tempo = useRef(null)

    function handleButtonClick(){
        var tarefaCar = []
        tarefa.current.focus()
        tempo.current.focus()
        tarefaCar.push(tarefa)
        tarefaCar.push(tempo)
        listaTarefas.push(tarefaCar)
        console.log(listaTarefas)
    }

  return (
    <form>
      <div>
        <label htmlFor="tarefa">
            Adicione um novo estudo
        </label>
        <input ref={tarefa} type="text" name='tarefa' id='tarefa' placeholder="O que você quer estudar" required/>
      </div>
      <div>
        <label htmlFor="tempo">
            Tempo
        </label>
        <input ref={tempo} type='time' step='1' name='tempo' id='tempo' min='00:00:00' max='01:30:00' required/>
      </div>
      <Botao onClick={handleButtonClick}></Botao>
    </form>
  );
}

export default Formulario
