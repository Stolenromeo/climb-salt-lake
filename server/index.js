const express = require('express')
     ,bodyPar = require('body-parser')
     ,climbCtrl= require('./Controller/ClimbCtrl')

const app = express()
const port = 3030;

app.use(bodyPar.json())

app.get('/api/climbs',climbCtrl.read)
app.put('/api/climbs',climbCtrl.update)
app.post('/api/climbs',climbCtrl.create)
app.delete('/api/climbs',climbCtrl.delete)


app.listen(port, console.log(`Show me the money!!! on port: ${port}`))

