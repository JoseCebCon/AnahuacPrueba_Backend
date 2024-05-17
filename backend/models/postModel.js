const {Schema, model} = require('mongoose')

const postSchema = Schema({
    title: {type: String, required: true},
    category: {type: String, enum: {values: ["Beach", "Landscapes", "Snow", "Monuments", "Art", "Village", "Others", "Friends"], message: "{VALUE} is not supported in this path."}},
    description: {type: String, required: true},
    thumbnail: {type: String, required: true},
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true})

module.exports = model('Post', postSchema)