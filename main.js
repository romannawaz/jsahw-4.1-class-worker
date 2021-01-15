class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);

console.log('name =>', worker.name);
console.log('surname =>', worker.surname);
console.log('rate =>', worker.rate);
console.log('days =>', worker.days);
console.log('salary =>', worker.getSalary());