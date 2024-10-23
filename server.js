const express = require('express');
const app = express();
const port = 3000;

// Endpoint para capturar la IP pública del cliente
app.get('/get-ip', (req, res) => {
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(`IP del cliente: ${clientIp}`);
  res.json({ ip: clientIp });
});

// Iniciar el servidor, escuchando en todas las interfaces
app.listen(port, '0.0.0.0', () => {
  console.log(`Servicio de captura de IP pública corriendo en http://localhost:${port}`);
});
