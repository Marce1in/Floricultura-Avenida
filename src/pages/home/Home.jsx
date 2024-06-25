import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Sessao from "../../helpers/sessao"
import Nav from "./components/nav/Nav"
import Produto from "./components/Produto"
import { useTabela } from "../../helpers/useTabela"

export default function Home(){
    const navegar = useNavigate()
    const flores = useTabela("flores")
    const [ordem, setOrdem] = useState("")
    const [filtro, setFiltro] = useState("")

    useEffect(() => {
        if (!Sessao.validar()){
            navegar("/login")
        }

    }, [])

    /** 
     * @param {Flor} florA
     * @param {Flor} florB 
     */
    function ordernar(florA, florB){
        if (ordem == ""){
            return
        }
        else if (ordem == ">"){
            return florB.valor - florA.valor
        }
        else {
            return florA.valor - florB.valor
        }
        
    }
    /** 
     * @param {Flor} flor 
     */
    function encontrar(flor){
        if (filtro == ""){
            return true
        }

        const nome = flor.nome.toLowerCase()
        if (filtro[0] === "!"){
            if (filtro.length == 1 || !nome.includes(filtro.substring(1))){
                return true
            }
            return false
        }
        else if (filtro[0] === "?"){
            if (nome.includes(filtro.substring(1))){
                return true
            }
            return false
        }
        else if (nome.substring(0, filtro.length) === filtro){
            return true
        }
        else {
            return false
        }

    }



    const listaProdutos = flores.encontrarPor("idReservado", "").filter(encontrar).sort(ordernar).map(
        flor => { 
            const props = {
                    id: flor.id,
                    nome: flor.nome,
                    valor: flor.valor,
                    imgUrl: flor.florImg,
                    floresTabela: flores
            }

            return <Produto key={flor.id} {...props} />
    })

    return (
        <>
            <Nav flores={flores} setOrdem={setOrdem} setFiltro={setFiltro} />
            <main className="pt-5 grid justify-items-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {listaProdutos.length ? 
                    listaProdutos 
                    : 
                    <h2 className="font-extrabold">
                        Desculpe! Estamos sem flores no momento :(
                    </h2>}            
            </main>
        </>
    )
}
