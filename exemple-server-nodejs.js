// content of index.js
const http = require('http')
const port = 3000

const dataSales = [
    {
      "companyName": "Adam’s Greenworks",
      "items": 14,
      "action": "Package Items"
    },
    {
      "companyName": "Davie's Burgers",
      "items": 2,
      "action": "Send Invoice"
    },
    {
      "companyName": "Baker's Bike Shop",
      "items": 3,
      "action": "Send Invoice"
    },
    {
      "companyName": "Miss Sally's Southern",
      "items": 4,
      "action": "Ship"
    },
    {
      "companyName": "Summit Resort Rentals",
      "items": 4,
      "action": "Ship"
    },
    {
      "companyName": "Strike Fitness",
      "items": 1,
      "action": "Enter Order"
    }
  ];

const requestHandler = (request, response) => {
  console.log(request.url)
  if(request.url == '/sales') {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.writeHead(200, {"Content-Type": "application/json"});
    // JSON.stringify => transforme l'objet en texte (serializer)
    response.end(JSON.stringify(dataSales));
  }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})