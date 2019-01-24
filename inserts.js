db = db.getSiblingDB('knowtech');
for (var i=0; i < 10000; i++) 
{db.alumno.insertOne({ IdAlumno: i, 
                       Nombre: 'Nombre'+i, 
					   Apellidos:'Apellidos'+i, 
					   DNI: 'DNI'+i
					 });
}