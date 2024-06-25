import FormularioLogin from "./components/FormularioLogin"

export default function Login(){
    return (
        <>
            <div className="w-96 mt-24 m-auto border-neutral rounded-lg flex flex-col justify-center border-2">
                <div className="p-10">
                    <FormularioLogin />
                </div>
            </div>
        </>
    )
}
