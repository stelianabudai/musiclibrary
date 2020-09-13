import mongoose from 'mongoose'

const Schema = mongoose.Schema
const SongSchema = new Schema({
    typeId: {type:'String'}, 
    name: {type:'String'}, 
    desc: {type: 'String'}  
})

const Song = mongoose.model('Song', SongSchema, 'Song' )

export default Song