require('dotenv').config();
const express = require('express');
const app = express();

const CreateUser = require('./src/domain/usecases/CreateUser');
const CreateInstitution = require('./src/domain/usecases/CreateInstitution');
const CreateAccount = require('./src/domain/usecases/CreateAccount');
const AddTransaction = require('./src/domain/usecases/AddTransaction');
const GetUserBalance = require('./src/domain/usecases/GetUserBalance');
const GetUserStatement = require('./src/domain/usecases/GetUserStatement');

const UserRepository = require('./src/infra/database/repositories/UserRepository');
const InstitutionRepository = require('./src/infra/database/repositories/InstitutionRepository');
const AccountRepository = require('./src/infra/database/repositories/AccountRepository');
const TransactionRepository = require('./src/infra/database/repositories/TransactionRepository');

const UserController = require('./src/http/controllers/UserController');
const InstitutionController = require('./src/http/controllers/InstitutionController');
const AccountController = require('./src/http/controllers/AccountController');
const TransactionController = require('./src/http/controllers/TransactionController');
const StatementController = require('./src/http/controllers/StatementController');

const routes = require('./src/http/routes');

app.use(express.json());

const userRepository = new UserRepository();
const institutionRepository = new InstitutionRepository();
const accountRepository = new AccountRepository();
const transactionRepository = new TransactionRepository();

const createUser = new CreateUser(userRepository);
const createInstitution = new CreateInstitution(institutionRepository);
const createAccount = new CreateAccount(accountRepository);
const addTransaction = new AddTransaction(transactionRepository, accountRepository);
const getUserBalance = new GetUserBalance(accountRepository);
const getUserStatement = new GetUserStatement(transactionRepository);

const userController = new UserController(createUser);
const institutionController = new InstitutionController(createInstitution);
const accountController = new AccountController(createAccount);
const transactionController = new TransactionController(addTransaction);
const statementController = new StatementController(getUserBalance, getUserStatement);

app.use(
  routes({
    userController,
    institutionController,
    accountController,
    transactionController,
    statementController,
  })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});