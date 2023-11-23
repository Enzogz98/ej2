class Persona {
    constructor(nombre, edad, DNI, sexo, peso, altura, añoNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.añoNacimiento = añoNacimiento;
    }

    mostrarGeneracion() {
        if (this.edad >= 0 && this.edad <= 12) {
            return 'Alpha';
        } else if (this.edad >= 13 && this.edad <= 29) {
            return 'Z';
        } else if (this.edad >= 30 && this.edad <= 42) {
            return 'Millennial';
        } else if (this.edad >= 43 && this.edad <= 54) {
            return 'X';
        } else if (this.edad >= 55 && this.edad <= 74) {
            return 'Baby Boomer';
        } else if (this.edad >= 75 && this.edad <= 94) {
            return 'Silenciosa';
        } else {
            return 'No identificada';
        }
    }

    esMayorDeEdad() {
        return this.edad >= 18;
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.DNI}\nSexo: ${this.sexo}\nPeso: ${this.peso}\nAltura: ${this.altura}\nAño de Nacimiento: ${this.añoNacimiento}`;
    }
}

let persona;

function crearPersona() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const DNI = document.getElementById('DNI').value;
    const sexo = document.getElementById('sexo').value.toUpperCase();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const añoNacimiento = parseInt(document.getElementById('añoNacimiento').value);

    persona = new Persona(nombre, edad, DNI, sexo, peso, altura, añoNacimiento);
    alert('Persona creada exitosamente.');
}

function mostrarGeneracion() {
    if (persona) {
        alert(`Generación: ${persona.mostrarGeneracion()}`);
    } else {
        alert('Primero crea una persona.');
    }
}

function esMayorDeEdad() {
    if (persona) {
        alert(persona.esMayorDeEdad() ? 'Es mayor de edad.' : 'No es mayor de edad.');
    } else {
        alert('Primero crea una persona.');
    }
}

function mostrarDatos() {
    if (persona) {
        alert(persona.mostrarDatos());
    } else {
        alert('Primero crea una persona.');
    }
}