import Tabela from "../../../../../helpers/tabela"

/** 
 * @param {Object} props
 * @param {Flor} props.flor 
 * @param {Tabela} props.flores
 */
export default function AdminProduto({flor, flores}){
    function removerReserva(){
        flores.mudarPor("id", flor.id, {idReservado: ""})
        flores.enviarParaLocalStorage()
    }
    function deletarFlor(){
        flores.deletarPor("id", flor.id)
        flores.enviarParaLocalStorage()
    }

    return(
        <>
            <tr>
                <th>
                    <label>
                        <button 
                            className="btn btn-sm btn- btn-outline btn-neutral"
                            onClick={() => deletarFlor()}
                        >Deletar</button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src={flor.florImg}
                                    alt={flor.nome} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{flor.nome}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span className="text-xs">{flor.id}</span>
                    <br />
                </td>
                <td className="font-medium">{flor.valor}</td>
                <th>
                    {flor.idReservado ? 
                        <button 
                            className="btn btn-sm btn-error btn-"
                            onClick={() => removerReserva()}
                        >
                            Desfazer Reserva
                        </button> : <span>
                            Não
                        </span>
                    }
                </th>
            </tr>
        </>
    )
}
