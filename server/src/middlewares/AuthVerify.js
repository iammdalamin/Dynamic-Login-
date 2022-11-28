const  jwt  = require("jsonwebtoken");


module.exports = (req, res, next) => {
    let token = req.headers["token"]

    jwt.verify(token, "JWT_VERIFY_PASSWORD", (err, decoded) => {
        if (err) {
            res.status(401).json({
                status: "Unauthorized Request",
                data:err
            })
            
        } else {
            let email = decoded['data']['email'];
            req.headers.email = email;
            console.log(email)
            next()
        }
            
    })
}


