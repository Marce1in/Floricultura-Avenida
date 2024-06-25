import { useState } from "react"
import Sessao from "../../../../../../helpers/sessao"
import Modal from "../../../Modal"
import CarrinhoIcone from "./components/CarrinhoIcone"
import CarrinhoDropdown from "./components/CarrinhoDropdown"
import CarrinhoConteudo from "./components/CarrinhoConteudo"

export default function Carrinho({flores}){
    /** @type Flor[]*/
    const floresUsuario = flores.encontrarPor("idReservado", Sessao.obter())
    const [modal, setModal] = useState(false)

    return(
        <>
            <summary className="btn btn-ghost btn-circle">
                <CarrinhoIcone contagemItens={floresUsuario.length}/>
            </summary>
            <div tabIndex={0} className="mt-3 z-20 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <CarrinhoDropdown flores={floresUsuario} setModal={setModal}/>
            </div>
            <Modal modalState={modal} setModal={setModal}>
                <CarrinhoConteudo flores={flores} floresUsuario={floresUsuario} />
            </Modal>
        </>
    )
}
