const express = require('express');

const app = express(); 

app.get('/', (request, response) => {
  return response.json({
    evento: "Evento Omnistack",
    aluno: "Beni"
  })
})

app.listen(3333);