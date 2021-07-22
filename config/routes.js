const express = require('express')
const routes = express.Router()

let db=[{'1':{nome : 'abc', idade : '10'}},
{'2':{nome : 'abc1', idade : '12'}},
{'3':{nome : 'abc2', idade : '13'}}]

routes.get('/',(req,res)=> {
    return res.json(db)
})

routes.post('/insert', (req,res) => {
    const body = req.body
    
    if(!body)
        return res.status(400).end
    db.push(body)
    return res.json(body)    
})

routes.delete('/:id',(req,res) =>{
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
            return item
    })

    db = newDB

    return res.send(newDB)
    
})


module.exports = routes