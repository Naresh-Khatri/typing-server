const router = require('express').Router()

const User = require('../models/User')

router.post('/register', async (req, res) => {
    const user = User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const newUser = await user.save()
        res.status(200).send(newUser)
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router