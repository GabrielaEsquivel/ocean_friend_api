const UserService = require("../../app/services/UserService");

describe("Test para AlarmService",  () =>{
    test("Requerimiento 1: Crear Usuario", async ()=>{
        const user = {
            username: 'GabrielaR',
            passwd: '12345'
        };
        const created = await UserService.create(user);
        console.log("CREATED", created)
        expect(created.created).toBe(true);
    })
});