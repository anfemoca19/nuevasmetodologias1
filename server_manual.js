const http = require('http');
const tx = 'Soy un server desde ';
const puerto = 8989;
const cabecera= {
    'content-Type':'application/json',
}


let carro = {
    placa : "HCN54D",
    modelo : "2014",
    marca : "Mercedez",
    puertas : 4
}

http
    .createServer((req, res)=>{
        res.writeHead(200, cabecera);
       
        //res.write(`${tx} ${req.url}`);
        //res.write(`carro: ${carro.placa}` );
        
        /*if(req.url == "/"){
            res.write("hola");
        }else if(req.url=="/solicitud"){
            res.write("Holal, soy una peticuion de solicitud ");
        }else if(req.url=="/carro"){
            res.write("Holal, soy una peticuion de carro");
            res.write(JSON.stringify(carro));
        }else {
            res.write("Que estas haciendo!!!");
          
        }*/

        res.write(JSON.stringify(carro));
        res.end();
    }).listen(puerto);

console.log("Server andando");