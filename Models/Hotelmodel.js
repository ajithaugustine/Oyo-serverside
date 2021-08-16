const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const RoomSchema = new Schema({
    Roomtype:{
        type:String,
        required:true   
    },
    Price:{
        type:Number,
        required:true
    },
   
    Availability:{
        type:String,
        required:true
    }

})

const HotelSchema = new Schema({
   name:{
       type:String,
       required:true,
    
   } ,
   country:{
       type:String,
       required:true
   },
   imgUrl:{
       type:String,
      
   },
   address:{
       type:String,
       required:true
   },
   roomtype:{
        type:String,
        required:true   
    },
    price:{
        type:Number,
        required:true
    },
   
    from:{
        type:String,
        required:true
    },
   
    to:{
        type:String,
        required:true
    }
})

const Hotel = mongoose.model("Hotel",HotelSchema)
module.exports = Hotel
