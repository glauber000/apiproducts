const express = require('express')
const routes = express.Router()

let produtos=[{nome : 'Arroz', validade : '4', preco: 7},
{nome : 'Feijão', validade : '5', preco: 8},]

let clientes = [{nome:'Cicero Araújo', idade: 37, endereco:{ logradouro: 'Avenida Getúlio Vargas' , cidade: 'Feira de santana' , uf:'BA', numero: 1750, cep:'44075-425', bairro: 'Ponto Central'}},
{nome:'Amaro de Carvalho', idade: 55, endereco:{ logradouro: 'Avenida Tomé de Souza' , cidade: 'Feira de santana' , uf:'BA', numero: 200, cep:'44023-432', bairro: 'Rua Nova'}}]

routes.get('/produtos',(req,res)=> {
    return res.json(produtos)
})

routes.post('/addProd', (req,res) => {
    const body = req.body
    
    if(!body)
        return res.status(400).end
    produtos.push(body)
    return res.json(body)    
})

routes.get('/clientes',(req,res)=> {
    return res.json(clientes)
})

routes.post('/addClin', (req,res) => {
    const body = req.body
    
    if(!body)
        return res.status(400).end
    clientes.push(body)
    return res.json(body)    
})



module.exports = routes