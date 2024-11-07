const http = require('http')
const port =8000

const server = http.createServer((req,res)=>{

    if(req.url==="/home"){
        res.end("This is the home page")

    }
    else if(req.url==="/about" && req.method==="GET")
   {
    res.end("This is the About page")
   }
   else{
    res.end("This is the not valid path")
   }

})

server.listen({port},()=>{
    console.log(`Backend Server is running at the port http://localhost:${port}`)
})

/* 
  Sample of creating Backend of the server : 
   
  1) firstly  run the command : npm init & npm i nodemon
  2) then create the server & set the  "dev": "nodemon index.js"
  3) then use thunder client for the api request in get or post like (http://localhost:8000/home)
   
*/
