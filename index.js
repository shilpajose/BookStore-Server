const jsonServer = require('json-server')
const server = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT

server.use(middleware)
server.use(router)

// run 
server.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})

