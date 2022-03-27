const myName: string = 'Juan';
const myAge =  12;
const suma = (a: number, b: number) => {
    return a + b;
}

suma(12, 23);

class Persona {
    private age;
    private name;

    constructor(age: number, name: string){
        this.age = age;
        this.name = name;
    }

    getSummary(){
        return `My name is ${this.name}, ${this.age}`;
    }
}

const juan = new Persona(12, 'Juan Camilo');
juan.getSummary();