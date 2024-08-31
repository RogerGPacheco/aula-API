const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserRepository = require('../repositories/userRepository');

const SECRET_KEY = 'sua_chave_secreta';

class userService{
    async register(username, password){
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await UserRepository.createUser({username, password: hashedPassword});
        return user;
    }
}

module.exports = new userService;