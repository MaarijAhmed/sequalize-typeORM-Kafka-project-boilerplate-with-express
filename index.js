const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');
const todo_model  = require("./src/models/todoModel/todo_model");
var bodyParser = require('body-parser')

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/addTodo', async(req,res) => {
    await todo_model.sync({}).then(async() => {
        await todo_model.create({
            user_id : req.body.uid,
            name : req.body.name
        }).then((response) => {
            res.send({
                res : response
            })
        })        
    }).catch((err) => {
        console.log(err)
    })
})

app.post('')


app.listen(port,() => {
    console.log('app on track')
})