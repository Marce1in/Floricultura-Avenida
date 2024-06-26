# Floricultura Avenida
> Floricultura-Avenida é um site estático feito em React.js que simula uma loja de flores, todos os dados são salvos em localStorage.

Você pode acessar o site por aqui: https://marce1in.github.io/Floricultura-Avenida/

## Floricultura avenida tem como objetivo reservar e gerenciar flores, sendo dividida em 3 páginas:
- Home
- Login
- Registro

## Interação
O usuário poderá criar uma conta e registrar-se, após isso ele é redirecionado para homepage.

Lá ele vê uma lista de flores adicionadas pelo administrador, ele pode reservar essas flores,
após ele reservar uma flor, ele pode cancelar tal reserva.

Após a reservar a flor, ela some da lista dos outros usuários e vai para o "carrinho".

O usuário pode filtrar pelos preços das flores, podendo ser crescente ou decrescente, também pode filtra-las pelo nome.

Se enquanto estiver pesquisando pelo nome, no começo da palavra for adicionado "!", a pesquisa entrará em modo **exlusão**, isso significa que apenas os resultados que **não** possuem a palavra serão apresentados.

Se enquanto estiver pesquisando pelo nome, no começo da palavra for adicionado "?", a pesquisa entrará em modo **inclusão**, isso significa que todos os resultados que incluam a palavra em qualquer ponto aparecerão.

Se o usuário entrar com a conta do nome "admin" e senha "admin", ele entrará como admistrador.
Como administrador ele pode clicar na logo "Floricultura Avenida" e administrar as Flores e Usuários.

## Como objetos para o localStorage temos:
- Conta 
    - id: string
    - nome: string
    - senha: string
    - admin: boolean
- Flores
    - id: string
    - nome: string
    - valor: string
    - urlImg: string
    - idReservado: boolean
