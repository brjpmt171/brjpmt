const express = require('express');
const app = express();
const parser = require('body-parser');
const renterService = require('./service/renterService');
const ownerService = require('./service/ownerService');
const PORT=5200
// enable json parser for body
app.use(parser.json());


// enable CORS 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//server status
app.get('/status',(req,res) =>{
    res.send('Welcome to our first Node Application')
})

// fetch all users
app.get('/users',(req,res) => {
    res.setHeader('Content-Type','application/json')
    renterService.fetchAll((data)=>{
        res.end(JSON.stringify(data))
    })
});

// add a new Renter
app.post('/user/add',(req,res)=>{
    let userObj = req.body
    res.setHeader('Content-Type','application/json')
    renterService.addUser(userObj,(err)=>{
        if(err) res.statusCode(400).end('User Couldnt be Added,please try again later')
        else res.json('User Added Successfully')
    })
})
//max id for renter
app.get('/user/find/id/max',(rq,rs)=>{
    renterService.getLastId((id,err)=>{
        if(err) rs.statusCode(400).json('Unable to process your request,please try again later')
        else{
                rs.json({maxId:id})
        }
    })
})

// fetch all owners
app.get('/owners',(req,res) => {
    res.setHeader('Content-Type','application/json')
    renterService.fetchAll((data)=>{
        res.end(JSON.stringify(data))
    })
});
// add a new Owner
app.post('/owner/add',(req,res)=>{
    let userObj = req.body
    res.setHeader('Content-Type','application/json')
    ownerService.addOwner(userObj,(err)=>{
        if(err) res.statusCode(400).end('User Couldnt be Added,please try again later')
        else res.json('User Added Successfully')
    })
})
//max id for owner
app.get('/owner/find/id/max',(rq,rs)=>{
    ownerService.getLastOwnerId((id,err)=>{
        if(err) rs.statusCode(400).json('Unable to process your request,please try again later')
        else{
                rs.json({maxId:id})
        }
    })
})

// start server
app.listen(PORT,()=>{
    console.log(`Server Started  at ${PORT}`)
})