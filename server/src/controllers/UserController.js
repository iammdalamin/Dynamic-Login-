const jwt  = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

const bcrypt = require("bcrypt")


exports.SignUp = async(req, res) => {
    let { name, email, password } = req.body

    const salt = await bcrypt.genSalt(10);
    const modifiedPassword = await bcrypt.hash(password, salt)
    try {
        const userExist = await UserModel.findOne({ email: email })
        if (userExist) {
            res.status(400).json({
                status: "This email is already existing",
               
            })
        } else {
            UserModel.create({name:name, email:email,password:modifiedPassword}, (err,data) => {
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
        
    } catch (err) {
        console.log(err)
    }
   
}


exports.Login = async(req, res) => {
    let { email, password } = req.body
  
        if (!email ) {
            res.status(400).json({
                        status:"Please enter Your Email"
                    })
        } else if (!password) {
            res.status(400).json({
                status:"Please enter Your Password"
            })
        } else {
            UserModel.findOne({ email: email }, async (err, data) => {
                try {
                    if(!data){
                        res.status(400).json({
                            status: "Enter your valid email",
                            data:err
                        })
                    }
    
                    const isMatch = await bcrypt.compare(password, data.password)
                if (!isMatch) {
                    res.status(400).json({ status: "Please enter your valid password" })
                } else {
                    let Payload = {
                                    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), data: data
                                }
                                let token = jwt.sign(Payload, "JWT_VERIFY_PASSWORD")
                                res.status(200).json({
                                    status: "Login Successfull",
                                    token: token,
                                    data:data
                                })
                    
            
                }
                } catch(err) {
                    res.status(400).json({ status: "Login Failed", data:err })

                 }
              
            });

            // if (!userLogin) {
            //     res.status(401).json({
            //         status: "Enter your valid email",
            //     })
            // }
    
            // const isMatch = await bcrypt.compare(password, userLogin.password)
            // console.log(isMatch)
            // if (!isMatch) {
            //     res.status(400).json({ status: "Please enter your valid password" })
            // } else {
            //     res.status(200).json({ status: "Login Successfully" })
        
            // }
        }
      
      
   
        

   
   
    // UserModel.findOne({ email: email, password: password }, (err, data) => {
    //     if (err) {
    //         res.status(400).json({
    //             status: "Login Failed",
    //             data: err
    //         })
    //     } else {
    //         if (data === null) {
    //             res.status(401).json({
    //                 status:"Please Check Your Email And Password"
    //             })
    //         } else {
    //             let Payload = {
    //             exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), data: data
    //         }
    //         let token = jwt.sign(Payload, "JWT_VERIFY_PASSWORD")
    //         res.status(200).json({
    //             status: "Login Successfull",
    //             token: token,
    //             data:data
    //         }) 
    //         }
           

    //     }
    //     // err ? res.status(400).json({
    //     //     status: "Login Failed",
    //     //     data:err
    //     // })
    //     //     : res.status(201).json({
    //     //         status: "Login Successfull",
    //     //         data:data
    //     //     })
    // })
}


exports.Logout = (req, res) => {
    res.send("Logout")
}
        // err ? res.status(400).json({
        //     status: "Login Failed",
        //     data:err
        // })
        //     : res.status(201).json({
        //         status: "Login Successfull",
        //         data:data
        //     })


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
