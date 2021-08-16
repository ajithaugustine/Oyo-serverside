const express = require ('express')
const createError = require('http-errors')
const connectDB = require ('./Mongodb')
const cors = require('cors')
require('dotenv').config()

const app = express()
const hotelRouter = require('./Routes/HotelRoute')

connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/ok',hotelRouter)
app.use('/',(req,res)=>{
    res.send(' it is working dude...')
})
app.use('*',async(req,res,next)=>{
  next(createError.NotFound('kannan illa'))
})


// Error handler
app.use((err,req,res,next)=>{
    res.status (err.status || 500)
    res.send({
        error:{
            status:err.status||500,
            message:err.message
        }
    })
})





const port = process.env.PORT || 3002
app.listen(port,()=>console.log(`port is running on ${port} ....`))