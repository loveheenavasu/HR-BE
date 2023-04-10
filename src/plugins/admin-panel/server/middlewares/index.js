// const jwt = require('jsonwebtoken')

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if (token == null) return res.sendStatus(401)
//     //console.log("nothing");
//     jwt.verify(token, "vicky-harpreet", { algorithms: ['RS256', 'RS384', 'RS512', 'HS256', 'HS384', 'HS512'] }, (err, user) => {
//         console.log(err)
//         if (err) return res.sendStatus(403)
//         //  console.log(user, ">>>>>>>>>>>>>>token");
//         req.user = user
//         next()
//     })
// }


// function verifyToken(req, res, next) {   
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if (token == null) return res.sendStatus(401)
//     //console.log("nothing");
//     jwt.verify(token, "vicky-harpreet", { algorithms: ['RS256', 'RS384', 'RS512', 'HS256', 'HS384', 'HS512'] }, (err, user) => {
//         console.log(err)
//         if (err) return res.sendStatus(403)
//         //  console.log(user, ">>>>>>>>>>>>>>token");
//         req.user = user
//         next()
//     })
// }

// export default {authenticateToken,verifyToken};