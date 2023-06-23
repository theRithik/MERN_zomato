const express = require('express')
const Routing = express.Router()
const bodyparser = require('body-parser')
const {MongoClient,ServerApiVersion} = require('mongodb')
const url ="mongodb+srv://testing:test123@cluster1.vnynuru.mongodb.net/?retryWrites=true&w=majority"


Routing.use(bodyparser.urlencoded({extended:true}))
Routing.use(bodyparser.json())

const client = new MongoClient(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

Routing.get('/locations',(req,res)=>{
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(err)
        }
        else{
            const db = dbres.db('Zomato')
            db.collection('location').find({}).toArray((err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)

                }
            })
        }
    })
})

Routing.get('/restaurants',(req,res)=>{
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(err)
        }
        else{
            const db = dbres.db('Zomato')
            const id=JSON.parse(req.query.state_id)
            
            db.collection('restaurants').find({state_id:id}).toArray((err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)
                }
            })
        }
        
    })
})


Routing.get('/quickSearch',(req,res)=>{
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(dberr)
        }
        else{
            const db = dbres.db('Zomato')
            db.collection('quickSearch').find().toArray((err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)
                }
            })
        }
    })
})


Routing.get('/meals',(req,res)=>{
    
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(err)
        }
        else{
            const db = dbres.db('Zomato')
           const id=JSON.parse(req.query.mealtype_id)
            db.collection('restaurants').find({'mealTypes.mealtype_id':id}).toArray((err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)
                }
            })
        }
        
    })
})


Routing.get('/cuisines',(req,res)=>{
    
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(err)
        }
        else{
            const db = dbres.db('Zomato')
           const id=JSON.parse(req.query.cuisine_id)
            db.collection('restaurants').find({'cuisines.cuisine_id':id}).toArray((err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)
                }
            })
        }
        
    })
})

Routing.get('/deatils/:id',(req,res)=>{
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(dberr)
        }
        else{
            const db = dbres.db('Zomato')
            const id =JSON.parse(req.params.id)
            db.collection('restaurants').find({'restaurant_id':id}).toArray((err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)
                }
            })
        }
    })
})

Routing.get('/menu/:id',(req,res)=>{
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(dberr)
        }
        else{
            const db = dbres.db('Zomato')
            const id=JSON.parse(req.params.id)
            db.collection('menu').find({restaurant_id:id}).toArray((err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)

                }

            })

        }
    })
})

Routing.post('/menuItems',(req,res)=>{
    client.connect((dberr,dbres)=>{
        if(dberr){
            console.log(dberr)
        }
        else{
            const db= dbres.db('Zomato')
            const id = req.body
            db.collection('menu').find({menu_id:{$in:id}}).toArray((err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)
                    
                }
            })
        }
    })
})

Routing.post('/orderDetails',(req,res)=>{
    client.connect((dberr,dbres)=>{
        if(dberr){console.log(dberr)}
        else{
            const db= dbres.db('Zomato')
            const data = req.body
            db.collection('orderDetails').insertOne({data}),((err,result)=>{
                if(err){
                    res.send(result)
                }
                else{
                    res.send(result)
                }

            })
        }
    })
})

module.exports = Routing