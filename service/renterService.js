const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/'
const dbName = 'GrillAnyWhere-db'

//renter backend
const fetchAll = (callback)=>{
    MongoClient.connect(url, (err, client) => {
        client.db(dbName).collection('renter').find({}).toArray((err,data)=>{
                callback(data)
            })
        client.close()
    })
}

const addUser = (user,callback)=>{
    MongoClient.connect(url,(err,client)=>{
        const collection = client.db(dbName).collection('renter')
        collection.insert(user)
        callback(err)
        client.close()
    })
}
const getLastId = (callback)=>{
    MongoClient.connect(url,(err,client)=>{
        client.db(dbName).collection('renter').find({}).sort({_id:-1}).limit(1).toArray((err,data)=>{
            if(data.length>0){
                callback(data[0]._id,err)
            }else{
                callback(0,err)
            }
        })
    })
}




module.exports={
    fetchAll,
    addUser,
    getLastId
}