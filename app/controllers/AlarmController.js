const AlarmService = require('../services/AlarmService');
class AlarmController {
    static async getAllAlarms() {
        return await AlarmService.getAll();
    }

    static async getTheLastAlarms() {
        return await AlarmService.getFiveAtLeast();
    }

    static async create(alarm) {
        const nwAlarm = {
            description: alarm.description,
            photo: alarm.photo,
            location: alarm.location,
            isSeen: false,
            isAttended: false
        }
        return await AlarmService.createAlarm(nwAlarm)
    }

    static async editSeen(data) {
        return await AlarmService.updateIsSeen(data);
    }

    static async editAttended(data) {
        return await AlarmService.updateIsAttended(data);
    }

    static async delete(id) {
        return await AlarmService.delete(id);
    }

}

module.exports = AlarmController;