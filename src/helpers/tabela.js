/** 
 * @class Tabela
 * @summary Representa uma tabela (array de objetos) que é salva no localStorage
 * 
 * @description Tabela é uma classe usada para abstrair o uso do localStorage. Com ela é possível localizar, deletar, mudar e adicionar objetos com facilidade a uma array
 */
export default class Tabela {
    /** 
     * @field Uma array de objetos
     * @type object[] 
     */
    #_tabela 
    /** 
     * @field A chave de onde estava salva a tabela
     * @type string
     */
    #_localStorageKey 
    /** 
     * @field usado para funcionar como um hook em react
     * @summary Transforma a classe Tabela em um hook de react
     * @type Function
     * */
    setTabelaHook 

    /** 
     * @constructor
     * 
     * @param {string} LocalStorageKey - A chave do localStorage onde salva os dados da Tabela
     */
    constructor(LocalStorageKey){
        this.#_tabela = this.#obterDoLocalStorage(LocalStorageKey)
        this.#_localStorageKey = LocalStorageKey
    }

    /**
     * @method getTabela
     * @summary Retorna toda tabela (array de objetos)
     * 
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
     * @method setTabela
     * @summary sobscreve o valor da tabela
     * 
     * @param {object[]} tabela
     */
    setTabela(tabela){
        this.#_tabela = tabela 
    }


    /**
     * @method encontrarUmPor
     * @summary Encontra o primeiro objeto na tabela que bater com o {campo: valor}
     * 
     * @param {string} campo - O campo da tabela
     * @param {*} valor - O valor que será usado para localizar o objeto
     * 
     * @returns {object} - Retorna o objeto encontrado
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
     * @method encontrarPor
     * @summary Encontra todos os objetos na tabela que batem com o {campo: valor}
     *
     * @param {string} campo - O campo da tabela
     * @param {*} valor - O valor que será usado para localizar os objetos
     * 
     * @returns {object[]} - Retorna uma tabela (array de objetos)
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
     * @method mudarPor
     * @summary Muda os valores dentro de todas colunas da tabela que batem com o {campo: valor}
     * 
     * @param {string} campo - O campo da tabela
     * @param {*} valor - O valor que será usado para localizar os objetos
     * @param {object} novosValores - Os novos valores para o objeto localizado
     * 
     * @returns {void}
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
     * @method deletarPor
     * @summary Deleta todos objetos dentro da tabela que batem com o {campo: valor} 
     * 
     * @param {string} campo - O campo da tabela
     * @param {*} valor - O campo que será usado para localizar
     * 
     * @returns {void}
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
     * @method adicionar
     * @summary Adiciona um objeto a tabela 
     * 
     * @param {object} objeto - O objeto que será adicionado, o objeto adicionado precisa ter todos os campos de um objeto de dentro da tabela
     * 
     * @returns {void}
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

    /**
     * @method enviarParaLocalStorage
     * @summary Salva a tabela no localStorage utilizando-se da chave que foi passada na criação da Tabela
     * 
     * @returns {void}
     */
    enviarParaLocalStorage(){
        localStorage.setItem(this.#_localStorageKey, JSON.stringify(this.#_tabela))
    }

    /**
     * @method obterDoLocalStorage
     * @summary Método privado que retorna a array de objetos que foi salva dentro do localStorage
     * 
     * @param {string} key - A chave do localStorage onde está a tabela
     * 
     * @return {object[]} - A tabela que está salva localStorage
     */
    #obterDoLocalStorage(key){
        const tabela = JSON.parse(localStorage.getItem(key))
        if (!tabela){
            throw Error(`Não existe nenhuma tabela com a chave "${key}" no localStorage!`)
        }

        return tabela
    }

    /**
     * @method validarObjeto
     * @summary Valida se os campos do objeto fazem parte dos campos de uma instancia da tabela (objeto)
     * 
     * @param {object} objeto - Objeto a ser validado
     * 
     * @return {void}
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
     * @method iniciar
     * @static
     * 
     * @summary Inicia uma tabela no LocalStorage
     * 
     * @param {string[]} campos - Uma array de strings que nomeia todos os campos que uma coluna na tabela terá. (todos os campos de um objeto dentro da array de tabelas)
     * @param {string} key - Onde será armazenada a tabela. Declara como se chamará a chave do valor no localStorage
     */
    static iniciar(campos, key){
        const tabela = [{}]
        campos.forEach(campo => {
            tabela[0][campo] = null
        })

        localStorage.setItem(key, JSON.stringify(tabela))
    }

    /**
    * @method encontrarEmLocalStoragePor
    * @static
    * 
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
