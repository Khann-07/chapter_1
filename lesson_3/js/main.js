// Function DECLARATION
        //name    arguments
// function square(a,b) {
//     console.log(a * b);
// }
// square(2,2)
// square(5,5)

// function checkArg() {
//     console.log(arguments);
// }
// checkArg('John', 20);

//return
// function square(a,b){
//     return a * b;
//     console.log('Does not work');
// }

// const firstResult = square(2,2);
// const secondResult = square(5,5);

//  console.log(firstResult, secondResult); 

//Example

// function lineShortener(str, chars = 5) {
//     let arr = [];
//     for (let i = 0; i <= chars; i++) arr.push(str[i]);
//     return arr.join('') + '...'; 
// }

// const longStr = 'its very long string';
// const shortStr = lineShortener(longStr);
// const secondShortenerStr = lineShortener('Hello my beautifull world')

// console.log(shortStr  secondShortenerStr);

// // Example 2
// function isEmtyArray(value) {
//     return Array.isArray(value)  && value.length === 0;
// }

// console.log(isEmptyArray({ name: 'Jack' }));
// console.log(isEmtyArray([]));

//function EXPRESSION 
// const multiple = function(a,b) {
//     console.log(a * 2, b * 20);
// }

// multiple(3,6);

// Methods

// const person = {
//     name: 'Jack',
//     birthYear: 1980,
//     getAge: function() {
//         return 2020 - this.birthYear;
//     },
//     sayHello: function() {
//         console.log(this.name + ' said hello');
//     },
//     changeName: function(newName) {
//         if(typeof newName !== 'string') {
//             console.error('To change the name, enter the line');
//             return
//         }
//         this.name = newName;
//     }

// }

// const ageOfPerson = person.getAge();

// // console.log(ageOfPerson);
// // person.sayHello();

// person.changeName('Jim');
// console.log(person.name);


// let age = +prompt('Сколько Вам лет?');

// if ( age > 11) {
//     alert('Вход разрешен')
// }else if ( age <= 11 && confirm('Вы с родителями?') == true) {
    
//     alert('Вход разрешен.')
// } else {
//     alert('ЗАПРЕЩЕНО')
// }


