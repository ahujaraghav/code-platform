const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema
const roles = require('../config/roles')

//for custom validation 
const userSchema = new Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    // username: {
    //     type: String,
    //     required:true,
    //     unique: true,
    //     minlength:5
    // },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value){
                return validator.isEmail(value)
            },
            message: function(){
                return 'Invalid Email'
            }
        }

    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 128
    },
    socialLinks:[
        {
            type:String
        }
    ],
    role:{ type:String, default: roles.STUDENT},
    college: {
        type: Schema.Types.ObjectId,
        ref: 'College'
    },
    tokens: [
        {
            token: {
                type:String
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    accountActive: {
        type: Boolean,
        default: false
    }
})

userSchema.pre('save',function(next){
    const user = this
    if(user.isNew){
        bcryptjs.genSalt(10)
            .then(function(salt){
                bcryptjs.hash(user.password,salt)
                    .then(function(encryptedPassword){
                        user.password = encryptedPassword
                        next()
                    })
            })
    }else{
        next()
    }
})

//own instance method
userSchema.methods.generateToken = function(){
    const user = this
    const date = Number(new Date())

    const tokenData = {
        _id: user._id,
        email: user.email,
        // 7 days token expiry
        expiry: date + (7 * 86400000),
        createdAt: date
    }
    console.log(tokenData)
    const token = jwt.sign(tokenData,'jwt@123')
    user.tokens.push({
        token 
    })
    return user.save()
        .then(function(user){
            return Promise.resolve(token)
        })
        .catch(function(err){
            return Promise.reject(err)
        })
}
//own static method
userSchema.statics.findByCredentials = function(email,password){
    const User = this
    return User.findOne({email})
                .then(function(user){
                    if(!user){
                        return Promise.reject('invalid email / password')
                    }
                    return bcryptjs.compare(password, user.password)
                        .then(function(result){
                            if(result){
                                return Promise.resolve(user)
                            }else{
                                return Promise.reject('invalid email / password')
                            }
                        })
                })
                .catch(function(err){
                    return Promise.reject(err)
                })
}
// userSchema.statics.findByCredentialsAndCompare = function(id,oldPassword,newPassword){
//     const User = this
//     return User.findById(id)
//                 .then(function(user){
//                     console.log(oldPassword, user.password)
//                     return bcryptjs.compare(oldPassword, user.password)
//                         .then(function(result){
//                             if(result){
//                                 user.isNew=true
//                                 User.findByIdAndUpdate(user._id,{$set:{password:newPassword}},{new: true, runValidators:true})
//                                     .then(function(user){
//                                         console.log(user)
//                                         res.send(user)
//                                     })
//                                     .catch(function(err){
//                                         res.send({err:"password update err"}) 
//                                     })
//                                     return Promise.resolve(user)
//                             }
//                             else{
//                                 return Promise.reject({err:"password doesnot match"})
//                             }
//                         })
//                         .catch(function(err){
//                             return Promise.resolve(err)
//                         })
//                     })
//                 .catch(function(err){
//                     return Promise.reject({err:"user not found"})
//                 })
// }

userSchema.statics.findByToken = function(token){
    const User = this
    let tokenData
    try{
        tokenData = jwt.verify(token,'jwt@123')
    }catch(err){
        return Promise.reject(err)
    }

    return User.findOne({
        _id: tokenData._id,
        'tokens.token':token
    })
}
const User = mongoose.model('User',userSchema)

module.exports ={
    User
}