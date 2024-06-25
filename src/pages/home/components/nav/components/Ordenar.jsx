export default function Ordernar({setOrdem}){
    return(
        <>
            <li className="z-10">
                <details>
                    <summary>
                        Ordernar
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                        <li><a onClick={() => setOrdem("<")}>Menor</a></li>
                        <li><a onClick={() => setOrdem(">")}>Maior</a></li>
                        <li><a onClick={() => setOrdem("")}>Cancelar</a></li>
                    </ul>
                </details>
            </li>
        </>
    )
}
