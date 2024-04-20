import Express from express
import connect from "./database/conecction"
import { Server } from "socket.io"
import {createServer} from 'node:http'
const app  = Express()
const server = createServer(app)
const io = new Server(server)

io.on('connection', ()=>{

})
const port = 3900

connect()

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

