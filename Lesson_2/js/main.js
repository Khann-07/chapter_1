// запись нескольких переменных после единственного пременного
// var firstname = 'Jack', lastname = 'Johnson';
// console.log(firstname, lastname);

// Отличия var и let 

// var хойстится let не хойстится
// console.log(firstname);  //undefined
// var firstname = 'Jack';
// console.log(firstname);
// let firstname = 'Jack';

// Обьявления 2х let невозможно
//  var firstname = 'Jack';
//  var firstname = 'John';
//  console.log(firstname);

//  let firstname = 'Jack';
//  let firstname = 'John';
//  console.log(firstname); //выдает ошибку

// var записывается в глобальный обьект window
// var firstname = 'Jack';
// console.log(window.firstname);

// // let не записывается в глобальный обьект winfow
//   let firstname = 'Jack';
//   console.log(window.firstname);

// переменная обьявлена через const унаследовала все принципы которые свойственны переменной let
// но с небольшими отличиями

// // Переназначение let возможно 
// let firstname = 'Jack';
// console.log(firstname);
// firstname = 'John';
// console.log(firstname);

// переначначение const невозмодно

// const firstname = 'Jack';
// firstname = 'John';
// console.log(firstname);

// Обьекты

// const person = {
//     name: 'Jack',
//     age: 20,
//     childs: ['John', 'Luci']
// }

// // Нестандартные значения ключей
// const notStandartFields = {
//     'kebab-case': 'i can use it :D',
//     '0': 10
// }


// // // Доступ к свойствам обьекта 
// // console.log(person.name);
// // console.log(notStandartfields['kebab-case']);

// //переназначение свойств в обьекте даже если жто не константа
// person.name = 'John';
// console.log(person);


// Добавление свойства извне

// person.weight = '88kg';
// console.log(person);
// Удаление поля из объекта
// delete person.name;
// console.log(person);


// Массивы 

// const arrNums = [1,2,3,4,5];
// console.log(arrNums);

// // длина массива
// // console.log(arrNums.length);

// // Досутп к первому элементу массива 
// // console.log(arrNums[0])


// // доступ к послежнему элементу массива
// // console.log(arrNums[arrNums.length - 1]);

// // Предназначение элемента массива
// arrNums[2] = 10;
// console.log(arrNums);


// Оператор инкремента
// let num = 0;
// console.log(++num);
// console.log(num)

//Циклы for
// for (let i = 0; i  <= 100; i++){
//     console.log('Итерация №' + i);
// }

// const arrNums = [1,2,3,4,5];

// for (let i = 0; i < arrNums.length; i++) {
//     // console.log(arrNums[i]);
//     console.log(arrNums[i]*2);
// }

// Поиск элемента в массиве циклом с условием
// let value = null;

// for (let i = 0; i < arrNums.length; i++) {
//     console.log(arrNums[i]);
//     if (arrNums[i] === 4) value = arrNums[i];
// }

// console.log(value);


// вытаскиваем все элементы больше 3х в отдельный массив
// const arrNums = [1,2,3,4,5];

// const arrNums2 = [1];

// for (let i = 0; i < arrNums.length; i++) {
//     if (arrNums[i] > 3) arrNums2.push(arrNums[i]);
//  }
//  console.log(arrNums2);

// Цикл while
//  let i = 0;

//  while (i < 10) {
//      console.log('Интерация №' + i++)
//      }

// Цикл do while

// let i = 0;
// do {
//     console.log('Интерация №' + i++);
// } while (i < 10); 

//Метод массива stage 1

const someFamily = [
    {
        name: 'March',
        position: 'Mother',
        age: 36
    },
    {
        name: 'Homer',
        position: 'Father',
        age: 40
    },
    {
        name: 'Bart',
        position: 'Son',
        age: 10
    },
    {
        name: 'Lisa',
        position: 'Daughter',
        age: 8
    }
];

// метод push / pop убирания и добавление

const newChild = {
    name: 'Maggie',
    position: 'Daughter',
    age: 2
}

// vtnjls pop/push добавляют и удаляют элементы в конце

// console.log(someFamily);
// someFamily.push(newChild);
// console.log(someFamily);



// console.log(someFamily);
// someFamily.pop(newChild);
// console.log(someFamily);

// Методы shift/unshift убирает и добавляет в начале массива 
// someFamily.shift();
// console.log(someFamily);


// someFamily.unshift(newChild);
// console.log(someFamily);

// метод splice способ добавления по определенному индексу

// someFamily.splice(1,1) // удаление элемента
// console.log(someFamily);

// someFamily.splice(2,0, newChild);//Добавление
// console.log(someFamily);

// Жизнь без метода
// const simpsonsFamily = [];

// for(let i = 0; i < someFamily.length; i++) {
//     someFamily[i].lastName = 'Simpson';
//     simpsonsFamily.push(someFamily[i]);
// }

// console.log(simpsonsFamily);

// Жизнь с методом foreach
// someFamily.forEach(function(item){
//     item.lastName = 'Simpson';
//     simpsonsFamily.push(item);
// })
// console.log(simpsonsFamily);

// жизнь с методом map метод перебора

// const simpsonsFamily = someFamily.map(function(item){
//     item.lastName = 'Simpson';
//     return item;

// })

// console.log(simpsonsFamily)

