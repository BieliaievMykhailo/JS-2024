let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// forEach    Вивести всі об'єкти масива
users.forEach(value => console.log(value));
console.log('_______________________________');

// filter   Фільтрація масива
let filteredUsers = users.filter(value => value.age > 30);
console.log(filteredUsers);
console.log('_______________________________');

// map   Додавання нових характеристик об'єктам масива створюючи новий масив
let mappedUsers = users.map(function (value, index) {
    return {...value, id: index + 1};
});
console.log(mappedUsers);

// теж саме за допомоги стрілочної функції
users.map((value, index) => {
    return {id: index + 1, name: value.name, age: value.age, status: value.status}
});
console.log('_______________________________');

// find    Пошук по першому входженню(знаходить тільки перше співпадіння та ігнорує інші)
let find = users.find(value => value.name === 'max');
console.log(find);
console.log('_______________________________');

// every - перевіряє чи всі елементи мають однакову характеристику(наприклад статус false)
console.log(users.every(value => value.status));
// some - перевіряє чи має хоч один елемент задану характеристику
console.log(users.some(value => value.status));
console.log('_______________________________');

// sort сортування по числовим значенням
let sort = users.sort((user1, user2) => {
    return user1.age - user2.age;
});
console.log(sort);

// sort сортування по стрінговим значенням
console.log(users.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    if (a.name === b.name) {
        return 0;
    }
}));
console.log('_______________________________');

// reduce    акумулює об'єкти по заданих значеннях і розкладає їх в окремі масиви/об'єкти
let reduce = users.reduce((accumulator, user) => {
    if (user.status) {
        accumulator.statusT.push(user);
    } else {
        accumulator.statusF.push(user);
    }
    return accumulator;
}, {statusT: [], statusF: []});
console.log(reduce);
console.log('_______________________________');
