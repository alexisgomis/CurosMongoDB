// Este script js crea las funciones
// mongo -u "Pepe" -p "Pepe1234" "CreateFunctions.js
db = db.getSiblingDB('knowtech2');
db.system.js.save({_id:"deleteAlumno", value:function(x){ db.alumno.deleteOne({IdAlumno: x});return "Alumno borrado";}});
db.system.js.save({_id:"createAlumno", value:function(x){ db.alumno.insertOne({IdAlumno: x, Nombre: x, Apellidos: x, Dni: x});return "Alumno creado";}});
db.system.js.save({_id:"selectAlumno", value:function(x){ return db.alumno.find({IdAlumno: x},{IdAlumno: 1, Nombre: 1, Apellidos: 1, Dni: 1});}});
db.system.js.save({_id:"updateAlumno", value:function(x,y){ db.alumno.updateOne({IdAlumno: x},{$set: {Dni: y}});return "Alumno actualizado";}});
