// Задание 9/1

// let array = ['Targaryen',
// 'Stark',
// 'Lannister',
// 'Baratheon',
// 'Greyjoy'];
// // console.log(array[2] );

//9/2
// console.log(array[0],array[array.length - 1]);  

//9/3
// array.shift([0]);
// console.log(array);

// array.pop([array.length - 1]);
// console.log(array);


// Задание 10
 
// for(let i = 1; i <=100; i++) {
//    if (i % 2 === 0)  
//     console.log( i ) ;
// }

    // for (let num = 1; num <=100; num++) {
    //     if (num % 17 === 0)
    //     console.log(num);
    // }

// Задание 11

// const num = []
//     for (let i = 1; i <=100; i++){
//         if(i % 3 == 0 && i % 5 ==0 ){
//             console.log('fizzbuzz')
//         }
//         else if(i % 3 == 0){
//             console.log('fizz');
//         }
//         else if(i % 5 ==0){
//             console.log('buzz');
//         }
//         else{
//             console.log(i)
//         }
// }

// Задание 12

// let number1 = {
//     name: 'David',
//     class: 'VI',
//     age: 12
// }
// console.log(number1.name)

// Задание 13

// let r = +prompt('Введите радиус');
// let p = 3.1415;
// let s = p * r^2;
// let o = 2 * p * r; 
// alert(s.toFixed(2) + '\n' + o.toFixed(2));

// Задание 14

// let dog = prompt('Введите любое слово')
// let ms = [];
// for(let i = 0; i < dog.length; i++){
//     for(let y = i + 1; y <= dog.length; y++ ) {
//         ms.push(dog.slice(i, y))
//         console.log(i,y,dog.slice(i, y))
//     }
// }
// console.log(ms);

// let arr = [
//     ["a","b","c"],
//     ["d","e","f"],
//     ["g","h","i"]
// ];


// for(let x = 0; x < arr.length; x++) {
//     for(y = x + 1; y <=arr[x].length; y++ ){
//         console.log(arr[x][y]);
//     }
// }

// for(let z = 0; z < arr.length; z++){
//     console.log(arr[z][z])
// }

// for(let x = 0; x < arr.length; x++) {
//     console.log(arr[x][arr.length - (x+1)])
// }

// for(let x = 0; x < arr[x].length -1 ; x--){
//     console.log(arr[x][x])
// }


