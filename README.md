# Readme del Servidor HTTP en Node.js

Esta aplicación Node.js crea un servidor HTTP que responde a las solicitudes del cliente con HTML que contiene información sobre la solicitud. El servidor maneja tanto las solicitudes GET como las POST y muestra los encabezados y los datos relevantes de la solicitud.

## Empezar

1. Clona este repositorio en tu máquina local.

2. Asegúrate de tener Node.js instalado en tu sistema. 

3. Abre una terminal y navega hasta el directorio del repositorio clonado.

4. Ejecuta el servidor utilizando el siguiente comando:

   ```bash
   node server2.js

## Uso

### Solicitud GET 

Puedes acceder al servidor utilizando un navegador web o una herramienta como cURL. Si abres el navegador Firefox y visitas la siguiente URL:
          
          http://localhost:3000/datos?campo1=12&campo2=34

El navegador mostrará una respuesta similar a la siguiente:

          Request Headers:
          {
            "host": "localhost:3000",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0",
            "äccept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "accept-languaje": "es-MX, es;q=0.8,en=US;q=0.5,en;q=0.3",
            "accept-encoding": "gzip,deflate",
            "dnt": "1",
            "connection": "keep-alive",
            "cookie": "Webstorz-b23919f4=b44daf52-f984-482d-9988-8a735cb09d87",
            "upgrade-insecure-request": "1"
          }
          
          Método: GET
          
          URL: /datos?campo1=12&campo2=34


### Solicitud POST

Para la solicitud POST, puedes utilizar el formulario HTML en http://localhost:3000/post.html para enviar datos al servidor. El servidor responderá con información sobre la solicitud POST. Teclea los datos del campo 1 y campo 2 y presiona el boton.

El navegador mostrará una respuesta similar a la siguiente:

          Request Headers:
          {
            "host": "localhost:3000",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0",
            "äccept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "accept-languaje": "es-MX, es;q=0.8,en=US;q=0.5,en;q=0.3",
            "accept-encoding": "gzip,deflate",
            "content-type": "aplication/x-www-form-urlencoded",
            "content-length": "21",
            "dnt": "1",
            "connection": "keep-alive",
            "cookie": "Webstorz-b23919f4=b44daf52-f984-482d-9988-8a735cb09d87",
            "upgrade-insecure-request": "1"
          }
          
          Método: POST
          
          Datos enviados: campo1=Dato1%2C+Dato2
