
# Bem-vindo ao projeto de Trivia! 👋

Este projeto é a refatoração do desing de um projeto desenvolvido em grupo durante o curso Desenvolvimento de Software Full-Stark na [Trybe](https://www.betrybe.com/), no módulo Fundamentos de Desenvolvimento Web, como forma de testar e colocar as práticas adquiridas durante o curso.

---

## HABILIDADES 


  - Criar o store Redux em aplicações React

  - Criar reducers no Redux em aplicações React

  - Criar actions no Redux em aplicações React

  - Criar dispatchers no Redux em aplicações React

  - Conectar Redux aos componentes React

  - Criar actions assíncronas na sua aplicação React que faz uso de Redux.
  
  - Uso de API

---

## SUMÁRIO

- [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Protótipo do projeto](#protótipo-do-projeto)
- [Data de entrega](#data-de-entrega)
- [Como desenvolver](#como-desenvolver)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [API de Trivia](#api-de-trivia)
  - [Gravatar](#gravatar)
  - [Observações técnicas](#observações-tecnicas)
- [Lista de requisitos](#lista-de-requisitos)
  - [Tela de início](#tela-de-inicio)
    - [1 - Crie a tela de login, onde a pessoa que joga deve preencher as informações para iniciar um jogo](#1-crie-a-tela-de-login-onde-a-pessoa-que-joga-deve-preencher-as-informações-para-iniciar-um-jogo)
    - [2 - Crie o botão de iniciar o jogo](#2-crie-o-botão-de-iniciar-o-jogo)
    - [3 - Crie um botão que leva a pessoa para a tela de configuração](#3-crie-um-botão-que-leva-a-pessoa-para-tela-de-configuração)
  - [Tela de jogo](#tela-de-jogo)
    - [4 - Crie um header que deve conter as informações da pessoa jogadora](#4-crie-um-header-que-deve-conter-as-informações-da-pessoa-jogadora)
    - [5 - Crie a página de jogo que deve conter as informações relacionadas à pergunta](#5-crie-a-página-de-jogo-que-deve-conter-as-informações-relacionadas-à-pergunta)
    - [6 - Desenvolva o jogo onde só deve ser possível escolher uma resposta correta por pergunta](#6-desenvolva-o-jogo-onde-só-deve-ser-possível-escolher-uma-resposta-correta-por-pergunta)
    - [7 - Desenvolva o estilo que, ao clicar em uma resposta, a correta deve ficar verde e as incorretas, vermelhas](#7-desenvolva-o-estilo-que-ao-clicar-em-uma-resposta-a-correta-deve-ficar-verde-e-as-incorretas-vermelhas)
    - [8 - Desenvolva um timer onde a pessoa que joga tem 30 segundos para responder](#8-desenvolva-um-timer-onde-a-pessoa-que-joga-tem-30-segundos-para-responder)
    - [9 - Crie o placar os as seguintes características](#9-crie-o-placar-com-as-seguintes-características)
    - [10 - Crie um botão de próxima que apareça após a resposta ser dada](#10-crie-um-botão-de-próxima-que-apareça-após-a-resposta-ser-dada)
    - [11 - Desenvolva o jogo de forma que a pessoa que joga deve responder 5 perguntas no total](#11-desenvolva-o-jogo-de-forma-que-a-pessoa-que-joga-deve-responder-5-perguntas-no-total)
  - [Tela de feedback](#tela-de-feedback)
    - [12 - Desenvolva o header de feedback, que deve conter as informações da pessoa jogadora](#12-desenvolva-o-header-de-feedback-que-deve-conter-as-informações-da-pessoa-jogadora)
    - [13 - Crie a mensagem de feedback para ser exibida à pessoa usuária](#13-crie-a-mensagem-de-feedback-para-ser-exibida-a-pessoa-usuária)
    - [14 - Exiba as informações relacionadas aos resultados obtidos para a pessoa usuária](#14-exiba-as-informações-relacionadas-aos-resultados-obtidos-para-a-pessoa-usuária)
    - [15 - Crie a opção para a pessoa jogadora poder jogar novamente](#15-crie-a-opção-para-a-pessoa-jogadora-poder-jogar-novamente)
    - [16 - Crie a opção para a pessoa jogadora poder visualizar a tela de ranking](#16-crie-a-opção-para-a-pessoa-jogadora-poder-visualizar-a-tela-de-ranking)
  - [Tela de ranking](#tela-de-ranking)
    - [17 - Crie a tela de ranking](#17-crie-a-tela-de-ranking)
    - [18 - Crie um botão para ir ao início](#18-crie-um-botão-para-ir-ao-início)
  - [Tela de configurações](#tela-de-configurações)

---

## O QUE DEVERÁ SER DESENVOLVIDO

Você deverá desenvolver um jogo de perguntas e respostas baseado no jogo **Trivia** _(tipo um show do milhão americano rs)_ utilizando _React e Redux_. A partir dessas demandas, teremos uma aplicação onde a pessoa usuária poderá:

  - Logar no jogo e, se o email tiver cadastro no site [Gravatar](https://pt.gravatar.com/), ter sua foto associada ao perfil de usuária.
  - Acessar a página referente ao jogo, onde se deverá escolher uma das respostas disponíveis para cada uma das perguntas apresentadas. A resposta deve ser marcada antes do contador de tempo chegar a zero, caso contrário a resposta deverá ser considerada errada.
  - Ser redirecionada, após 5 perguntas respondidas, para a tela de score, onde o texto mostrado depende do número de acertos.
  - Visualizar a página de ranking, se quiser, ao final de cada jogo.
  - Configurar algumas opções para o jogo em uma tela de configuração acessível a partir do cabeçalho do app.

<img src="">

### Antes de rodar o projeto: 

Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador com um texto simples)


### API de Trivia

A [API do Trivia](https://opentdb.com/api_config.php) é bem simples. Temos 2 endpoints que vamos precisar utilizar para esse exercício.

* **Pegar o token de sessão da pessoa que está jogando**
* **Pegar perguntas e respostas**


### Gravatar

O Gravatar é um serviço que permite deixar o avatar global a partir do email cadastrado, ele mostra sua foto cadastrada em qualquer site vinculado. Na tela de **Inicio**, a pessoa que joga pode colocar um e-mail que deve fazer uma consulta a API do [Gravatar](https://br.gravatar.com/site/implement/images/).

A Implementação é feita baseada no e-mail. Esse email deve ser transformado em uma hash `MD5` (https://br.gravatar.com/site/implement/hash/). Para gerar tal hash, recomendamos utilizar o [CryptoJs](https://github.com/brix/crypto-js).



### LISTA DE REQUISITOS
---

Nesse projeto, a pessoa que joga deve conseguir completar o jogo e conseguir ver seu placar depois de responder todas as 5 perguntas, além de acessar a tela de configurações e de ranking. Lembrem-se de utilizar os conhecimentos adquiridos ao longo dos últimos projetos nas ferramentas do React como o Router, Link, Redux e testes para ajudá-los a completar os requisitos.

### Tela de início/login

#### 1. CRIE A TELA DE LOGIN, ONDE A PESSOA QUE JOGA DEVE PREENCHER AS INFORMAÇÕES PARA INICIAR UM JOGO

  Criar a tela de login contendo as informações de nome e email, onde a pessoa que joga deve conseguir escrever seu nome e email nos inputs e o botão de jogar deve estar desabilitado caso não tenha alguma dessas informações.
  

#### 2. CRIE O BOTÃO DE INICIAR O JOGO

  O botão "Jogar" deve fazer requisição para a API para obter o token e redirecionar a pessoa para tela de jogo


#### 3. CRIE UM BOTÃO QUE LEVA A PESSOA PARA TELA DE CONFIGURAÇÃO

  A tela inicial deve conter um botão que leve para a configuração do jogo

  
### Tela de jogo

#### 4. CRIE UM _HEADER_ QUE DEVE CONTER AS INFORMAÇÕES DA PESSOA JOGADORA

  O header deve conter as informações sobre a pessoa jogadora, como a imagem do Gravatar, o nome e o placar


#### 5. CRIE A PÁGINA DE JOGO QUE DEVE CONTER AS INFORMAÇÕES RELACIONADAS À PERGUNTA

  Deve ser feita a requisição para a API para popular o jogo com as perguntas, categoria e alternativas


#### 6. DESENVOLVA O JOGO ONDE SÓ DEVE SER POSSÍVEL ESCOLHER UMA RESPOSTA CORRETA POR PERGUNTA

  A pergunta deve ter apenas uma alternativa correta


#### 7. DESENVOLVA O ESTILO QUE, AO CLICAR EM UMA RESPOSTA, A CORRETA DEVE FICAR VERDE E AS INCORRETAS, VERMELHAS

  Ao responder a pergunta, se a alternativa for correta, deve ficar verde, caso contrário, vermelha


#### 8. DESENVOLVA UM TIMER ONDE A PESSOA QUE JOGA TEM 30 SEGUNDOS PARA RESPONDER

   A página deve conter um timer que com o tempo máximo de 30 segundos para responder, caso ultrapasse o tempo, a pergunta é considerada errada


##### 9. CRIE O PLACAR COM AS SEGUINTES CARACTERÍSTICAS:

  Ao clicar na resposta correta, pontos devem ser somados no placar da pessoa que está jogando


#### 10. CRIE UM BOTÃO DE "PRÓXIMA" QUE APAREÇA APÓS A RESPOSTA SER DADA

  Deve aparecer um botão de "Próxima" (pergunta) após a resposta ser dada

#### 11. DESENVOLVA O JOGO DE FORMA QUE A PESSOA QUE JOGA DEVE RESPONDER 5 PERGUNTAS NO TOTAL

   O jogo deve ser composto por 5 perguntas, onde, a cada nova pergunta, o timer é reiniciado e após respondê-las, a pessoa que joga deve ser redirecionada para a tela de feedback

  
### Tela de feedback

#### 12. DESENVOLVA O HEADER DE _FEEDBACK_ QUE DEVE CONTER AS INFORMAÇÕES DA PESSOA JOGADORA

   A tela de feedback deve conter as informações da pessoa que joga, incluindo o placar com o valor referente ao desempenho no jogo

 

#### 13. CRIE A MENSAGEM DE _FEEDBACK_ PARA SER EXIBIDA A PESSOA USUÁRIA

  A tela de feedback deve exibir uma mensagem relacionada ao desempenho da pessoa que jogou

 
#### 14. EXIBA AS INFORMAÇÕES RELACIONADAS AOS RESULTADOS OBTIDOS PARA A PESSOA USUÁRIA

  A tela de feedback deve exibir informações sobre o desempenho da pessoa, como o placar final e o número de perguntas que acertou

 

#### 15. CRIE A OPÇÃO PARA A PESSOA JOGADORA PODER JOGAR NOVAMENTE

  A pessoa terá a opção "Jogar novamente", que ao ser clicada, levará para a tela de inicial

 

#### 16. CRIE A OPÇÃO PARA A PESSOA JOGADORA PODER VISUALIZAR A TELA DE _RANKING_

  Deve existir um botão que redirecione a pessoa para a tela de ranking


### Tela de ranking

#### 17. CRIE A TELA DE _RANKING_

   A tela de ranking deve possuir uma lista com a imagem, nome e pontuação das pessoas que jogaram e deve ficar armazenado no localStorage


#### 18. CRIE UM BOTÃO PARA IR AO INÍCIO

  O botão deve redirecionar a pessoa para a tela de inicial (login)

### Tela de configurações

##### 19. Ao mudar o valor do dropdown categoria, apenas perguntas da categoria selecionada devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave category no retorno da API;

##### 20. Ao mudar o valor do dropdown dificuldade, apenas perguntas da dificuldade selecionada devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave difficulty no retorno da API;

##### 21. Ao mudar o valor do dropdown tipo, apenas perguntas do tipo selecionado devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave type no retorno da API.

