// --створити масив з:
//     - з 5 числових значень
let numbers = [1, 2, 3, 4, 5];
// - з 5 стічкових значень
let string_data1 = ['one', 'two', 'three', 'four', 'five'];
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let string_data2 = ['one', true, false, true, 'two'];
console.log(numbers, string_data1, string_data2);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до
// конкретного індексу. Вивести в консоль
let arr1 = [];
arr1[0] = 1;
arr1[1] = 'world';
arr1[2] = true;
console.log(arr1);

// - є масив
let arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
let i = 0;
while (i < arr2.length) {
    console.log(arr2[i]);
    i++;
}
console.log('_________________________________');
//     2. перебрати його циклом for
for (const number of arr2) {
    console.log(number);
}
console.log('_________________________________');
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < arr2.length) {
    if (i % 2 !== 0) {
        console.log(arr2[i]);
    }
    i++;
}
console.log('_________________________________');
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < arr2.length; j++) {
    if (j % 2 !== 0) {
        console.log(arr2[j]);
    }
}
console.log('_________________________________');
// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < arr2.length) {
    if (arr2[i] % 2 === 0) {
        console.log(arr2[i]);
    }
    i++;
}
console.log('_________________________________');
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < arr2.length; j++) {
    if (arr2[j] % 2 === 0) {
        console.log(arr2[j]);
    }
}
console.log('_________________________________');
// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = 0; j < arr2.length; j++) {
    if (arr2[j] % 3 === 0) {
        arr2[j]='okten';
    }
    console.log(arr2[j]);
}
console.log('_________________________________');
// 8. вивести масив в зворотньому порядку.
arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let j = arr2.length - 1; j >= 0; j--) {
    console.log(arr2[j]);
}
console.log('_________________________________');
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// - є масив
arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
i = arr2.length-1;
while (i >= 0) {
    console.log(arr2[i]);
    i--;
}
console.log('_________________________________');
// //     2. перебрати його циклом for
arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let j = arr2.length - 1; j >= 0; j--) {
    console.log(arr2[j]);
}
console.log('_________________________________');

// //     3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = arr2.length-1;
while (i >= 0) {
    if (i % 2 !== 0) {
        console.log(arr2[i]);
    }
    i--;
}
console.log('_________________________________');
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = arr2.length - 1; j >= 0; j--) {
    if (j % 2 !== 0) {
        console.log(arr2[j]);
    }
}
console.log('_________________________________');
// // 5. перебрати циклом while та вивести  числа тільки парні  значення
i = arr2.length-1;
while (i >= 0) {
    if (arr2[i] % 2 === 0) {
        console.log(arr2[i]);
    }
    i--;
}
console.log('_________________________________');
// // 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = arr2.length - 1; j >= 0; j--) {
    if (arr2[j] % 2 === 0) {
        console.log(arr2[j]);
    }
}
console.log('_________________________________');
// // 7. замінити кожне число кратне 3 на слово "okten"
for (let j = arr2.length - 1; j >= 0; j--) {
    if (arr2[j] % 3 === 0) {
        arr2[j]='okten';
    }
    console.log(arr2[j]);
}
console.log('_________________________________');

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr3=[1,2,3,4,5,6,7,8,9,10];
for (const number of arr3) {
    console.log(number);
}
console.log('_________________________________');

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let string_data3 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
for (const string of string_data3) {
    console.log(string);
}
console.log('_________________________________');

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let string_data4 = ['one', true, true, 'four', 'five', 6, 7, 'eight', 'nine', 'ten'];
for (const stringData4Element of string_data4) {
    console.log(stringData4Element);
}
console.log('_________________________________');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let string_data5 = ['one', true, true, 'four', 'five', 6, 7, 'eight', 'nine', 'ten'];
for (const stringData5Element of string_data5) {
    if (typeof stringData5Element === "boolean"){
        console.log(stringData5Element);
    }
}
console.log('_________________________________');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const stringData5Element of string_data5) {
    if (typeof stringData5Element === "number"){
        console.log(stringData5Element);
    }
}
console.log('_________________________________');
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const stringData5Element of string_data5) {
    if (typeof stringData5Element === "string"){
        console.log(stringData5Element);
    }
}
console.log('_________________________________');

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.
let arr5 = [];
for (let j = 0; j < 10; j++) {
    if (j%2===0){
        arr5[j]=j;
    }else arr5[j]=`${'string'} ${j}`;
}
console.log(arr5);
console.log('_________________________________');

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 10; j++) {
    document.write(j+' ');
    console.log(j);
}
console.log('_________________________________');
document.write(`<br>`);
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j++) {
    document.write(j+' ');
    console.log(j);
}
console.log('_________________________________');
document.write(`<br>`);

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 200; j=j+2) {
    document.write(j+' ');
    console.log(j);
}
console.log('_________________________________');
document.write(`<br>`);

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let j = 0; j < 100; j++) {
    if (j%2===0) {
        document.write(j + ' ');
        console.log(j);
    }
}
console.log('_________________________________');
document.write(`<br>`);
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let j = 0; j < 100; j++) {
    if (j%2!==0) {
        document.write(j + ' ');
        console.log(j);
    }
}
console.log('_________________________________');

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {title:'book1', str:50, author:'author1', genre:['detective', 'true story']},
    {title:'book2', str:150, author:'author2', genre:'detective'},
    {title:'book---3', str:100, author:'author3', genre:'detective'},
    {title:'book4', str:288, author:['author2', 'author4'], genre:'detective'},
    {title:'book5', str:256, author:'author1', genre:'detective'},
];
// -знайти наібльшу книжку.

// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
let max_book=books[0];
for (const book of books) {
    if (book.title.length>max_book.title.length){
        max_book=book;
    }
}
console.log(max_book);
console.log('_________________________________');

// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор