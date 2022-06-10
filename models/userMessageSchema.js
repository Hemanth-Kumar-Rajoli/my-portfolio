const mongoose = require('mongoose')

const userMessageSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"a messager must need a name"]
    },
    email:{
        type:String,
        required:[true,"a messager must need to provide a email"]
    },
    subject:{
        type:String,
        required:[true,"a message must need a subject"]
    },
    message:{
        type:String,
        required:[true,"a messager must need to provide the message"]
    }
})
userMessageSchema.index({email:1,message:1}, { unique: true });

const UserMessages = mongoose.model('userMessages',userMessageSchema);

module.exports = UserMessages