import { useNavigate } from "react-router-dom";
import Sessao from "../../../../../helpers/sessao";

export default function Perfil(){
    const navegar = useNavigate()

    function deslogar(){
                
        Sessao.apagar()
        navegar("/login")
    }

    return(
        <>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="Foto de Perfil do usuário" src="https://palmbayprep.org/wp-content/uploads/2015/09/user-icon-placeholder.png" />
                </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li><a onClick={() => deslogar()}>Sair</a></li>
            </ul>
        </>
    )
}
