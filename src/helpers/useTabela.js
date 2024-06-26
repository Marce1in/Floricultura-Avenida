import { useState } from "react";
import Tabela from "./tabela";

/**
 * @function useTabela
 * @summary transforma a Tabela em um state em react. Todos os métodos da classe Tabela tornam-se um setState customizado
 * @param {string} keyLocalStorage 
 * 
 * @returns {Tabela}
 */
export function useTabela(keyLocalStorage) {
    const tabela = new Tabela(keyLocalStorage)

    const [tabelaArray, setTabela] = useState(tabela.getTabela())

    tabela.setTabelaHook = setTabela
    tabela.setTabela(tabelaArray)

    return tabela
}
