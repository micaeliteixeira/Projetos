# Boas vindas ao repositório do projeto TryBeer - versão 1! 

Este é a primeira versão do projeto desenvolvido em grupo durante o curso Desenvolvimento de Software Full-Stack na Trybe, como projeto de conclusão de teste dos conhecimentos adquiridos nos modulos front-end e back-and.

---

# Sumário

- [Habilidades](#habilidades)
- [Como Rodar](#como-rodar)
- [Protótipo](#protótipo)
- [Status](#status)
- [Lista de desafios](#lista-de-desafios)

    - [1 - Crie uma página de login](#1---crie-uma-página-de-login)
    - [2 - Crie uma página de registro de usuários](#2---crie-uma-página-de-registro-de-usuários)
    - [3 - Crie o menu top e o menu side bar](#3---crie-o-menu-top-e-o-menu-side-bar)
    - [4 - Criar tela de perfil do cliente](#4---criar-tela-de-perfil-do-cliente)
    - [5 - Criar Tela de Produtos](#5---criar-tela-de-produtos)
    - [6 - Criar Tela de Checkout](#6---criar-tela-de-checkout)
    - [7 - Criar Tela de Meus Pedidos](#7---criar-tela-de-meus-pedidos)
    - [8 - Criar Tela de Detalhes Pedidos](#8---criar-tela-de-detalhes-pedidos)
    - [9 - Criar menu side bar para Administrador](#9---criar-menu-side-bar-para-administrador)
    - [10 - Criar tela de perfil de Administrador](#10---criar-tela-de-perfil-de-administrador)
    - [11 - Criar tela de pedidos de admin](#11---criar-tela-de-pedidos-de-admin)
    - [12 - Criar tela de Detalhes de admin](#12---criar-tela-de-detalhes-de-admin)
    

---

## Habilidades

É uma aplicação de ponta a ponta!

Isso significa que a API, o banco de dados e o front-end. 😁

O projeto em si é super divertido! É uma plataforma de delivery de cerveja. 🍻

Para facilitar o entendimento, dá para dividirmos a aplicação em três partes:

- Front-end do **cliente**, onde nossos clientes vão comprar cerveja;

- Front-end do **admin**, onde o estabelecimento controlará os pedidos feitos;

- API, que será compartilhada entre cliente e admin.

- O banco de dados utilizado é o `MySQL`!

- React.

- CSS


### Como rodar

##### Back-end
  * Instale as dependências:
    * `npm install`
  * É necessário ter as variaveis de ambientes configuradas no arquivo .env da pasta Back-end.
   ` HOSTNAME=localhost `
   ` MYSQL_USER=root `
   ` MYSQL_PASSWORD="sua_senha_aqui"`
  * Haverá um arquivo chamado `script.sql` onde já contém a criação de do banco e alguns inserts.
    * Para rodar o arquivo basta rodar o comando:
      `mysql -u root -p`
    * Isso fará com que abra o terminal do MySQL se abra. Depois, basta executar o comando:
      `source pasta_do_projeto/script.sql`
  * Inicialize o projeto:
    * `npm run debug start` (deve aparecer que o nodemon foi inicializado no seu terminal)
##### Front-end
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador com um texto simples)



### Protótipo
 * Protótipo do projeto desenvolvido pelos integrantes do grupo.
 <img src="https://github.com/micaeliteixeira/Projetos/blob/project-Trybeer/Project%20Trybeer1/public/loginGrupo.png">

 * [Protótipos de telas sugeridos pelo curso](https://github.com/micaeliteixeira/Projetos/tree/project-Trybeer/Project%20Trybeer1/public)



### Status 🚧

 * Versão 1 - concluída

 * ⚠️ IMPORTANTE ⚠️ 
    * O projeto TryBeer é a base para o desenvolvimento do projeto TryBeer **v2**;

### Lista de desafio

#### 1 - Crie uma página de login

Esta tela possui o nome `Login` no protótipo.

- Todos os elementos da tela devem respeitar os atributos descritos no protótipo;

- A rota da tela deve ser `/login`;

- A rota `/` da aplicação deve redirecionar para a rota `/login`;

- A pessoa deve conseguir escrever seu email no input de email;

- A pessoa deve conseguir escrever sua senha (letras ou números) no input de senha;

- O formulário só fica válido após um email válido e uma senha de, no mínimo, 6 números serem preenchidos. Um email válido possui a forma `<nome>@<domínio>`. Caso o formulário esteja inválido, o botão de submeter deve estar desativado. Caso contrário, deve estar ativado;

- Após a submissão bem sucedida do formulário, o token que identifica o usuário recebido na resposta deve ser salvo no `localStorage`. Esse token deve ser utilizado para futuras requisições à API;

- Após a submissão bem sucedida do formulário, se o usuário for do tipo `administrador`, a pessoa deve ser redirecionada para a página **Admin - Home**;

- Após a submissão bem sucedida do formulário, se o usuário for do tipo `cliente`, a pessoa deve ser redirecionada para a página **Cliente - Produtos**;

- Deve existir um botão para o usuário se registrar com o texto `"Ainda não tenho conta"`. Ao ser clicado, a pessoa deve ser redirecionada para a página **Registro**.

#### 2 - Crie uma página de registro de usuários

Esta tela possui o nome `Registro` no protótipo.

- Todos os elementos devem respeitar os atributos descritos no protótipo;

- A rota da tela deve ser `/register`;

- A tela deve mostrar um formulário com os seguintes campos:

  - **nome** - deve conter, no mínimo, 12 letras, sem números ou caracteres especiais;

  - **email** - deve conter um email válido. Um email válido possui o formato `<nome>@<domínio>`;

  - **senha** - composta por, no mínimo, 6 caracteres;

  - **quero vender** - um checkbox opcional, desmarcado por padrão.

- Caso a opção `Quero vender` esteja marcada, o usuário deve ser cadastrado com um papel de **admin**. Caso contrário, será um **client**;

- Caso os dados inseridos no formulário sejam inválidos, o botão de submeter deve estar desativado. Caso contrário, deve estar ativado;

- Caso a opção `Quero vender` esteja marcada, ao clicar no botão `"Cadastrar"`, a pessoa deve ser redirecionada para a página **Admin - Home**. Caso contrario, deve ser redirecionada para a página de **Cliente - Produtos**.


#### 3 - Crie o menu top e o menu side bar

- Todos os elementos devem respeitar os atributos descritos no protótipo para o menu superior;

- O menu superior deve sempre ser exibido em todas as telas;

- O título correspondente à tela em que o usuário se encontra deve ser mostrado, confome protótipos;

- Deve haver um ícone do tipo "hambúrguer" no canto superior esquerdo do menu superior. Quando clicado, caso o menu lateral esteja oculto, deve ser mostrado. Caso contrário, o menu lateral deve ser escondido.

- Todos os elementos devem respeitar os atributos descritos no protótipo para o menu lateral;

- Deve conter quatro itens: `"Produtos"`, `"Meus pedidos"`, `"Meu Perfil"` e `"Sair"`;

- Ao clicar no item `"Produtos"`, a pessoa deve ser redirecionada para a tela **Cliente - Produtos**;

- Ao clicar no item `"Meus pedidos"`, a pessoa deve ser redirecionada para a tela **Cliente - Meus Pedidos**;

- Ao clicar no item `"Meu Perfil"`, a pessoa deve ser redirecionada para tela **Cliente - Meu Perfil**;

- Ao clicar no item `"Sair"`, a pessoa deve ser redirecionada para a tela **Login** e ser deslogada.

#### 4 - Criar tela de perfil do cliente

Esta tela possui o nome `Cliente - Meu Perfil` no protótipo.

- Todos os elementos devem respeitar os atributos descritos no protótipo;

- A rota da tela deve ser `/profile`;

- Deve ter dois campos de texto: um para o `email` e o outro para o `name`. Apenas o `name` pode ser alterado. Dessa forma, o campo `email` deve ser `read-only`;

- Deve ter um botão `"Salvar"`". Caso o usuário tenha editado o nome, o botão deve ser habilitado. Caso contrário, o botão deve estar desabilitado;

- Ao clicar no botão `"Salvar"`, uma requisição deve ser feita à API e o nome da pessoa deve ser atualizado no banco de dados. Quando a atualização terminar, deve-se exibir a mensagem `Atualização concluída com sucesso` na tela;

- Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela **Login**.



#### 5 - Criar Tela de Produtos
Esta tela possui o nome `Cliente - Produtos` no protótipo.

- Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de produtos;

- A rota da tela deve ser `/products`;

- Nessa tela, os produtos devem ser organizados em "cards", e deve haver um card para cada produto;

- Os cards devem conter os seguintes dados do produto:

  - Foto;

  - Nome do produto;

  - Preço unitário;

  - Quantidade atual inserida no carrinho;

  - Botão de adicionar (`+`) e de remover (`-`) uma unidade do produto no carrinho.

- Ao clicar no botão `+`, a quantidade do produto deve aumentar em 1;

- Ao clicar no botão `-`, a quantidade do produto deve diminuir em 1, limitado a 0;

- Caso a pessoa atualize o browser, o carrinho deve ser mantido;

- O preço unitário deve seguir o padrão `R$ 00,00`;

- Quando a quantidade mostrada no card do produto chegar a 0, o produto deve ser removido do carrinho;

- Deve ter um botão `"Ver carrinho"`. Esse botão também deve exibir o **valor total** dos produtos no carrinho;

- O **valor total** mostrado no botão `"Ver carrinho"` deve ser alterado dinamicamente, ou seja, ao adicionar ou remover um produto no carrinho, o valor total deve ser atualizado;

- Ao clicar no botão `"Ver carrinho"`, a pessoa deve ser redirecionada para a página **Cliente - Checkout**.

- Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela **Login**.


#### 6 - Criar Tela de Checkout

Esta tela possui o nome `Cliente - Checkout` no protótipo.

- Todos os elementos devem respeitar os atributos descritos no protótipo para a tela;

- A rota da tela deve ser `/checkout`;

- Caso a pessoa atualize o browser, o carrinho deve ser mantido;

- Deve ter uma lista dos produtos selecionados com a seguinte estrutura: `quantidade do produto -- nome do produto -- valor total do produto`, sendo o valor total calculado por **quantidade \* preço unitário**;

- Ao lado de cada produto deve haver um botão que, quando clicado, exclui este produto do carrinho;

- Abaixo da lista, mostre o **valor total do pedido**, no seguinte formato: `Total: R$ 0,00`. O valor total do pedido é calculado a partir da **soma de todos os valores totais dos produtos**;

- Deve existir um formulário para a pessoa digitar o endereço de entrega dos produtos. O formulário deve conter dois campos de texto: um para a **rua** e o outro para o **número da casa**;

- Deve ter um botão `"Finalizar Pedido"`. O botão deve estar habilitado **apenas** se o valor total do pedido for **maior que zero** e o endereço de entrega estiver preenchido;

- Ao clicar em "`Finalizar pedido`", deve ser feita uma requisição para o backend para salvar o pedido no banco de dados, caso a operação dê certo, a mensagem `Compra realizada com sucesso!` deve ser exibida por **2 segundos** e em seguida a pessoa deve ser redirecionada para a página **Cliente - Produtos**. Caso contrário, deve ser exibido uma mensagem de erro;

- Quando um pedido for finalizado, o carrinho deve ser esvaziado;

- Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela **Login**.

#### 7 - Criar Tela de Meus Pedidos

Esta tela possui o nome `Cliente - Meus Pedidos` no protótipo.

- Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de meus pedidos;

- A rota da tela deve ser `/orders`;

- Deve conter uma lista de cards, onde cada card é um pedido. Cada card deve conter as seguintes informações: `número do pedido`, `data de realização` e `valor total do pedido`. Para a data de realização do pedido, mostre **apenas o dia e o mês**;

- A listagem deve mostrar os pedidos ordenados por id;

- Ao clicar no card, a pessoa deve ser redirecionada para a página **Cliente - Detalhes do Pedido**.

- Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela **Login**.


### 8 - Criar Tela de Detalhes Pedidos

Esta tela possui o nome `Cliente - Detalhes de Pedido` no protótipo.

- Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de detalhes do pedido;

- A rota da página deve ser `/orders/:numero-do-pedido`;

- Mostre o `número do pedido` e a `data de realização`. Para a data de realização do pedido, mostre apenas o dia e o mês;

- Deve ter uma lista dos produtos selecionados com a seguinte estrutura: `quantidade do produto -- nome do produto -- valor total do produto`. Sendo o valor total calculado por **quantidade \* preço unitário**;

- Abaixo da lista, mostre o `valor total do pedido`. O valor total do pedido é calculado a partir da **soma de todos os valores totais dos produtos**.

- Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela **Login**.

### 9 - Criar menu side bar para Administrador

- Todos os elementos devem respeitar os atributos descritos no protótipo para o menu lateral;

- Deve conter três itens: `"Pedidos"`", `"Perfil"`" e "`Sair`";

- Ao clicar no item `"Pedidos"`, a pessoa deve ser redirecionada para a tela **Admin - Home**;

- Ao clicar no item `"Perfil"`, a pessoa deve ser redirecionada para tela **Admin - Perfil**;

- Ao clicar no item `"Sair"`, a pessoa deve ser redirecionada para a tela **Login** e ser deslogada.


### 10 - Criar tela de perfil de Administrador

Esta tela possui o nome `Admin - Perfil` no protótipo.

- Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de perfil;

- A rota da página deve ser `/admin/profile`;

- Mostrar o `email` e o `nome` do usuário. Não permita que o usuário edite os dados;

- Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela **Login**.


### 11 - Criar tela de pedidos de admin

Esta tela possui o nome `Admin - Pedidos` no protótipo.

- Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de pedidos;

- A rota da página deve ser `/admin/orders`;

- Essa tela deve mostrar todos os pedidos feitos;

- Os pedidos pendentes devem ter o label `Pendentes`, ao passo que os pedidos entregues devem ter o label `Entregue`;

- Os "cards" dos pedidos devem conter as informações:

  - Número do pedido;

  - Endereço para entrega;

  - Valor total do pedido.

- Ao clicar em qualquer parte do card do pedido, a pessoa deve ser redirecionada para a tela `Admin - Detalhe de Pedido`.


### 12 - Criar tela de Detalhes de admin

Essa página corresponde às páginas `Admin - Detalhes de Pedido - Pendente` e `Admin - Detalhes de Pedido - Entregue` no protótipo.

- Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de detalhes do pedido;

- A rota da página deve ser `/admin/orders/:id`;

- No cabeçalho, mostre o `número do pedido` e o `status` atual - Pendente ou Entregue;

- Deve ter uma listagem com os produtos do pedido, onde cada linha deve conter:

  - Quantidade;

  - Nome do produto;

  - Valor total do produto.

- O `preço total` do produto é calculado usando **quantidade \* preço unitário**;

- Mostre também o `valor total do pedido`. O valor total do pedido é calculado a partir da **soma de todos os valores totais dos produtos**;

- Caso o status do pedido seja **pendente**, um botão para marcar o pedido como entregue deve ser exibido. Caso contrário, não exiba o botão;

- Ao clicar no botão `"Marcar pedido como entregue"`, o status desse pedido deve mudar para `Entregue` e o botão deve desaparecer.



