# 🏦 Mini Banco Central API

Esta é uma API REST que simula um agregador bancário (como um "Mini Banco Central"), permitindo consolidar informações financeiras de usuários em múltiplas instituições bancárias no contexto de Open Finance.

---

## 🧱 Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- Docker + Docker Compose
- Knex.js (Query Builder e Migrations)
- REST Client (para testes de endpoints no VSCode)

---

## 📁 Estrutura de Pastas

```
mini-banco-central/
├── src/
│   ├── domain/                # Lógica de negócio (DDD - Domain Driven Design)
│   │   ├── entities/          # Entidades principais (User, Institution, etc)
│   │   ├── repositories/      # Interfaces dos repositórios
│   │   └── usecases/          # Casos de uso (regras de aplicação)
│   ├── infra/
│   │   ├── database/
│   │   │   ├── migrations/    # Migrations do banco
│   │   │   └── repositories/  # Implementações reais dos repositórios
│   │   └── connection.js      # Conexão com o PostgreSQL via Knex
│   ├── http/
│   │   ├── controllers/       # Controladores (camada web)
│   │   └── routes/            # Rotas da API agrupadas por domínio
│   ├── shared/                # Utilitários compartilhados
│   └── server.js              # Ponto de entrada da aplicação
├── requests/                  # Arquivos .http para testes com REST Client
├── .env                       # Variáveis de ambiente
├── knexfile.js                # Configuração do Knex
├── docker-compose.yml         # Serviço PostgreSQL com Docker
├── package.json
└── README.md
```

---

## 🚀 Como Rodar o Projeto

### 1. Clone o projeto

```bash
git clone https://github.com/seu-usuario/mini-banco-central.git
cd mini-banco-central
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o ambiente

Crie um arquivo `.env` na raiz com o seguinte conteúdo:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=mini_banco_central
PORT=3000
```

### 4. Suba o PostgreSQL com Docker

```bash
docker-compose up -d
```

### 5. Crie o banco de dados dentro do container

```bash
docker exec -it mini-banco-db bash
psql -U postgres
CREATE DATABASE mini_banco_central;
\q
exit
```

### 6. Rode as migrations com Knex

```bash
npx knex migrate:latest --knexfile knexfile.js
```

### 7. Inicie o servidor

```bash
npm start
```

Você verá:  
`✅ API running on port 3000`

---

## 📬 Testando os Endpoints

### 🔹 Usando arquivos .http no VSCode (REST Client)

1. Instale a extensão **REST Client**
2. Abra a pasta `requests/`
3. Abra qualquer arquivo `.http`
4. Clique em "Send Request" acima da requisição

### 🔹 Usando cURL

```bash
curl -X POST http://localhost:3000/instituicoes -H "Content-Type: application/json" -d "{"name": "Banco do Brasil"}"
```

---

## 🧠 Funcionalidades

- Criar instituições financeiras
- Criar contas bancárias para usuários
- Registrar transações (crédito e débito)
- Obter saldo total ou por instituição
- Visualizar extrato geral ou por banco

---

## 📌 Endpoints

| Método | Endpoint                                 | Descrição                             |
|--------|------------------------------------------|----------------------------------------|
| POST   | `/instituicoes`                          | Criar nova instituição                 |
| POST   | `/usuarios`                              | Criar novo usuário                     |
| POST   | `/usuarios/:id/contas`                   | Criar conta para o usuário             |
| POST   | `/usuarios/:id/transacoes`               | Adicionar transação                    |
| GET    | `/usuarios/:id/saldo`                    | Ver saldo total                        |
| GET    | `/usuarios/:id/saldo?instituicao=Itau`   | Ver saldo por instituição              |
| GET    | `/usuarios/:id/extrato`                  | Ver extrato completo                   |
| GET    | `/usuarios/:id/extrato?instituicao=BB`   | Ver extrato filtrado por instituição   |

---

## ✨ Boas Práticas Adotadas

- Separação de responsabilidades por camada
- Uso de padrão DDD + Clean Architecture
- Nomeação clara e em inglês
- Versionamento de banco com migrations
- Testes com REST Client

---

Obrigada por ler! 😊
