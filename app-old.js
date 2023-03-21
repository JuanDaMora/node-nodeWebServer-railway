const http= require('http');

http.createServer((req,res)=>{
    // res.writeHead(200,{'Content-Type':'text/plain'})
    // const persona={
    //     id:1,
    //     nombre:'Juan'

    // }

    res.write('Hola Mundo');
    res.end();
    

})
.listen(8080);
console.log('Escuchando en el puerto 8080')