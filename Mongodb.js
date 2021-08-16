const mongoose = require ('mongoose')

const connectDB = async()=>{
    try {
      await mongoose.connect('mongodb+srv://ajith:ajith01@cluster0.anu4p.mongodb.net/oyo?retryWrites=true&w=majority',
      { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true,useFindAndModify:false })
      console.log('connected to mongodb')
      
  } catch (error) {
      console.log('error')
  }
}



module.exports = connectDB