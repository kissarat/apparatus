const express = require('express')
const http = require('http')

function home(req, res) {
    res.json({
        message: 'Hello World!'
    })
}

function main() {
    try {
        const app = express()
        app.get('/', home)
        const server = http.createServer(app)
        const port = +process.env.PORT || 3000
        server.listen(port, function() {
            console.log(`Listen at http://localhost:${port}/`)
        })

    } catch (err) {
        console.error(err)
    }
}

main()
