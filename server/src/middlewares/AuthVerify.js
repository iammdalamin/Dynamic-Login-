const  jwt  = require("jsonwebtoken");


module.exports = (req, res, next) => {
    let token = req.headers["token"]

    jwt.verify(token, "password123", (err, decoded) => {
        if (err) {
            res.status(401).json({
                status: "Unauthorized Request",
                data:err
            })
            
        } else {
            let email = decoded['data']['email'];
            req.headers.email = email;
            next()
        }
            
    })
}