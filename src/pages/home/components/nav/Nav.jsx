import BarraPesquisa from "./components/BarraPesquisa";
import Carrinho from "./components/carrinho/Carrinho";
import Ordernar from "./components/Ordenar";
import Perfil from "./components/Perfil";
import Titulo from "./components/Titulo";

export default function Nav({flores, setOrdem, setFiltro}){

    return(
        <>
            <div className="navbar bg-base-300">
                <div className="flex-1">
                    <Titulo flores={flores}/>
                    <BarraPesquisa setFiltro={setFiltro}/>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <Ordernar setOrdem={setOrdem}/>
                    </ul>
                    <details className="dropdown dropdown-end">
                        <Carrinho flores={flores}/>
                    </details>
                    <div className="dropdown dropdown-end">
                        <Perfil />
                    </div>
                </div>
            </div>
        </>
    )
}
