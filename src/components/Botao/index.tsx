import React from "react";
import './style.scss'

function Botao({texto} : any){
    return(
        <button className="botao">{texto}</button>
    )
}

export default Botao