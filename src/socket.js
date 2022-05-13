const { Server } = require("socket.io");

function setupWebSocket(server) {
    const io = new Server(server)
    io.on('connection', function(socket) {
        socket.send("Hello from server!")
        console.log(`Socket ${socket.id} connected`)
    })
}

module.exports = { setupWebSocket }
