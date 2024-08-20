// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [new User(1, 'mike', 'ivanov', '123@gmail.com', 380505005050),
    new User(2, 'mike', 'ivanov', '123@gmail.com', 380505005050),
    new User(3, 'mike', 'ivanov', '123@gmail.com', 380505005050),
    new User(4, 'mike', 'ivanov', '123@gmail.com', 380505005050),
    new User(5, 'mike', 'ivanov', '123@gmail.com', 380505005050),
    new User(6, 'mike', 'ivanov', '123@gmail.com', 380505005050),
    new User(7, 'mike', 'ivanov', '123@gmail.com', 380505005050),
    new User(8, 'mike', 'ivanov', '123@gmail.com', 380505005050),
    new User(9, 'mike', 'ivanov', '123@gmail.com', 380505005050),
    new User(10, 'mike', 'ivanov', '123@gmail.com', 380505005050),
];
console.log(users);
console.log('____________________________________________________________-');
//
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let evenId = users.filter(value => {
    return value.id % 2 === 0;
});
console.log(evenId);
console.log('____________________________________________________________-');
//
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = users.sort((user1, user2) => {
    return user1.id - user2.id;
});
console.log(sort);
console.log('____________________________________________________________-');
//
// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1, 'mike', 'ivanov', '123@gmail.com', 380505005050, ['iphone', 'macbook']),
    new Client(2, 'mike', 'ivanov', '123@gmail.com', 380505005050, ['iphone', 'macbook', 'charger']),
    new Client(3, 'mike', 'ivanov', '123@gmail.com', 380505005050, ['iphone']),
    new Client(4, 'mike', 'ivanov', '123@gmail.com', 380505005050, ['iphone', 'macbook', 'tv']),
    new Client(5, 'mike', 'ivanov', '123@gmail.com', 380505005050, ['tv', 'pen']),
    new Client(6, 'mike', 'ivanov', '123@gmail.com', 380505005050, ['table', 'chear', 'cd', 'dvd']),
    new Client(7, 'mike', 'ivanov', '123@gmail.com', 380505005050, ['iphone', 'macbook']),
    new Client(8, 'mike', 'ivanov', '123@gmail.com', 380505005050, ['iphone', 'macbook']),
    new Client(9, 'mike', 'ivanov', '123@gmail.com', 380505005050, ['iphone', 'macbook']),
    new Client(10, 'mike', 'ivanov', '123@gmail.com', 380505005050, ['iphone', 'macbook']),
];
console.log(clients);
console.log('____________________________________________________________-');
//
//
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedOrders = clients.sort((client1, client2) => {
    return client1.order.length - client2.order.length;
});
console.log(sortedOrders);
console.log('____________________________________________________________-');
//
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, year, maxSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function () {
        console.log(`${this.maxSpeed}`)
    };
    this.info = function () {
        console.log(`model -  ${this.model}, manufacturer - ${this.manufacturer}, 
        year - ${this.year}, max speed - ${this.maxSpeed}, engine - ${this.engine}`)
    };
    this.increaseMaxSpeed = function (speed) {
        let newSpeed = maxSpeed + speed;
        console.log(`New max speed is ${newSpeed}km/h`);
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(`year - ${this.year}`);
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car = new Car('jetta', 'WV', 2021, 280, 1800);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(50);
car.changeYear(2024);
car.addDriver({name: 'Vasya', age: 45});
console.log(car);
console.log('____________________________________________________________-');

//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    };

    drive() {
        console.log(`${this.maxSpeed}`)
    };

    info() {
        console.log(`model -  ${this.model}, manufacturer - ${this.manufacturer}, 
        year - ${this.year}, max speed - ${this.maxSpeed}, engine - ${this.engine}`)
    };

    increaseMaxSpeed(speed) {
        let newSpeed = this.maxSpeed + speed;
        console.log(`New max speed is ${newSpeed}km/h`);
    };

    changeYear(newValue) {
        this.year = newValue;
        console.log(`year - ${this.year}`);
    };

    addDriver(driver) {
        this.driver = driver;
    }
}

let car2 = new Car2('jetta', 'WV', 2015, 260, 1400);
console.log(car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(10);
car2.changeYear(2000);
car2.addDriver({name: 'Vasya', age: 45});
console.log(car2);
console.log('____________________________________________________________-');

//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    };
}

let cinderellas = [
    new Cinderella('cind1', 18, 37),
    new Cinderella('cind2', 14, 36),
    new Cinderella('cind3', 17, 34),
    new Cinderella('cind4', 16, 35),
    new Cinderella('cind5', 23, 36),
    new Cinderella('cind6', 34, 37),
    new Cinderella('cind7', 48, 38),
    new Cinderella('cind8', 13, 39),
    new Cinderella('cind9', 54, 43),
    new Cinderella('cind10', 38, 45),
]
console.log(cinderellas);

class Prince {
    constructor(name, age, shoeToSearch) {
        this.name = name;
        this.age = age;
        this.shoeToSearch = shoeToSearch;
    };
}

let prince = new Prince('Vasya', 25, 34);
console.log(prince);

for (const item of cinderellas) {
    if (item.size === prince.shoeToSearch) {
        console.log('Prince, your cinderella is - ', item);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let cinderellaToSearch = cinderellas.find(value => value.size === prince.shoeToSearch);
console.log(cinderellaToSearch);
console.log('_______________________________');
//
//
//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
Array.prototype.newForeEach = function (callback) {
    let arr = this;
    for (const arrElement of arr) {
        callback(arrElement);
    }
};
let array = [1, 2, 3, 4, 5, 6, 7, 8];
array.newForeEach((x) => console.log(x));
console.log('_______________________________');

Array.prototype.newFilter = function (callback) {
    let arr2 = [];
    for (const item of this) {
        if (callback(item)) {
            arr2.push(item);
        }
    }
    return arr2;
};
let c = cinderellas.newFilter((item) => item.age < 40);
console.log(c);