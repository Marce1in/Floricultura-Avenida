import FormularioRegistro from "./components/FormularioRegistro"

export default function Registro(){
    return (
        <>
            <div className="w-96 mt-24 m-auto border-neutral rounded-lg flex flex-col justify-center border-2">
                <div className="p-10">
                    <FormularioRegistro />
                </div>
            </div>
        </>
    )
}
