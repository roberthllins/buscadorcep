import Buscar from "../../components/Buscar"
import Resultado from "../../components/Resultado"

import "./styles.css"

import { useState } from "react"

function Home(){

    const [input, setInput] = useState('')

    const [dados, setDados] = useState({})

    return (
        <div className="container">
            <h1 className="title">Buscador de CEP</h1>
            <Buscar input={input} setInput={setInput} setDados={setDados}/>
            <Resultado dados={dados}/>
        </div>
    )
}

export default Home