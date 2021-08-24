// console.log(`zadanie 11`);
// const arr11 = [101, 102, 103, 104];

// const wiekszyOd100 = arr11.some((namber) => namber > 100);
// const wiekszyOd100_1 = some((namber) => namber > 100);

// function some(fn) {
//   for (let i = 0; i < arr11.length; i++) {
//     const number = arr11[i];
//     if (fn(number)) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(wiekszyOd100);
// console.log(wiekszyOd100_1);

// //12

// console.log(`zadanie 12`);

// function every2(fn) {
//   for (let i = 0; i < this.length; i++) {
//     const number = this[i];
//     if (!fn(number)) {
//       return false;
//     }
//   }
//   return true;
// }

// Array.prototype.every2 = every2;

// const wiekszyOd100_2 = arr11.every((number) => number > 100);
// const wiekszyOd100_3 = arr11.every2((number) => number > 100);

// console.log(wiekszyOd100_2);
// console.log(wiekszyOd100_3);











// // reduce
// console.log(`reduce`)

// function reduce2(fn, initialValue) {
//     let sum
//     let index
//     if (initialValue !== undefined) {
//         sum = initialValue
//         index = 0
//     } else {
//         sum = this[0]
//         index = 1
//      }
    
//     for (let i = index; i < this.length; i++) {
//       const item = this[i]
//         sum = fn(sum, item)
//     }
//     return sum
// }
// function sumuj(suma, number) {
//   return suma + number;
// }

// Array.prototype.reduce2 = reduce2
// const sum = arr11.reduce(sumuj);
// const sum2 = arr11.reduce2(sumuj)

// console.log(sum);
// console.log(sum2);


// const arr = [1, 2, 3, 4, 5]
// let suma
// for (let i = 0; i < arr.length; i++){
//     const liczba = arr[i]
//     suma += liczba
// }

// console.log(suma)


// console.log(`A`)

// function fn(){
// console.log(`B`)
// }

// setTimeout(() => {
// console.log(`C`)
// }, 2000)

// fn()
// console.log(`D`)


// function funkcjaAsynchroniczna() {
//     return {
//         then: () => {console.log(`then`)}
    
//     }
// }

// const wynik = funkcjaAsynchroniczna()
// wynik.then(() => {

// })

const person = {
    name: `Mateusz`,
    age: 19,

}

function showName() {
    console.log(this)
}

showName()

person.showName = showName

person.showName()

function Person(name) {
    this.name = name
}

const person2 = new Person(`Mat`)
console.log(person2)
showName()