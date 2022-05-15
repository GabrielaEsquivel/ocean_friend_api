const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
class AlarmService {
    static async createAlarm(nwAlarm) {
        const create = await prisma.alarm.create({ data: nwAlarm });
        return { alarm: create, created: true };
    }
    static async getAll() {
        const alarms = await prisma.alarm.findMany({});
        return alarms;
    }
    static async getFiveAtLeast() {
        const lastFiveResults = await prisma.alarm.findMany({
            orderBy: {
                id: 'desc',
            },
            take: 5,
        })

        return lastFiveResults;
    }

    static async updateIsSeen(isSeen) {
        const updated = await prisma.alarm.update({
            where: {
                id: isSeen.id
            },
            data: {
                isSeen: isSeen.isSeen
            }
        })
        console.log(`updated ${updated}`)
        return { data: updated, isSeen: isSeen.isSeen };
    }

    static async updateIsAttended(isAttended) {
        const updated = await prisma.alarm.update({
            where: {
                id: isAttended.id
            },
            data: {
                isAttended: isAttended.isAttended
            }
        })
        return { data: updated, isAttended: isAttended.isAttended };
    }

    static async delete(idAlarm) {
        const deleted = await prisma.alarm.delete({ where: { id: idAlarm } });
        return deleted ? true : false;
    }
}

module.exports = AlarmService;