import { useState } from "react"
import Sessao from "../../../../../helpers/sessao"
import Tabela from "../../../../../helpers/tabela"
import Modal from "../../Modal"
import Admin from "../../admin/Admin"

export default function Titulo({flores}){
    const [admin, setAdmin] = useState(false)

    function validar(){
        /** @type Membro[]*/
        const membro = Tabela.encontrarEmLocalStoragePor("id", Sessao.obter(), "membros")
        if(membro == null){
            return
        }
        else if (!membro[0].admin){
            return 
        }

        setAdmin(true)
    }

    return (
        <>
            <button className="btn btn-ghost text-xl"
                onClick={() => validar()}
            > 
                Floricultura <span className="text-primary">Avenida</span>
            </button>

            {admin && <Modal modalState={admin} setModal={setAdmin}><Admin flores={flores} /></Modal>}
        </>
    )
}
