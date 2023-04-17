import jwt from 'jsonwebtoken';

const verifytoken = (req,res,next) => {
    const authHeader = req.headers['authorization']
    const token =  authHeader && authHeader.split('')[ 1 ]

    if(token === null){
        return res.status(403);
    }
    jwt.verify(token,"harvic",(err,user)=>{
        console.log(user,err)
        if(err)
        return res.status(401);
        req.user = user
        console.log(user,"user with token")
        req.user = user;
        next()
    })
}

module.exports = verifytoken