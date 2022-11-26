const jwt  = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

 

exports.SignUp = (req, res) => {
    let {name, email, password} = req.body
    UserModel.create({name:name, email:email,password:password}, (err,data) => {
        err ? res.status(400).json({
            status: "Registration Failed",
            data:err
        })
            : res.status(201).json({
                status: "Registrstion Successfull",
                data:data
            })
    })
}


exports.Login = (req, res) => {
    let {email, password} = req.body
    UserModel.findOne({ email: email, password: password }, (err, data) => {
        if (err) {
            res.status(400).json({
                status: "Login Failed",
                data: err
            })
        } else {
            if (data === null) {
                res.status(401).json({
                    status:"Please Check Your Email And Password"
                })
            } else {
                let Payload = {
                exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), data: data
            }
            let token = jwt.sign(Payload, "password123")
            res.status(200).json({
                status: "Login Successfull",
                token: token,
                data:data
            }) 
            }
           

        }
        // err ? res.status(400).json({
        //     status: "Login Failed",
        //     data:err
        // })
        //     : res.status(201).json({
        //         status: "Login Successfull",
        //         data:data
        //     })
    })
}


// if (data.length > 0) {
//     let Payload = {
//         exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), data: data
//     }
//     let token = jwt.sign(Payload, "password123")
//     res.status(200).json({
//         status: "Login Successfull",
//         token: token,
//         data:data
//     })
// } else {
//     res.status(401).json({
//         status:"Unauthorized"
//     })
// }
