const express = require('express');
const cors = require('cors');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const port = 3000;

// CORS totalmente liberado
app.use(cors({
  origin: '*'
}));

app.get('/unidades', (req, res) => {
    const results = [];

    fs.createReadStream('unidades-basica-saude.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        res.json(results);
      });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
