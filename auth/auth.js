const jwt = require('jsonwebtoken')
const jwtKey = process.env.JEW_SECRET

module.exports = {
    auth
}

async function auth(req, res, next) {
    const token = req.get('Auth')

    if ( token ) {
        jwt.verify(token, jwtKey, (err, decoded) => {
            if (err ) return res.status(401).json( err )
            
            res.decoded = decoded
            
            next()
        })
    } else {
        return res.status(401).json( { error: 'No token provided, must be set on Auth Header'})
    }
}

