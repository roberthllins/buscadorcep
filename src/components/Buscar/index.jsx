import { FiSearch } from "react-icons/fi"

import api from "../../services/api"

import "./styles.css"

function Buscar({input, setInput, setDados}){

    async function mostrarValor(){
        // alert(`Valor do input: ${input}`);

        if(input === ''){
            alert("Digite um CEP!")
            return
        }
        try{
            const response = await api.get(`${input}/json/`)
            // console.log(response.data)
            setDados(response.data)
            setInput('')

        } catch{
            alert("Erro!")
            setInput('')
        }

    }

    return (
        
        <div className="inputContainer">
            <input 
                type="text" 
                placeholder="Digite seu CEP..." 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
            />

            <button className="buttonSearch" onClick={mostrarValor}><FiSearch size={25} color="#fff"/></button>
        </div>
        
    )
}

export default Buscar