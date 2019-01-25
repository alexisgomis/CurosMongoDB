// Ejecución de las funciones
// mongo -u "Pepe" -p "Pepe1234" "ExecuteFunctions.js"

db = db.getSiblingDB('knowtech2');
db.loadServerScripts();
deleteAlumno(1);
createAlumno(1);
updateAlumno(1,2);
selectAlumno(1);
