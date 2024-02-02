import http from 'http'
const PORT = 3002

const routes = {
  "/": "Curso de NodeJS",
  "/python": JSON.stringify({
    "functions": [
      "list",
      "show",
      "delete"
    ]
  }),
  "/php": JSON.stringify({
    "functions": [
      {
        "list": true,
        "show": false
      }
    ]
  })
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" })
  res.end(routes[req.url])
})

server.listen(PORT, () => {
  console.log('Server is running on port 3001')
})