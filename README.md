<h1>:pencil: BLOGS API</h1>
<div>
  <h3>Sobre o projeto</h3>
  <p>Este é um projeto que simula uma API e um banco de dados para a produção de conteúdo para um blog!</p>
  <p>O projeto foi desenvolvido por <a href="https://github.com/Istvanoliva">Istvan Oliva</a> enquanto estudava na <a href="https://www.betrybe.com/">Trybe</a> :rocket:</p>
</div>
<div>
  <h3>Ferramentas utilizadas</h3>
  <ul>
    <li><a href="https://nodejs.org/en/">Node.js<a/></li>
    <li><a href="https://expressjs.com/">Express<a/></li>
    <li><a href="https://sequelize.org/">Sequelize</a></li>
    <li><a href="https://developer.mozilla.org/pt-BR/docs/Glossary/CRUD">CRUD</a></li>
    <li><a href="https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-1">MSC</a></li>
    <li><a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST">REST</a></li>
  </ul>
</div>
<div>
  <h3>Orientações</h3>
  <details>
  <summary>:computer: <strong>Clonando o repositório e instalando as dependências</strong></summary>
    
  1. Clone o repositório
    
  - `git clone git@github.com:Istvanoliva/blogs-api.git`;
  
  - Entre na pasta que foi criada no processo de clonagem:
    - `cd project-blogs-api`;
  
  2. Faça a instalação das dependências
  
  - `npm install` ou `npm i`;
  </details>
  <details>
  <summary>:game_die: <strong>Configurando a conexão com o banco de dados</strong></summary>

  1. Criando arquivo para a configuração
  
  - Crie o arquivo .env na na raiz do projeto:
    - `.env`;
    
  - Coloque as seguintes informações nesse arquivo:
    ```
    #### SERVER VARS
    NODE_ENV=development
    API_PORT=3000

    #### DATABASE VARS
    MYSQL_HOST=localhost
    MYSQL_PORT=3306
    MYSQL_DB_NAME=blogs-api
    MYSQL_USER=root
    MYSQL_PASSWORD=password

    #### SECRECT VARS
    JWT_SECRET=suaSenhaSecreta
    ```
  - Caso sua porta do API e do MySQL não seja a que estão descritas no arquivo .env, por favor altere para as que você usa, assim como o password do seu MySQL.
   
  2. Variáveis Ambiente
  - Caso queria conhecer mais sobre variáveis ambiente, segue link sobre:
    - https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/
  </details>
  <details>
  <summary>:running: <strong>Rodando API localmente</strong></summary>
  
  - Rode o seguinte comando no terminal estando na raiz do projeto:
  
    - `npm start`;
    
  - Caso você queira, foi configurado no package.json um scripts para rodar a aplicação de formas alternativas.
  </details>
  
  <details>
  <summary>:whale: <strong>Rodando via Docker</strong></summary>
  <p>Caso você queria e tenha o conhecimento de como usar, existe um arquivo <em><strong>docker-compose</strong></em> na raiz do projeto.
   <br>:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior.
   <br> <a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt">Veja aqui</a> ou <a href="https://docs.docker.com/compose/install/">na documentação</a> como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.<br></p> Segue os comandos criar e acessar os containers:</p>    
  
  - Na raiz do projeto rode o seguinte comando:
  
    - `docker-compose up -d`;
    
  - Para acessar o terminal do container, roda o seguinte comando:
  
    - `docker container exec -it blogs_api bash`;
  
  - Para fechar o terminal do container execute o comando:
  
    - `exit`;
    
  - Se não for mais usar os containers, rode o seguinte comando:
  
    - `docker-compose down`;
  </details>
</div>

#

Todos os projetos da [Trybe](https://www.betrybe.com/) utilizam `linters`, `Git` e `GitHub`.<br/>