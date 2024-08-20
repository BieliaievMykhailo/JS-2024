// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const square = (a, b) => a * b;
console.log(square(4, 3));
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const circle_square = (r) => 2 * 3.14 * r ** 2;

console.log(circle_square(3));
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cil_square = (r, h) => 2 * 3.14 * r * (h + r);

console.log(cil_square(3, 5));
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1, 2, 3, 4];

const arrPrint = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}

arrPrint(arr);
// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
const printText = (text) => {
    document.write(`<p>${text}</p>`);
}

printText('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis cum deleniti');
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
const printUl = (textLi) => {
    document.write(`
    <ul>
    <li>${textLi}</li>
    <li>${textLi}</li>
    <li>${textLi}</li>
</ul>    `);
}

printUl('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, provident.');
// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
const printUl2 = (textLi, li) => {
    document.write(`<ul>`);
    for (let i = 0; i < li; i++) {
        document.write(`<li>${textLi}</li>`);
    }
    document.write(`</ul>`);
}

printUl2('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, provident.', 5);
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li)
// та виводить його через document.write
let arr2 = [1, 2, 3, 'skdfhjb', 'alkdsjf', true, 'sdfg', false, 23];

const printUlArr = (arr) => {
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`);
}

printUlArr(arr2);
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let arr3 = [
    {id: 1, name: 'vasya', age: 45},
    {id: 2, name: 'olya', age: 13},
    {id: 3, name: 'max', age: 34},
    {id: 4, name: 'ira', age: 26},
];

const printArrOfObj = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>`);
        document.write(`<p>id -${arr[i].id}, name: ${arr[i].name}, age -${arr[i].age}.</p>`);
        document.write(`</div>`);
    }
}

printArrOfObj(arr3);
//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
let arr4 = [-23, 2, 3, 4, 5, 56, -40, 0, 15, 45];

const minNum = (arr) => {
    let min = arr[0];
    for (const minElement of arr) {
        if (minElement < min) {
            min = minElement;
        }
    }
    document.write('min number: ', min);
}

minNum(arr4);
document.write(`<br>`, '_______________________________', `<br>`);
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
const sumArr = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum = sum + arrElement;
    }
    return document.write('sum of your array = ', `${sum}`);
}

sumArr([1, 2, 3, 4, 5, 6, 7, 8]);
document.write(`<br>`, '_______________________________', `<br>`);

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swapArr = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return document.write(arr);
}

swapArr([1, 2, 3, 4, 5, 6, 7, 8], 2, 3);
document.write(`<br>`, '_______________________________', `<br>`);

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let total;
    if (exchangeCurrency === 'USD') {
        total = sumUAH / currencyValues[0].value;
        document.write('Now you have: ', total, exchangeCurrency);
    } else {
        total = sumUAH / currencyValues[1].value;
        document.write('Now you have: ', total, exchangeCurrency);
    }
}

exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD');

