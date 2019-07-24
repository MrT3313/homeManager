// EXPRESS
    const router = require('express').Router()

// IMPORT ROUTES
    const registerRoute = require('./registerRoute.js')

// ATTACH ROUTES
    router.use('/register', registerRoute)

// EXPORTS
    module.exports = router