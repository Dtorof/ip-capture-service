const express = require('express');
const cors = require('cors');
const app = express();

// Usar el puerto proporcionado por Render o 3000 por defecto
const port = process.env.PORT || 3000;

// Habilitar CORS para todas las solicitudes
app.use(cors());

// Endpoint para capturar la IP pública del cliente
app.get('/get-ip', (req, res) => {
  const clientIp = (req.headers['x-forwarded-for'] || req.socket.remoteAddress).split(',')[0].trim();
  console.log(`IP del cliente: ${clientIp}`);
  res.json({ ip: clientIp });
});

// Iniciar el servidor

app.listen(port, () => {
  console.log(`Servicio de captura de IP pública corriendo en http://localhost:${port}`);
})