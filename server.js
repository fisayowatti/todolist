const express = require('express')
const next = require('next')
global.SERVER_APP_ROOT = __dirname;
const dataStore = require(SERVER_APP_ROOT + '/libs/dataStore');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
  const server = express()

  server.get('/api/todolist', (req, res) => {
    // return app.render(req, res, '/a', req.query)
    res.json(dataStore.todolist())
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})