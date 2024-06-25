export default class Tabela {
    /** @type object[]*/
    #_tabela 
    /** @type string*/
    #_localStorageKey 
    /** @type Function*/
    setTabelaHook 

    /** @param {string} LocalStorageKey */
    constructor(LocalStorageKey){
        this.#_tabela = this.#obterDoLocalStorage(LocalStorageKey)
        this.#_localStorageKey = LocalStorageKey
    }

    /**
     * @returns object[]
     */
    getTabela(){
        const primeiraChave = Object.keys(this.#_tabela[0])[0]

        if (this.#_tabela[0][primeiraChave] == null){
            return this.#_tabela.slice(1)
        }
        else{
            return this.#_tabela
        }

    }
    /**
     * @param {object[]} tabela
     */
    setTabela(tabela){
        this.#_tabela = tabela 
    }


    /**
     * @param {string} campo
     * @param {*} valor
     * @returns {object}
     */
    encontrarUmPor(campo, valor){
        let objetoComOValor = {};

        this.#_tabela.some(objeto => {
            if (objeto[campo] == valor) {

                objetoComOValor = objeto
                return true
            }
        })

        return objetoComOValor
    }

    /**
     * @param {string} campo
     * @param {*} valor
     * @returns {object[] | null}
     */
    encontrarPor(campo, valor){
        const objetosComOValor = []

        this.#_tabela.forEach(objeto => {
            if (objeto[campo] == valor) {
                objetosComOValor.push(objeto)
            }
        })

        return objetosComOValor
    }

    /**
     * @param {string} campo
     * @param {*} valor
     * @param {object} novosValores
     */
    mudarPor(campo, valor, novosValores){
        this.#validarObjeto(novosValores)
        const tabela2 = [...this.#_tabela]

        tabela2.forEach((objeto, i, tabela) => {

            if (objeto[campo] == valor) {

                Object.keys(novosValores).forEach(key => {
                    tabela[i][key] = novosValores[key]
                })
            }
        })

        if (this.setTabelaHook){
            this.setTabelaHook(tabela2)
        }
        else{
            this.setTabela(tabela2)
        }
    }


    /**
     * @param {string} campo
     * @param {*} valor
     */
    deletarPor(campo, valor){

        const tabela2 = this.#_tabela.filter(objeto => objeto[campo] != valor)
        
        if (this.setTabelaHook){
            this.setTabela(tabela2)
            this.setTabelaHook(tabela2)
        }
        else{
            this.setTabela(tabela2)
        }
    }

    /** 
     * @param {object} objeto
     */
    adicionar(objeto){
        this.#validarObjeto(objeto)
        const tabela2 = [...this.#_tabela]

        if (Object.keys(tabela2[0]).length != Object.keys(objeto).length){
            throw Error(`O objeto adicionado não é uma instancia válida da tabela! ${objeto}`)
        }

        tabela2.push(objeto)

        if (this.setTabelaHook){
            this.setTabela(tabela2)
            this.setTabelaHook(tabela2)
        }
        else{
            this.setTabela(tabela2)
        }
    }

    enviarParaLocalStorage(){

        localStorage.setItem(this.#_localStorageKey, JSON.stringify(this.#_tabela))
    }

    /**
     * @param {string} key 
     * @return {object[]}
     */
    #obterDoLocalStorage(key){
        const tabela = JSON.parse(localStorage.getItem(key))
        if (!tabela){
            throw Error(`Não existe nenhuma tabela com a chave "${key}" no localStorage!`)
        }

        return tabela
    }

    /**
     * @param {object} objeto
     */
    #validarObjeto(objeto){
        /** @type object*/
        const instanciaTabela = this.#_tabela[0]

        Object.keys(objeto).forEach(key => {

            if(!Object.keys(instanciaTabela).includes(key)){
                throw Error(`Objeto Inválido, a chave "${key}" não existe na tabela!`)
            }
        })
    }
    

    /** 
     * @param {string[]} campos 
     * @param {string} key 
     */
    static iniciar(campos, key){
        const tabela = [{}]
        campos.forEach(campo => {
            tabela[0][campo] = null
        })

        localStorage.setItem(key, JSON.stringify(tabela))
    }

    /**
    * @function encontrarEmLocalStoragePor
    * @summary encontra objetos dentro de uma tabela
    *
    * @description Dado um valor, compara esse valor com o campo de cada objeto dentro
    * de uma tabela (array). Retorna uma tabela (array) de todos os objetos com o valor
    * correspondente ou retorna apenas um objeto se o parâmetro "unico" for passada como true
    *
    * @param {string} campo - O campo do objeto
    * @param {*} valor - O valor que deseja ser encontrado dentro da tabela
    * @param {string} keyTabela - A chave da tabela no localStorage
    * @param {boolean} [unico] - Se for true, retorna somente 1 objeto e não uma array
    *
    * @returns {object[] | object | null}
    */
    static encontrarEmLocalStoragePor(campo, valor, keyTabela, unico = false) {
        const objetosComOValor = []

        const localItem = localStorage.getItem(keyTabela)
        if (!localItem){
            return null
        }

        /** @type{object[]} */
        const tabela = JSON.parse(localItem)


        tabela.some(objeto => {
            if (objeto[campo] == valor) {

                if (unico){
                    objetosComOValor.push(objeto)
                    return true
                }
                else {
                    objetosComOValor.push(objeto)
                }
            }
        })


        if (objetosComOValor.length <= 0){ 
            return null 
        }
        else if (unico){
            return objetosComOValor[0]
        }
        else {
            return objetosComOValor
        }
    }

}
