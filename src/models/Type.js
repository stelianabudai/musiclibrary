const mongoose = require('mongoose');

 
const typeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    desc: String,
    songs: [
        {
            name: String,
            description: String
        }
    ]
});
 
const Type = mongoose.model('type', typeSchema);
 
module.exports = {Type};