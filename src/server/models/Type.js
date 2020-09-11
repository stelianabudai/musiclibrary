
const mongoose = require('mongoose')


const Schema = mongoose.Schema
const TypeSchema = new Schema({
    name: {type:'String'}, 
    desc: {type: 'String'}
  
})

const Type = mongoose.model('Type', TypeSchema, 'Type' )

module.exports = Type