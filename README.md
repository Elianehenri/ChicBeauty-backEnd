ChicBeauty Backend
Este é o backend do projeto ChicBeauty, uma aplicação para gerenciamento de produtos e categorias. O backend é construído com Node.js e Express e usa MongoDB como banco de dados.

Funcionalidades
Gerenciamento de Produtos: Criação, leitura, atualização e exclusão de produtos.
Gerenciamento de Categorias: Criação e listagem de categorias.
Autenticação e Autorização: Registro e login de usuários com JWT.
Upload de Imagens: Suporte para upload de imagens de produtos.
Endpoints RESTful: API para interagir com produtos e categorias.
Pré-requisitos
Node.js (v18.16.1 ou superior)
MongoDB
Postman (opcional, para testar a API)
ngrok (opcional, para expor o servidor local)
Configuração do Projeto
Passo 1: Clonar o Repositório
Clone o repositório para o seu ambiente local:

bash
Copiar código
git clone https://github.com/seu-usuario/chicbeauty-backend.git
cd chicbeauty-backend
Passo 2: Instalar Dependências
Instale as dependências do projeto usando o npm:

bash
Copiar código
npm install
Passo 3: Configurar Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

makefile
Copiar código
MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/chicbeauty?retryWrites=true&w=majority
USER_CYPHER_SECRET_KEY=SecreteTesteL5BackEnd2024
USER_JWT_SECRET_KEY=SecreteTesteL5BackEnd2024
Substitua <usuario> e <senha> com suas credenciais do MongoDB.

Passo 4: Inicializar o Banco de Dados
Para popular o banco de dados com dados iniciais (produtos e categorias), execute o script de seed:

bash
Copiar código
node scripts/seed.js
Passo 5: Iniciar o Servidor
Inicie o servidor:

bash
Copiar código
npm start
O servidor será iniciado em http://localhost:3000.

Passo 6: Testar a API
Você pode usar o Postman para testar os endpoints da API. Abaixo estão alguns dos principais endpoints:

Produtos
GET /api/products - Lista todos os produtos.
GET /api/products/:id - Obtém um produto pelo ID.
POST /api/products - Cria um novo produto.
PUT /api/products/:id - Atualiza um produto existente.
DELETE /api/products/:id - Remove um produto pelo ID.
Categorias
GET /api/categories - Lista todas as categorias.
POST /api/categories - Cria uma nova categoria.
Testar Localmente com ngrok
Para expor seu servidor local para a web, você pode usar o ngrok. Execute o seguinte comando:

bash
Copiar código
ngrok http 3000
Isso fornecerá uma URL pública que você pode usar para testar a API externamente.

Estrutura do Projeto
controllers/ - Controladores responsáveis por gerenciar as rotas e a lógica de negócios.
models/ - Modelos de dados do MongoDB.
routes/ - Definição das rotas da API.
services/ - Serviços para interagir com o banco de dados.
scripts/ - Scripts auxiliares, como o de seed.
Contribuição
Contribuições são bem-vindas! Se você encontrar algum problema ou quiser adicionar novas funcionalidades, sinta-se à vontade para abrir uma issue ou um pull request.

Licença
Este projeto está licenciado sob a MIT License.