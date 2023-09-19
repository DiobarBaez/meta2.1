const http = require('http');
const url = require('url');

  const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url.startsWith('/mensaje')) {
      const query = url.parse(req.url, true).query;
      const mensajeCliente = query.mensaje || 'Mensaje vacío'; // Obtén el mensaje del cliente (o un mensaje predeterminado)
      
      // Agrega un mensaje adicional
      const mensajeServidor = `Mensaje recibido: ${mensajeCliente}`;

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(mensajeServidor);
      console.log(`Servidor Node.js: ${mensajeServidor}`);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Página no encontrada');
    }
  });

  const port = 3001;
  server.listen(port, () => {
    console.log(`Servidor Node.js escuchando en el puerto ${port}`);
  });