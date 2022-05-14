const AlarmService = require("../../app/services/AlarmService.service");

describe("Test para AlarmService", () =>{
    test("Requerimiento 1: Obtener todas las alarmas registradas", ()=>{
        const alarms = AlarmService.getAll();
        expect(alarms.length).toBe(3);
    }),
    test("Requerimiento 2: Obtener las últimas cinco alarmas", ()=>{
        const lastFiveAlarms = AlarmService.getFiveAtLeast();
        expect(lastFiveAlarms).toBe(2);
    }),
    test("Requerimiento 3: Editar el status isSeen de una alarma", ()=>{
        const alarmUpdated = AlarmService.updateIsSeen({id: id, isSeen: true});
        expect(alarmUpdated.isSeen).toBe(true);
    }),
    test("Requerimiento 4: Editar el status isAttended de una alarma", ()=>{
        const alarmUpdated = AlarmService.updateIsSeen({id: id, isAttended: false});
        expect(alarmUpdated.isAttended).toBe(false);
    }),
    test("Requerimiento 5: Crear una alarma", ()=>{
        const alarm = {
            id: 1,
            description: "Hay una tortuga atorada en una red",
            photo: "index0.png",
            isSeen: false,
            isAttended: false
        }
        const newAlarm = AlarmService.create(alarm);
        expect(newAlarm.created).toBe(true);
    }),
    test("Requerimiento 6: Eliminar una alarma", ()=>{
        const id= 4;
        const alarmDeleted = AlarmService.delete(id);
        expect(alarmDeleted).toBe(true);
    });
});