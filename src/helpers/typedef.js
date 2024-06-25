
/**
 * @typedef {object} Flor
 *
 * @property {string} id - UUID gerado pelo crypto.randomUUID()
 * @property {string} nome - Nome da flor
 * @property {number} valor - Valor monetário da flor ex: 10.20
 * @property {string} florImg - Url da flor
 * @property {string} idReservado - Id do usuário que reservou a flor, se existir
 *
 */

/**
 * @typedef {object} Membro
 *
 * @property {string} id - UUID gerado pelo crypto.randomUUID()
 * @property {string} nome - Nome do usuário
 * @property {string} senha - Senha do usuário
 * @property {boolean} admin - Define se o usuário é administrador ou não
 */
