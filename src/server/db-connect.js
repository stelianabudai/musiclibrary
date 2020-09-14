
import mongoose from 'mongoose'
const config = require('config');
const dbConfig = config.get('dbConfig');

const connect = async () =>{
    const db = await  mongoose.connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`, {useNewUrlParser: true})
    console.log('connected')
    return db
}

connect()