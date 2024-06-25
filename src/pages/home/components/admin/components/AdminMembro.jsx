import Tabela from "../../../../../helpers/tabela"

/** 
 * @param {Object} props
 * @param {Membro} props.membro
 * @param {Tabela} props.membros
 */
export default function AdminMembro({membro, membros}){
    function deletarMembro(){
        membros.deletarPor("id", membro.id)
        membros.enviarParaLocalStorage()
    }
    function tornarAdmin(){
        membros.mudarPor("id", membro.id, {admin: true})
        membros.enviarParaLocalStorage()
    }

    return(
        <>
            <tr>
                <th>
                    <label>
                        <button 
                            className="btn btn-sm btn- btn-outline btn-neutral"
                            onClick={() => deletarMembro()}
                        >Deletar</button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div>
                            <div className="font-bold">{membro.nome}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span className="text-xs text-center">{membro.id}</span>
                    <br />
                </td>
                <td className="font-medium">{membro.senha}</td>
                <th>
                    {!membro.admin ? 
                        <button 
                            className="btn btn-sm btn-error btn-"
                            onClick={() => tornarAdmin()}
                        >
                            Tornar admin
                        </button> :
                        <span>Sim</span>
                    }
                </th>
            </tr>
        </>
    )
}
