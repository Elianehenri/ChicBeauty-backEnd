#  Desafio final
# ChicBeauty Backend 

## Visualizar o projeto em video.
 
Acesse o [link](https://drive.google.com/file/d/1PvKCDelKc4pJ_xp3pkA4Eoyn39MBVlev/view) para visualizar o protifolio.

## Requisitos
Desenvolva uma API REST com Node e Express que forneça os dados para o site responsivo criado no projeto "Construindo um Site Responsivo com HTML e CSS" e integre o frontend e a API. As informações devem ser armazenadas no banco de dados MongoDB.


### Tecnologias
- Node.js 
- NPM (Node Package Manager) ou Yarn
- Banco de dados MongoDb
- Express
- TypeORM 
- Multer
- CryptoJS
- JWT
## Funcionalidades
- **Gerenciamento de Produtos**: Criação, leitura, atualização e exclusão de produtos.
- **Gerenciamento de Categorias**: Criação e listagem de categorias.
- **Autenticação e Autorização**: Registro e login de usuários com JWT.
- **Upload de Imagens**: Suporte para upload de imagens de produtos.
- **Endpoints RESTful**: API para interagir com produtos e categorias.


## Usuarios e Senhas cadastrados no banco para teste;
```bash
admin@admin.com
senha
Admin123@

user@user.com
senha
User123@
```
## Instalação e Execução

### 1. Baixar e Extrair o Projeto:

```bash
git clone git@github.com:Elianehenri/ChicBeauty-backEnd.git
```
### 2. Instalar Dependências
Instale as dependências do projeto usando o npm:

```bash
npm install
```
 ### 3. Configurar Variáveis de Ambiente:

Criar um arquivo na raiz do projeto  ****.env**** e colar as variaveis abaixo :
```bash
MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/chicbeauty?retryWrites=true&w=majority
USER_CYPHER_SECRET_KEY=SecreteTesteL5BackEnd2024
USER_JWT_SECRET_KEY=SecreteTesteL5BackEnd2024

```
- Substitua <usuario> e <senha> com suas credenciais do MongoDB.



### 4: Inicializar o Banco de Dados
Para popular o banco de dados com dados iniciais (produtos e categorias), execute o script de seed:

```bash
node scripts/seed.js
```
Passo 5: Iniciar o Servidor
Inicie o servidor:

```bash
npm start
```
O servidor será iniciado em http://localhost:3000.

# Configuração do Frontend
1. Baixar e Extrair o Projeto Frontend:
```bash
git clone git@github.com:Elianehenri/ChicBeauty-02-front.git
```
2. Instalar Dependências
Instale as dependências do projeto usando o npm:

```bash
npm install
```
* Executar os dois projetos no seu computador .


# Autor
Eliane Henriqueta