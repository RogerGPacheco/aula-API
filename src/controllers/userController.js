const express = require('express');
const userService = require('../services/userService');

const router = express.Router();

router.post('/register', async(rec, res) => {
    try{
        const { username, password } = rec.body;
        const user = await userService.register(username, password);
        res.json(user);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

module.exports = router;