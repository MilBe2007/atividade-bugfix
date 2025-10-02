const fs = require('fs');

fs.readFile('arquivo_errado.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Conteúdo do arquivo:', data);
});