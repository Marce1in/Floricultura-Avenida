

///*** 
// * @function AdicionarALocalStorage
// * @summary Adiciona seguramente um objeto ao localStorage
// *
// * @description Com a key da array de objetos armazenada no localStorage,
// * adiciona uma nova instância dentro da array de uma maneira segura.
// * Se não existir array, cria uma array com o item dentro e armazena no
// * localStorage.
// *
// * @param {string} key - Chave que aponta onde a array está no localStorage
// * @param {object} item - Objeto que será armazenado na array dentro do LocalStorage
// *
// * @returns {void}
// */
//export function AdicionarALocalStorage(key, item){
//    const localItem = localStorage.getItem(key) 
//
//    if (!localItem){
//        const itemJSON = JSON.stringify([item])  
//        localStorage.setItem(key, itemJSON)
//    }
//    else{
//        const localItemArray = JSON.parse(localItem)
//        localItemArray.push(item)
//        localStorage.setItem(key, JSON.stringify(localItemArray))
//    }
//
//}
//
