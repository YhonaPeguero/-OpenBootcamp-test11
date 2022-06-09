// Crear una clase llamada Estudiante y que tenga una variable nombre
const Estudiante = class {
  constructor(nombre) {
    this.nombre = nombre;
  }
};

// Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
const asignaturas = ["Javascript", "HTML", "CSS"];

//  Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: asignaturas
    };
}

//  Crea una nueva instancia de "Estudiante"
const estudiante = new Estudiante("Juan");

// Haz la llamada al método obtenDatos
console.log(estudiante.obtenDatos());