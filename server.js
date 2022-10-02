const express = require('express');
const app = express();

// apresenta um formulário para preenchimento
app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button> Enviar </button>
        </form>
        hello world!`);
});

// informa que recebeu o dado informado
app.post('/', (req, res) => {
    res.send('Registrado');
})

// configuração do corpo de uma 2 pagina
app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente')
});

// cria o caminho para execução dos itens a cima
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Server esta em execução !')
});