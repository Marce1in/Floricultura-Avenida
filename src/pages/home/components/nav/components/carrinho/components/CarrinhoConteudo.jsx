import Tabela from "../../../../../../../helpers/tabela";

/** @param {Object} props 
* @param {Flor[]} props.floresUsuario 
* @param {Tabela} props.flores*/
export default function CarrinhoConteudo({floresUsuario, flores}){
    /** @param {string} idFlor */
    function removerCarrinho(idFlor){
        flores.mudarPor("id", idFlor, {idReservado: ""})
        flores.enviarParaLocalStorage()
    }

    function calcularTotal(){
        return floresUsuario.reduce((total, flor) => flor.valor + total, 0)
    }

    const ListaCarrinho = floresUsuario.map(flor => 
        <li key={flor.id}>
            <button 
                onClick={() => removerCarrinho(flor.id)}
                className="mr-2 btn btn-sm btn-neutral btn-outline"
            > - </button>

            <span className="font-semibold">
                {flor.nome}
            </span> R$ {flor.valor.toLocaleString(undefined, {minimumFractionDigits: 2})}
        </li>
    )

    const Itens = () => {
        if(ListaCarrinho.length > 0){
            return (
                <div className="flex flex-col">
                    <ul className="flex gap-4 flex-col pb-5">
                        {ListaCarrinho}
                    </ul> 
                    <hr />
                    <span className="text-right font-extrabold">
                        Total: R$ {calcularTotal().toLocaleString(undefined, {minimumFractionDigits: 2})}
                    </span>
                </div>
            )
        }
        else {
            return <span className="font-extrabold">Carrinho vazio :(</span>
        }

    }

    return(
        <>
            <Itens />
        </>
    )
}
