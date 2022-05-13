const express = require('express')
const http = require('http')
const { join } = require('path')
const { setupWebSocket } = require('./socket')

function home(req, res) {
    res.json({
        message: 'Hello World!'
    })
}

function configureExpress(app) {
    app.use(express.static(join(__dirname, '..', 'public')))
}

function main() {
    try {
        const app = express()
        configureExpress(app)
        app.get('/api/', home)
        const server = http.createServer(app)
        setupWebSocket(server)
        const port = +process.env.PORT || 3000
        server.listen(port, function() {
            console.log(`Listen at http://localhost:${port}/`)
        })
    } catch (err) {
        console.error(err)
    }
}

main()
