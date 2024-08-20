// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arrOfStrings = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (const item of arrOfStrings) {
    console.log(item.length);
}
console.log('______________________________________');
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
arrOfStrings = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (let item of arrOfStrings) {
    item = item.toUpperCase();
    console.log(item);
}
console.log('______________________________________');
// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
for (let item of arrOfStrings) {
    item = item.toLowerCase();
    console.log(item);
}
console.log('______________________________________');
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let newStr = str.trim();
console.log(newStr);
console.log('______________________________________');
//
//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
str = 'Ревуть воли як ясла повні';
const stringToArray = (text) => text.split(' ');
console.log(stringToArray(str));
console.log('______________________________________');

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let mapResultArray = arr.map((item) => (item.toString()));
console.log(mapResultArray);
console.log('______________________________________');

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'ç') // [21,11,3]
function sortNums(array, direction) {
    if (direction === 'ascending') {
        nums.sort((a, b) => (a - b));
        return nums;
    } else if (direction === 'descending') {
        nums.sort((a, b) => (b - a));
        return nums;
    }
}

console.log(sortNums(nums, 'ascending'));

console.log(sortNums(nums, 'descending'));
console.log('______________________________________');

// ==========================
// #yo06d74c1C
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => (b.monthDuration - a.monthDuration));
console.log(coursesAndDurationArray);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let resultFilterArray = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(resultFilterArray);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
mapResultArray = coursesAndDurationArray.map((course, index) => {
    return {
        id: index + 1,
        title: course.title,
        monthDuration: course.monthDuration,
    };
});
console.log(mapResultArray);
console.log('______________________________________');

// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
let cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
let deckOfCards = [];
for (const cardSuit of cardSuits) {
    for (const value of values) {
        deckOfCards.push({cardSuit: cardSuit, value: value});
    }
}
for (const item of deckOfCards) {
    if (item.cardSuit === 'spade' || item.cardSuit === 'clubs') {
        item.color = 'black';
    } else {
        item.color = 'red';
    }
}
console.log(deckOfCards);
// - знайти піковий туз
for (const item of deckOfCards) {
    if (item.cardSuit === 'spade' && item.value === 'ace') {
        console.log(item);
    }
}
console.log('______________________________________');

// - всі шістки
for (const item of deckOfCards) {
    if (item.value === '6') {
        console.log(item);
    }
}
console.log('______________________________________');

// - всі червоні карти
for (const item of deckOfCards) {
    if (item.color === 'red') {
        console.log(item);
    }
}
console.log('______________________________________');

// - всі буби
for (const item of deckOfCards) {
    if (item.cardSuit === 'diamond') {
        console.log(item);
    }
}
console.log('______________________________________');

// - всі трефи від 9 та більше
for (const item of deckOfCards) {
    if (item.cardSuit === 'clubs' && (+item.value >= 9 || item.value === 'jack' || item.value === 'queen' || item.value === 'king' || item.value === 'ace')) {
        console.log(item);
    }
}
console.log('______________________________________');

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let cards = deckOfCards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    } else {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(cards);
console.log('______________________________________');

// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в яких в modules є sass
let moduleSaas = coursesArray.filter(value => {
    return value.modules.includes('sass');
});
console.log(moduleSaas);
console.log('______________________________________');

// --написати пошук всіх об'єктів, в яких в modules є docker
let moduleDocker = coursesArray.filter(value => {
    return value.modules.includes('docker');
});
console.log(moduleDocker);
