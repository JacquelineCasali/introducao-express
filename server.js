const { response } = require("express")
const { request } = require("express")
var express=require("express")
var app = express()
var port= 3000

//criando uma rota de servidor
//*http://localhost:3000/
app.get("/",(request,response)=>{
    response.send("Batatinha 123")
})
//*http://localhost:3000/Ola
app.get("/Ola",(request,response)=>{
    response.send("Olá Mundo!")
})
app.post("/frutas",(request,response)=>{
    response.send("Frutas")
})
//localhost
//127.0.0.1
app.listen(port,()=>{
    console.log("Nosso servidor está rodando na porta " + port)
})