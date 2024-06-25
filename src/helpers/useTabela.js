import { useState } from "react";
import Tabela from "./tabela";

/**
 * @param {string} keyLocalStorage 
 */
export function useTabela(keyLocalStorage) {
    const tabela = new Tabela(keyLocalStorage)

    const [tabelaArray, setTabela] = useState(tabela.getTabela())

    tabela.setTabelaHook = setTabela
    tabela.setTabela(tabelaArray)

    return tabela
}
