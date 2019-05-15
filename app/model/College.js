const mongoose = require('mongoose')

const Schema = mongoose.Schema
const collegeSchema = new Schema({
    name:{
        type:String,
        required: true,
        unique: true
    },
    address: {
        line1: {
            type: String,
            required: true,
        },
        line2: {
            type: String,
        },
        state: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        pincode: {
            type: Number,
            required: true
        }
    },
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    departments: [ 
        {  
            name:{
                type:String, 
                required: true
            },
            admins: [{
                type: Schema.Types.ObjectId, 
                ref: 'User', 
                required: true
            }],
            moderators: [{
                type: Schema.Types.ObjectId, 
                ref: 'User', 
                required: true
            }]
        }
    ],
    createdBy: {
        type: Schema.Types.ObjectId,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        required: true
    },
    disabledOn: {
        type: Date
    }
})

const College = mongoose.model('College', collegeSchema)

module.exports = {
    College
}