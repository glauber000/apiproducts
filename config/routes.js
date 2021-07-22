const express = require('express')
const routes = express.Router()

let db=[{nome : 'abc', idade : '10'},
{nome : 'abc1', idade : '12'},
{nome : 'abc2', idade : '13'}]

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



module.exports = routes