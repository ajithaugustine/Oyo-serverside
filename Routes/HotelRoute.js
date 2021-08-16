const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const Hotel = require ('../Models/Hotelmodel')


router.get("/",async(req,res,next)=>{ 
    try {
        const hotels =await Hotel.find()
        res.send(hotels)
    } catch (error) {
       next(error)
    }
    })

router.get("/search",async(req,res,next)=>{ 
  const q = req.query
try {
    const hotel =await Hotel.find(q)
    if(!hotel) throw createError.NotFound('not found')
    res.send(hotel)
} catch (error) {
   next(error)
}
})




router.get('/:id',async(req,res,next)=>{
    const id = req.params.id
    try {
        const hotel = await Hotel.findById(id)
        if(!hotel) throw createError.NotAcceptable()
        res.send(hotel)
        
    } catch (error) {
        next(error)
    }
})
router.delete('/:id',async(req,res,next)=>{
    const id = req.params.id
    try {
        await Hotel.findByIdAndDelete(id)
        res.send('deleted')
          
    } catch (error) {
        next(error)
    }
})

router.post('/addhotel',async(req,res,next)=>{
    try {
        const isexists = await Hotel.findOne({name:req.body.name})
        if(isexists)throw createError.Conflict('name already taken')
        const hotel =await Hotel.create(req.body)
        res.send(hotel)

    } catch (error) {
        next(error)
    }
})


router.put('/edithotel/:id',async(req,res,next)=>{
    const id = req.params.id
    try {
     await Hotel.findByIdAndUpdate(id,{$set : req.body})
     res.send('updated')
        
    } catch (error) {
        next(error)
    }
})

module.exports = router
