const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: 'user',
        required: true
    },
    tags: {
        type: [String],

    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: [String],

    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    deleteAt: {
        type: Date,
        default: null
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    publishedAt: {
        type: Date,
        default: null
    },
    like:{
        type:Number,
        default:0
    }
}, {
    timestamps: true
})
module.exports = mongoose.model("blog", blogSchema)