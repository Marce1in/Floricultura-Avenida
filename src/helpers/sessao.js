import Tabela from "./tabela"

export default class Sessao{

    /** 
     * @param {string} id 
     * @param {string} [keySessao="sessao"] 
     */
    static criar(id, keySessao = "sessao"){
        localStorage.setItem(keySessao, JSON.stringify(id))
    }

    /** 
     * @param {string} [keySessao="sessao"] 
     */
    static apagar(keySessao = "sessao"){
        localStorage.removeItem(keySessao)
    }

    /**
     * @param {string} keySessao
     */
    static obter(keySessao = "sessao"){
        return JSON.parse(localStorage.getItem(keySessao))
    }

    /** 
    * @function validarSessao
    * @summary Verifica se uma sessão é válida.
    *
    * @description Verifica se existe algum id dentro da key "sessao" dentro do localStorage.
    * Se existir, verifica se algum membro tem esse id, se tiver, retorna true, se a sessão
    * estiver vazia ou se nenhum membro ter o id que está armazenado dentro da sessão, 
    * retorna false
    *
    * @param {string} [KeySessao] - Chave da sessão no localStorage, O valor padrão é "sessao" 
    * @param {string} [KeyTabela] - Chave da tabela no localStorage, O valor padrão é "membro"
    *
    * @return {boolean}
    */
    static validar(KeySessao = "sessao", KeyTabela = "membros"){
        const sessao = JSON.parse(localStorage.getItem(KeySessao))
        if(!sessao){
            return false
        }
        else if(Tabela.encontrarEmLocalStoragePor("id", sessao, KeyTabela, true) == null){
            return false 
        }
        else{
            return true
        }
    }
}
