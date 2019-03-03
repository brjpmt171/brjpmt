const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/'
const dbName = 'GrillAnyWhere-db'

//owner backend
const addOwner = (user,callback)=>{
    MongoClient.connect(url,(err,client)=>{
        const collection = client.db(dbName).collection('owner')
        collection.insert(user)
        callback(err)
        client.close()
    })
}
const getLastOwnerId = (callback)=>{
    MongoClient.connect(url,(err,client)=>{
        client.db(dbName).collection('owner').find({}).sort({_id:-1}).limit(1).toArray((err,data)=>{
            if(data.length>0){
                callback(data[0]._id,err)
            }else{
                callback(0,err)
            }
        })
    })
}

module.exports={
    addOwner,
    getLastOwnerId
}