const bcrypt = require('bcrypt')
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
class UserService {
    static encryptPassword(password) {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        return bcrypt.hashSync(password, salt);
    }
    static async create(nwUser) {
        const password = this.encryptPassword(nwUser.passwd)
        nwUser.passwd = password;
        const create = await prisma.user.create({ data: nwUser });
        return { user: create, created: true };
    }
    static async getAll() {
        const users = await prisma.user.findMany({});
        return users;
    }
    static async update(user) {
        const updated = await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                username: user.username,
                passwd: user.passwd
            }
        })
        return { data: updated, updated: true };
    }

    static async changePassword(nwPsswd) {
        const password = this.encryptPassword(nwUser.passwd)
        nwPsswd.passwd = password;
        const updated = await prisma.user.update({
            where: {
                id: nwPsswd.id
            },
            data: {
                passwd: nwPsswd.passwd
            }
        })
        return { data: updated };
    }

    static async delete(idUser) {
        const deleted = await prisma.user.delete({ where: { id: idUser } });
        return deleted ? true : false;
    }

    async comparePassword(password, userPassword) {
        return bcrypt.compare(password, userPassword);
      }
    

    static async login(user){
        const userRegistered = await prisma.user.findUnique({where:{id: user.id}});
        if(!userRegistered){
            return {message: '¡Ese usuario no está registrado!', login: false};
        }

        if(this.comparePassword(user.passwd, userRegistered.passwd)){
            return {message:'Login exitoso.', login: true}
        }else{
            return {message: '¡Ese usuario no está registrado!', login: false};

        }
    }
}

module.exports = UserService;