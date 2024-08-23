// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
let obj1 = {
    name: 'vasya',
    age: 21,
    status: false,
    greeting: function () {
        console.log('Hello ' + this.name);
    }
}
console.log(obj1);

function copyObj(a) {
    if (a !== null || true || (!isNaN(a))) {
        let newObj = {};
        newObj.greeting = a.greeting;
        let json = JSON.stringify(a);
        let newCopy = JSON.parse(json);
        newCopy.greeting = newObj.greeting;
        return newCopy;
    }
}

let b = copyObj(obj1);
console.log(b);
//
// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
const newArr = coursesAndDurationArray.map((item, index) => ({

    id: index + 1,
    ...item,
}));
console.log(newArr);