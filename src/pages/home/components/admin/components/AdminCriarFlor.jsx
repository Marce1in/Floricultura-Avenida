import { useForm } from "react-hook-form"
import Tabela from "../../../../../helpers/tabela"

/** @param {Object} props 
* @param {Tabela} props.flores */
export default function AdminCriarFlor({flores}){
    const {handleSubmit, register, reset} = useForm()

    /** @param {{nome: string, valor: string, urlFlor: string}} data */
    function criarFlor(data){
        const valorNum = Number(data.valor)
        if (isNaN(valorNum)){
            alert("Valor Inválido, você digitou um número. Usou ponto em vez de vírgula?")
            return
        }
        flores.adicionar({
            id: crypto.randomUUID(),
            nome: data.nome,
            valor: data.valor,
            florImg: data.urlFlor,
            idReservado: ""
        })


        flores.enviarParaLocalStorage()
        reset()
    }


    return(
        <>
            <h2 className="text-center font-extrabold text-lg">Criador de Flor</h2>
            <hr className="pb-5"/>

                <form method="dialog" onSubmit={handleSubmit(criarFlor)} className="flex items-center justify-center flex-col gap-2"> 
                <label className="form-control w-full max-w-xs">
                    <input required type="text" placeholder="Nome" {...register("nome")} className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <input required type="text" placeholder="Valor" {...register("valor")} className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <input required type="text" placeholder="Url da Imagem" {...register("urlFlor")} className="input input-bordered w-full max-w-xs" />
                </label>
                <input className="btn btn-success w-48 mt-5"type="submit" value="Criar"/>
            </form>
        </>
    )
}
