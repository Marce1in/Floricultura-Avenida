import Tabela from "../../../../helpers/tabela";
import AdminProduto from "./components/AdminProduto";
import AdminCriarFlor from "./components/AdminCriarFlor";
import { useTabela } from "../../../../helpers/useTabela";
import Modal from "../Modal";
import { useState } from "react";
import AdminMembro from "./components/AdminMembro";

/** @param {Object} props 
* @param {Tabela} props.flores */
export default function Admin({flores}){
    const membros = useTabela("membros")

    const [modalFlor, setModalFlor] = useState(false)

    const listaProdutos = flores.getTabela().map(
        flor => <AdminProduto flor={flor} flores={flores} key={flor.id} />
    )
    const listaMembros = membros.getTabela().map(
        membro => <AdminMembro membro={membro} membros={membros} key={membro.id} />
    )

    function EXPLODE(){
        localStorage.clear()
        membros.setTabelaHook(null)
        flores.setTabelaHook(null)
    }

    return (
        <>
            <h2 className="text-center font-extrabold text-2xl">Painel do Admin</h2>  
            <hr />

            <h3 className="text-center font-extrabold text-xl pt-5">Flores</h3>  
            <hr />
            <div className="flex justify-center pt-5">
                <button onClick={() => setModalFlor(true)} className="btn btn-success btn-xl w-1/2">Criar Flor</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-center">Deletar</th>
                            <th className="text-center">Nome</th>
                            <th className="text-center">ID</th>
                            <th className="text-center">Valor</th>
                            <th className="text-center">Reserva</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProdutos}     
                    </tbody>
                </table>
            </div>
            <hr />
            <Modal setModal={setModalFlor} modalState={modalFlor}>
                <AdminCriarFlor flores={flores} />
            </Modal>

            <h3 className="text-center font-extrabold text-xl pt-10">Usuários</h3>  
            <hr />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Deletar</th>
                            <th>Nome</th>
                            <th>ID</th>
                            <th>Senha</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaMembros}     
                    </tbody>
                </table>
            </div>
            <hr />

            <div className="flex flex-col justify-center pt-40">
                <h2 className="text-center font-extrabold">DELETAR TUDO</h2>
                <h2 className="text-center font-extrabold">SIM, VAI CRASHAR O SITE.</h2>
                <button className="btn bg-red-600" onClick={() => EXPLODE()}>
                    EXPLODE
                </button>
            </div>
        </>
    )
}
