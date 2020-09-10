var mongoose = require('mongoose');
 
var tupeSchema = mongoose.Schema({
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
 
const Type = mongoose.model('Music', tupeSchema);
 
module.exports = Type;