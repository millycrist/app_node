// Importa o módulo Express, que facilita a criação de servidores HTTP no Node.js
const express = require('express');

// Cria uma aplicação Express
const app = express();

// Adiciona um middleware que permite interpretar o corpo das requisições no formato JSON
app.use(express.json());

// Define uma rota GET para a raiz ('/'), que retorna a mensagem 'App online!'
app.get('/', (req, res) => { // 'req' é a requisição do cliente e 'res' é a resposta que o servidor enviará
    res.send('App online!'); // Envia a mensagem 'App online!' como resposta
});

// Define uma rota GET para '/cursos', que retorna uma lista de cursos
app.get('/cursos', (req, res) => {
    res.send('Lista de cursos!'); // Envia a mensagem 'Lista de cursos!' como resposta
});

// Define uma rota POST para '/cursos', que permite adicionar um novo curso
app.post('/cursos', (req, res) => {
    const dadosCurso = req.body; // Pega os dados do curso enviados no corpo da requisição (formato JSON)
    console.log(dadosCurso); // Exibe os dados do curso no console
    res.send('Curso adicionado com sucesso!'); // Envia a mensagem confirmando a adição do curso
});

// Define uma rota GET para '/estudantes', que retorna uma lista de estudantes
app.get('/estudantes', (req, res) => {
    res.send('Lista de Estudantes!'); // Envia a mensagem 'Lista de Estudantes!' como resposta
});

// Faz o servidor escutar na porta 3000 e exibe a mensagem no console quando estiver ativo
app.listen(3000, () => {
    console.log('App online!'); // Exibe 'App online!' no console quando o servidor iniciar com sucesso
});
