import toast from "react-hot-toast"
import Sessao from "../../../helpers/sessao"
import Tabela from "../../../helpers/tabela"

/** 
 * @param {Object} props 
 * @param {string} props.id
 * @param {string} props.nome 
 * @param {number} props.valor 
 * @param {string} props.imgUrl 
 * @param {Tabela} props.floresTabela
 */
export default function Produto({id, nome, valor, imgUrl, floresTabela}){

    function reservar(){
        floresTabela.mudarPor("id", id, {idReservado: Sessao.obter()})
        floresTabela.enviarParaLocalStorage()

        toast.success("Flor Reservada! Obrigado :)", {position: "bottom-right"})
    }

    
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl border-primary">
                <figure className="max-h-72">
                    <img className="min-w-full min-h-full"src={imgUrl} alt={nome} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{nome}</h2>
                    <p>
                        R$ {valor.toLocaleString(undefined, {minimumFractionDigits: 2})}
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => reservar()}>
                            Reservar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}
