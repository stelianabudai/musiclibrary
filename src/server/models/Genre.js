const mongoose = require('mongoose')

const Schema = mongoose.Schema
const GenreSchema = new Schema({
    name: {type:'String'}, 
    desc: {type: 'String'}  
})

const Genre = mongoose.model('Genre', GenreSchema, 'Genre' )

module.exports = Genre