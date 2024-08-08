// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let animals = ['cat', 'dog', 'bober', 'tiger', 'frog', 'snake', 'wolf', 'puma', 'monkey', 'cow'];
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[3]);
console.log(animals[4]);
console.log(animals[5]);
console.log(animals[6]);
console.log(animals[7]);
console.log(animals[8]);
console.log(animals[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Pinokkio',
    pageCount: 80,
    genre: 'fairy tale'
}
let book2 = {
    title: 'Jasone Bourne',
    pageCount: 255,
    genre: 'action'
}
let book3 = {
    title: 'Black ink heart',
    pageCount: 300,
    genre: 'detective'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book_1 = {
    title: 'Pinokkio',
    pageCount: 80,
    genre: 'fairy tale',
    authors: [
        {name: 'Karo Koloddi', age: 88}
    ]
}
let book_2 = {
    title: 'Jasone Bourne',
    pageCount: 255,
    genre: 'action',
    authors: [
        {name: 'Robert Ladlam', age: 88}
    ]
}
let book_3 = {
    title: 'Black ink heart',
    pageCount: 300,
    genre: 'detective',
    authors: [
        {name: 'Robert Galbraith', age: 60}
    ]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'vasya', username: 'vasya-krasava', pass: '90qyghpa'},
    {name: 'olya', username: 'olya-krasava', pass: '90qyghadfpa'},
    {name: 'lena', username: 'lena-krasava', pass: '2290qyghpa'},
    {name: 'aristarh', username: 'aristarh-krasava', pass: '5590qyghpa'},
    {name: 'katya', username: 'katya-krasava', pass: '9660qyghpa'},
    {name: 'masha', username: 'masha-krasava', pass: '9770qyghpa'},
    {name: 'kolya', username: 'kolya-krasava', pass: '90uyyqyghpa'},
    {name: 'sasha', username: 'sasha-krasava', pass: '9fgh0qyghpa'},
    {name: 'oleg', username: 'oleg-krasava', pass: 'erth90qyghpa'},
    {name: 'bogdan', username: 'bogdan-krasava', pass: 'erj90qyghpa'},
]
console.log(users[0].pass);
console.log(users[1].pass);
console.log(users[2].pass);
console.log(users[3].pass);
console.log(users[4].pass);
console.log(users[5].pass);
console.log(users[6].pass);
console.log(users[7].pass);
console.log(users[8].pass);
console.log(users[9].pass);

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//     Як зробити цей масив - вам потрібно подумати.
//     Нормальних варіантів опису -2.
//     Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let morning, day, evening;
let temperature = [
    {sunday: [[morning], [day], [evening]]},
    {monday: [[morning], [day], [evening]]},
    {tuesday: [[morning], [day], [evening]]},
    {wednesday: [[morning], [day], [evening]]},
    {thursday: [[morning], [day], [evening]]},
    {friday: [[morning], [day], [evening]]},
    {saturday: [[morning], [day], [evening]]}
]
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
let x = 2;
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 1;
// let a=0;
// let a=-3;
if (a !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 35;
if (time <= 15) {
    console.log('1st quarter')
} else if (time >= 16 && time <= 30) {
    console.log('2nd quarter')
} else if (time > 31 && time <= 45) {
    console.log('3d quarter')
} else if (time >= 46 && time <= 59) {
    console.log('4th quarter')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).
let date = 18;
if (date <= 10) {
    console.log('1st decade')
} else if (date > 10 && date <= 20) {
    console.log('2nd decade')
} else {
    console.log('2d decade')
}

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
let numOfaDay = 3;
switch (numOfaDay) {
    case numOfaDay = 1:
        console.log('monday');
        break;
    case numOfaDay = 2:
        console.log('tuesday');
        break;
    case numOfaDay = 3:
        console.log('wednesday');
        break;
    case numOfaDay = 4:
        console.log('thursday');
        break;
    case numOfaDay = 5:
        console.log('friday');
        break;
    case numOfaDay = 6:
        console.log('saturday');
        break;
    case numOfaDay = 7:
        console.log('sunday');
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
a = 2;
let b = 3;
if (a > b) {
    console.log('max a: ', a)
} else if (b > a) {
    console.log('max b: ', b)
} else {
    console.log('equal numbers entered')
}
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти
//     в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
x = null;
if (x === 0 || x === null || x === undefined) {
    x = 'default'
} else {
    x = 'OK'
}
console.log(x)
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(coursesAndDurationArray[0].title, '- Super')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(coursesAndDurationArray[1].title, '- Super')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(coursesAndDurationArray[2].title, '- Super')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(coursesAndDurationArray[3].title, '- Super')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(coursesAndDurationArray[4].title, '- Super')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(coursesAndDurationArray[5].title, '- Super')
}

