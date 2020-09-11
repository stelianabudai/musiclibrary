
const mongoose = require('mongoose')

const connect = async () =>{
    const db = await  mongoose.connect("mongodb://localhost:27017/music-db", {useNewUrlParser: true})
    console.log('connected')
    return db
}

connect()