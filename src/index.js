const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Hello world! Errado!');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Endpoint de teste' });
});

app.get('/api/test-2', (req, res) => {
  res.send({ message: 'Branch master endpoint teste 2'});
});

app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`);
});

console.log("Alteração feita na branch feature/conflito");
console.log("Alteração feita na branch develop");
console.log("Erro corrigido na produção!");
console.log("Teste CI");
console.log("Teste CI agora com o yml na branch correta");
console.log("Funcionalidade para versionamento automático,com nova correção de token");


module.exports = app;