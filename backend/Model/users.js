let mongoose = require('mongoose')

let data = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
   date:{
    type:String
   },
    phoneNo: {
        type: Number,
        required: true
    },
   
    gender:{
        type:String,
        required: true
    },
    course:{
        type:String,
        required: true
    },
    Designation:{
        type:String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Users', data)










// let mongoose = require('mongoose')


// let data=mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true  
//     },
//     mobileNo:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
//     // Designation:{
//     //     type:String,
//     //     required:true
//     // },
//     // Gender:{
//     //     type:String,
//     //     required:true
//     // },
//     // course:{
//     //     type:String,
//     //     required:true
//     // }
// })
//   let userData= mongoose.model("Users",data)
//   module.exports=userData