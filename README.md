# [Backup/Restore ------ MongoDB/Firestore]

![version] 1.0.0

### Configuraciones
 - Para conectar la app con FIREBASE se debe descargar una clave privada en:
   1- firebase/Configuración del proyecto/cuentas de servicio/sdk de firebase admin/ generar nueva clave privada
   2- Abrir la clave privada que se genero y copiar el contenido en config/firebase.json

 - Para conectar la app con MONGODB se debe configurar los el config.js:
    USER_NAME : '',
    PASSWORD:'',
    HOST:'localhost',
    PORT: 27017,
    DB_NAME:'',
    DIRECTORY:'',
   
### Ejecución
- Instalar librerias: `npm install`
- Instalar librerias nuevas: `npm install nombre-libreria`

### Backup/Restore BD Mongo

- Backup:
    #Comando para hacer Backup de toda una base de datos: 
    ./backup_dbmongo.sh

    #Comando para hacer Backup de una Collection especifica de la BD: 
    ./backup_dbmongo.sh [collection1] [collection2] [.......]
    - Ejemplo:
    ./backup_dbmongo.sh masseurs

- Restore:
    #Comando para hacer restore de toda una base de datos: 
    ./restore_dbmongo.sh

    #Comando para hacer restore de una Collection especifica de la BD: 
    ./restore_dbmongo.sh [collection1] [collection2] [.......]
    - Ejemplo:
    ./restore_dbmongo.sh usuarios



### Backup/Restore BD Firestore

- Backup:
    #Comando para hacer Backup de una Collection especifica de la BD: 
    ./backup_firestore.sh [collection1] [collection2] [.......]
    - Ejemplo:
    ./backup_firestore.sh usuarios

- Restore:
    #Comando para hacer restore de una Collection especifica de la BD: 
    ./restore_firestore.sh [collection1] [collection2] [.......]
    - Ejemplo:
    ./restore_firestore.sh usuarios
