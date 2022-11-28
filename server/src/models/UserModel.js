const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String, required:true},
    password: { type: String ,required:true},
    
}, { versionKey: false })


// UserSchema.pre("save", async(next) => {
//     if (!this.isModified("password")) {
//         next()
//     }

//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt)
//     next()
    
// })
const UserModel = mongoose.model('Users', UserSchema)

module.exports=UserModel