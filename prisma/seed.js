const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
    try {
        const alarm = await prisma.alarm.upsert({
            where: { photo: 'index1.png' },
            update: {},
            create: {
                description: "Hay una tortuga atorada en una red",
                photo: "index1.png",
                location: '-125.214.454 324.343.234',
                isSeen: false,
                isAttended: false
            },
        });

        const alarm2 = await prisma.alarm.upsert({
            where: { photo: 'index2.png' },
            update: {},
            create: {
                description: "Hay una tortuga atorada en una red",
                photo: "index2.png",
                location: '-125.214.454 324.343.234',
                isSeen: false,
                isAttended: false
            },
        });

        const alarm3 = await prisma.alarm.upsert({
            where: { photo: 'index3.png' },
            update: {},
            create: {
                description: "Hay una tortuga atorada en una red",
                photo: "index3.png",
                location: '-125.214.454 324.343.234',
                isSeen: false,
                isAttended: false
            },
        });

        const alarm4 = await prisma.alarm.upsert({
            where: { photo: 'index4.png' },
            update: {},
            create: {
                description: "Hay una tortuga atorada en una red",
                photo: "index4.png",
                location: '-125.214.454 324.343.234',
                isSeen: false,
                isAttended: false
            },
        });

        const alarm5 = await prisma.alarm.upsert({
            where: { photo: 'index5.png' },
            update: {},
            create: {
                description: "Hay una tortuga atorada en una red",
                photo: "index5.png",
                location: '-125.214.454 324.343.234',
                isSeen: false,
                isAttended: false
            },
        });
        console.log('Create 4 alarms');

        const user1 = await prisma.user.upsert({
            where: { username: 'GabrielaEsquivel' },
            update: {},
            create: {
                username: 'GabrielaEsquivel',
                passwd: 'admon1234',
            },
        });

        const user2 = await prisma.user.upsert({
            where: { username: 'Rodrigo' },
            update: {},
            create: {
                username: 'RichiOrtega',
                passwd: 'admon1234',
            },
        });
        const user3 = await prisma.user.upsert({
            where: { username: 'LuzLuciano' },
            update: {},
            create: {
                username: 'LuzLuciano',
                passwd: 'admon1234',
            },
        });

        console.log("3 users Added")
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();