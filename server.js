const express = require('express')
const initDB = require('./config/db')
const app = express()

const port = 3001


const itemsRuter = require('./app/routes/items')
const userRouter = require('./app/routes/user')

app.use(userRouter)
app.use(itemsRuter)

app.listen(port, ()=>{
    console.log('La aplicacion esta en linea!!');
})

initDB()
