const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => { //res pra fazer o retorno 
    res.send('App online!')
})

app.get('/cursos', (req, res) => {
    res.send('Lista de cursos!')
})

app.post('/cursos', (req, res) => {
    const dadosCurso = req.body
    console.log(dadosCurso)
    res.send('Curso adicionado com sucesso!')

})

app.get('/estudantes', (req, res) => {
    res.send('Lista de Estudantes!')
})

app.listen(3000,  ()  => {
    console.log('App online!')
})
