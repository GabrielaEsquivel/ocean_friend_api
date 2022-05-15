const UserService = require('../services/UserService');
class UserController {

    static async create(user) {
        const nwUser = {
            username: user.username,
            passwd: user.passwd,
        }
        return await UserService.create(nwUser)
    }

    static async login(user) {
        return await UserService.login(user);
    }

    static async changePassword(user) {
        return await UserService.changePassword(user);
    }

    static async delete(id) {
        return await UserService.delete(id);
    }

}

module.exports = AlarmController;