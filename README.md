# Ocean Friend API

OceanFriend API es el conjunto de servicios a consumir para el front[ OceanFriend FRONT](https://github.com/richirrim/ocean_friend_front).

Contiene la configuración requerida para conectarse a la base de datos implementada en Postgress y configurada con Prisma. 

Adicionalmente contiene algunas otras implementaciones que se detallarán más adelante.

### ¿Qué es PrismaDB?

**Prisma** es un kit de herramientas de base de datos open source. Reemplaza los ORM tradicionales y facilita el acceso a la base de datos con un generador de consultas o query builder automáticamente generado y type-safe que se adapta a nuestro esquema de base de datos.

### ¿Qué es una migración?

Una migración es algo parecido a un control de versiones, pero para una base de datos. Una migración trackea los cambios de la BD tanto en el código de un proyecto como en la misma BD.

También funcionan como una propagación de cambios en los modelos que se ven reflejados en el esquema de una base de datos. Es decir, son archivos que contienen la estructura de una tabla. Con ellas podemos crear una nueva o modificar los campos que la componen, ejecutarla a través de la consola y el cambio se reflejará inmediatamente en la base de datos.

Cabe aclarar que las migraciones sólo alteran la estructura de las tablas, no agregan ni modifican datos directamente, para esto tenemos los “seeders” y este ya es otro término totalmente aparte.

Las migraciones del presente proyecto se encuentran en **prisma/migrations**.

### CRUD

Create, Read, Update, Delete, son las funciones para la gestión de cualquier información en una base de datos.

### ¿Qué es npx?

Es una herramienta de cli que nos permite ejecutar paquetes de npm de forma mucho más sencilla.

Por ejemplo, si se quisiera buscar ESLint en el proyecto, antes habría que buscar el binario en node_modules y entonces accerder al archivo, por ejemplo:

```
./node_modules/.bin/eslint yourfile.js
```

Npx lo busca por nosotros:

```
npx eslint yourfile.js
```

De igual manera, npx también es capaz de ejecutar el paquete indicado sin tenerlo previamente instalado.

### Sobre la BD de este proyecto.

#### Modelos

User

Alarm


#### Tablas


### Servicios

Los servicios implementados para el proyecto se encuentran en app/services/ los cuales son los siguientes:
