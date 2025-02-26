const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const connect = require("./config/db");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Permite requisições do React
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')))
// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rota para renderizar a página de cadastro
app.get('/cadastro', (req, res) => {
    res.render('cadastro'); // Arquivo views/cadastro.ejs
});

// Rota para renderizar a página de login
app.get('/login', (req, res) => {
    res.render('login'); // Arquivo views/login.ejs
});

app.get("/app", async (req, res) => {
    const db = await connect();
    const recipes = await db.collection("receitas").find().toArray(); // Busca receitas no MongoDB
    console.log(recipes);
    res.render('app', {recipes});
});


// API para React acessar (exemplo)
app.get('/api/mensagem', (req, res) => {
    res.json({ mensagem: "Bem-vindo ao backend!" });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
