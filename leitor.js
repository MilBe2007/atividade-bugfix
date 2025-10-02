const fs = require('fs');

fs.readFile('arquivo_correto.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Conteúdo do arquivo:', data);
});