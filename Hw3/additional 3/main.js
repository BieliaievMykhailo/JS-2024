// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let arr1 = [];
let num = 1;
for (let i = 0; i < 50; i++) {
    arr1.push(num * 2);
    num++;
}
document.write(`${arr1}`, `<br>`);

//     b. заповнити його 50 непарними числами за допомоги циклу.
arr1 = [];
let i = 1;
while (arr1.length < 50) {
    if (i % 2 !== 0) {
        arr1.push(i);
    }
    i++;
}
document.write(`${arr1}`, `<br>`);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
arr1 = [];
for (let j = 0; j < 20; j++) {
    arr1.push(Math.floor(Math.random() * 100));
}
document.write(`${arr1}`, `<br>`);
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
arr1 = [];
for (let j = 0; j < 20; j++) {
    arr1.push(Math.floor(Math.random() * 732) + 8);
}
document.write(`${arr1}`, `<br>`);
// 2. Вивести за допомогою console.log кожен третій елемен
for (let j = 0; j < arr1.length; j++) {
    if (j % 3 === 0) {
        console.log(arr1[j]);
    }
}
console.log('___________________________');
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let j = 0; j < arr1.length; j++) {
    if (j % 3 === 0 && arr1[j] % 2 === 0) {
        console.log(arr1[j]);
    }
}
console.log('___________________________');
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
arr2 = [];
for (let j = 0; j < arr1.length; j++) {
    if (j % 3 === 0 && arr1[j] % 2 === 0) {
        console.log(arr1[j]);
        arr2.push(arr1[j]);
    }
}
console.log(arr2);
console.log('___________________________');
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let arr3 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let j = 0; j < arr3.length; j++) {
    if (arr3[j + 1] % 2 === 0) {
        console.log(arr3[j]);
    }
}
console.log('___________________________');
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let bills = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
let average;
for (const bill of bills) {
    sum = sum + bill;
}
average = sum / bills.length;
console.log(average);
console.log('___________________________');

//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
arr1 = [];
let newArr = [];
for (let j = 0; j < 20; j++) {
    arr1.push(Math.floor(Math.random() * 100));
    newArr.push(arr1[j] * 5);
}


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...).
// пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
newArr = [];
let arr = ['one', true, 345, 3467, true, 'four', 'five', 6, 7, 'eight', 'nine', 'ten'];
for (const arrElement of arr) {
    if (typeof arrElement === 'number') {
        newArr.push(arrElement);
    }
}
console.log(newArr);
console.log('___________________________');


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities = [];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
for (let j = 0; j < usersWithId.length; j++) {
    for (let k = 0; k < citiesWithId.length; k++) {
        if (usersWithId[j].id === citiesWithId[k].user_id) {
            usersWithId[j].address = citiesWithId[k];
            usersWithCities.push(usersWithId[j]);
        }
    }
}
console.log(usersWithCities);
console.log('___________________________');
//
//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
arr = [];
for (let j = 0; j < 10; j++) {
    arr.push(Math.floor(Math.random() * 100));
}
for (const num of arr) {
    if (num % 2 === 0) {
        console.log(num);
    }
}
console.log('___________________________');

//
// - Взяти масив з 10 чисел або створити його.
// Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
newArr = [];
for (let j = 0; j < arr.length; j++) {
    newArr[j] = arr[j];
}
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
arr = ['a', 'b', 'c'];
let word = '';
for (let j = 0; j < arr.length; j++) {
    word = word + arr[j];
}
console.log(word);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
i = 0;
word = '';
while (i < arr.length) {
    word = word + arr[i];
    i++;
}
console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
word = '';
for (let letter of arr) {
    word = word + letter;
}
console.log(word);
