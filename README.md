Ejecutar desde línea de comandos: mongo -u "usuario" -p "password" "Ruta_fichero\nombre_fichero.js"
En mi caso: mongo -u "Pepe" -p "Pepe1234" "C:\Program Files\MongoDB\Server\4.0\bin\inserts.js"

El fichero inserts.js hace db = db.getSiblingDB('knowtech') para crear y usar la base de datos knowtech.
Luego hace el for para crear la colección (tabla) alumno con 1000 documentos (registros)
