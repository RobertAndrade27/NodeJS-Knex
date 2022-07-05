

<p align="center">CRUD básico utilizando Nodejs e Knex para criar migrations e seeds</p>

### Todo

- 1 - Instalado nodemon como dependencia de desenvolvimento : npm i nodemon -D
- 2 - Instalado no projeto as dependencias: npm i knex mysql express
- 3 - Configurar o package.json "main" "src/server.js" / "start": "nodemon src/server.js"
- 4 - Configurar o express para servidor local
- 5 - Criar o arquivo de conexão com o banco : npx knex init
- 6 - Configurar o knexfile.js gerado pelo init
- 7 - Configurar o database/index.js 
- 8 - Determinar o caminho das migrations em knexfile (   migrations: { tableName: 'knex_migrations', directory: `${__dirname}/src/database/migrations`})
- 9 - Criar as migrations
- 10 - criar o seed : npx knex seed:make (nome da seed) exemplo 001_users e configurar o diretorio igual das migrations com o arquivo /seeds
- 11 - Após configurado a seeds rodar o comando para popular: npx knex seed:run
- 12 - instalado o  npm i dotenv e importado no server require('dotenv').config() para configurações de chaves com o arquivo .env


### Routes

-- Usuarios
- get(/users) - Listando todos usuarios com o status A - Ativo
- post(/users/insert) - Inserindo usuarios com informações no body com um JSON 
- put(/users/:id) - Atualizando usuarios com informações no body com um JSON e userid sendo enviado via parametro
- delete(/users/:id) - SoftDelete atualizando o status para D de Deletado

--Produtos
- get(/products) - Listando todos produtos com limite de pagina com apenas 10 resultados, enviar proxima pagina no query ex. page=2