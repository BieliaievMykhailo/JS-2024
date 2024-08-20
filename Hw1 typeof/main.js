// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua',
// 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let greeting = 'hello';
console.log(greeting);
let name1 = 'owu';
console.log(name1);
let name2 = 'com';
console.log(name2);
let name3 = 'ua';
console.log(name3);
let num1 = 1;
console.log(num1);
let num2 = 10;
console.log(num2);
let num3 = -999;
console.log(num3);
let num4 = 123;
console.log(num4);
let num5 = 3.14;
console.log(num5);
let num6 = 2.7;
console.log(num6);
let num7 = 16;
console.log(num7);
let response1 = true;
console.log(response1);
let response2 = false;
console.log(response2);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну
// person (Не об'єкт, просто за допомоги конкатенації)

firstName = 'Mykhailo';
middleName = 'Volodymyrovich';
lastName = 'Bieliaiev';
person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
// По-Батькові та роками.
// та вивести в консоль

let name = prompt('name:');
let pb = prompt('middle name:');
let age = prompt('age:');
console.log(`${name} ${pb} ${age}`);




