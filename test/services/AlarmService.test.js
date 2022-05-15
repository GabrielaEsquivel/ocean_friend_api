const AlarmService = require("../../app/services/AlarmService");

describe("Test para AlarmService",  () =>{
    test("Requerimiento 1: Obtener todas las alarmas registradas", async ()=>{
        const alarms = await AlarmService.getAll();
        expect(alarms.length).toBe(5);
    }),
    test("Requerimiento 2: Obtener las últimas cinco alarmas", async()=>{
        const lastFiveAlarms = await AlarmService.getFiveAtLeast();
      console.log("last", lastFiveAlarms)
        expect(lastFiveAlarms.length).toBe(4);
    }) /*,
     test("Requerimiento 3: Editar el status isSeen de una alarma", async ()=>{
        const alarmUpdated =await AlarmService.updateIsSeen({id: 5, isSeen: true});
        expect(alarmUpdated.isSeen).toBe(true); 
    }),
    test("Requerimiento 4: Editar el status isAttended de una alarma", async()=>{
        const alarmUpdated = await AlarmService.updateIsAttended({id: 5, isAttended: true});
        expect(alarmUpdated.isAttended).toBe(true);
    }) ,
   test("Requerimiento 5: Crear una alarma", async ()=>{
        const alarm = {
            description: "Hay una tortuga atorada en una red",
            photo: "index1.png",
            location:'-125.214.454 324.343.234',
            isSeen: false,
            isAttended: false
        }
        const newAlarm = await AlarmService.createAlarm(alarm);
        console.log(newAlarm)
        expect(newAlarm.created).toBe(true);
    }),
    test("Requerimiento 6: Eliminar una alarma", async ()=>{
        const alarmDeleted = await AlarmService.delete(5);
        expect(alarmDeleted).toBe(true);
    });*/
});