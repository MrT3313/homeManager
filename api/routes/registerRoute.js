// EXPRESS
    const express = require('express')

// KNEX DB
    const DB_KNEX = require('../../data/dbConfig.js')

// ROUTER
    const router = express.Router()
    
// MIDDLEWARE 
    // const pwHash = require('../../middleware/pwHash.js')

// - GET - //
    router.get('/', async(req, res) => {
        console.log('registerRoute GET/')
        res.status(200).json({ message: 'GET/ --> in registerRouter'})
    })

// - POST - //
    /* Accepted Shape
        {
            "firstName": "STRING",
            "lastName": "STRING",
            "userName": "STRING",
            "pw": "STRING",
            "adminCategory": INTEGER,
            "jobCategory": INTEGER,
        }
    */ 
    router.post('/', async(req,res) => {
        console.log('registerRouter post/')
        res.status(200).json( {message: 'fill me in'} )
    })

// EXPORTS
    module.exports = router