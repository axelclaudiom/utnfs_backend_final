const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('API en construcción');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));