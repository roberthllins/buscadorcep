import "./styles.css"

function Resultado({dados}){
    return (
        
        <>
            {Object.keys(dados).length > 0 && (
                <main className="main">
                    <h2>CEP: {dados.cep}</h2>
                    <span>Rua: {dados.logradouro}</span>
                    <span>Complemento: {dados.complemento}</span>
                    <span>{dados.localidade}</span>
                    <span>{dados.uf}</span>
                </main> 
            )}
        </>
        
    )
}

export default Resultado