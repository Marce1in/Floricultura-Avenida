/** @param {Object} props 
* @param {Flor[]} props.flores 
* @param {Function} props.setModal */
export default function CarrinhoDropdown({flores, setModal}){
    function calcularTotal(){
        return flores.reduce((total, flor) => flor.valor + total, 0)
    }

    return(
        <div className="card-body">
            <span className="font-bold text-lg">
                {flores.length} {flores.length == 1 ? "flor" : "flores"}
            </span>
            <span className="font-light text-base-content">
                Total: R$ {calcularTotal().toLocaleString(undefined, {minimumFractionDigits: 2})}
            </span>
            <div className="card-actions">
                <button className="btn btn-primary btn-block" onClick={() => {setModal(true)}}>Ver carrinho</button>
            </div>
        </div>

    ) 
}
