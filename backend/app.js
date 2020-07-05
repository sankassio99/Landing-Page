const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const ClientData = require("./databases/ClientData.js");
const cors = require("cors");
const trasporter = require("./services/sendEmail")

app.use(express.json());


app.use(cors());
// app.use((req, res,next )=>{
//     app.use(cors());
//     console.log("Acessou!");
//     next();
// });

app.get("/getData", (req, res) =>{
    ClientData.findAll().then(function(clientData)//findAll() pega todas as rows da tabela 
    {
        const data = JSON.stringify(clientData,null , 2) ;
        res.send(data);
    });
})

app.post("/msg", (req, res) => {
    const {name, email, whatsapp} = req.body ;

    function sendEmail(){
        trasporter.sendMail({
            from: "Kássio San <kassiocemporcentosaopaulo@gmail.com>" ,
            to: email,
            subject: "Seu e-book Grátis de inglês",
            html: "Olá "+name+". Segue um link para voce baixar seu e-Book de inglês para voce começar a praticar gratuitamente<br><a href='http://www.mairovergara.com/ebook/gen'>Clique aqui</a>" 
        }).then(message => {
            console.log(message);
        }).catch( err => {
            console.log(err);
        })
    }
    
    ClientData.create({
        nome: name,
        email: email,
        whatsapp: whatsapp
    }).then(() => {
        // sendEmail();
        res.json("Cadastro concluído com sucesso!");
        console.log("Dados gravados!");
        
    }).catch((erro) => {
        res.send("Erro ao gravar!");
    })
    
})

app.listen("8081", () => {
    console.log("Servidor rodando na porta 8081");
})