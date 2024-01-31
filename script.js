// ITERABLES
// iterable objects are generalization of arrays, it is concept that allow us to make any object usable in for and for off loops
// arrays are also iterables, strings also are iterables

// const numbers = [53, 22, 0, 10, 15]
// const result = numbers.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
// alert(result);

// Symbol.iterator // this is a synthax for iterables
// let range = {
//     from: 1,
//     to: 5
// };

// range[Symbol.iterator] = function(){
//     return{
//         current: this.from,
//         last: this.to,

//         next(){
//             if(this.current<=this.last){
//                 return{done: false, value: this.current++}
//             } else{
//                 return{done: true}
//             }
//         }
//     };
// };

// for(let num of range){
//     alert(num)
// }

// another method

// let range = {
//     from: 1,
//     to: 5,

// [symbol.iterator](){
//     this.current = this.from;
//     return this;
// }, 
// next(){
//     if(this.current<=this.to){
//         return{done: false, value: this.current++};
//     } else{
//         return{done: true};
//     }
// }
// }

// for(let num of range){
//     alert(num)
// }

// iterating over a string using for off loop
// for(let char of "test"){
//     alert(char)
// }

// let str = "hello";
// let iterator = str[Symbol.iterator]();

// while(true){
//     let result = iterator.next();
//     if(result.done) break;
//     alert(result.value)
// }

// iterables are objects that implement the symbol.iterator method
// array likes, these are objects that have indexes and length but they look like arrays


// let range = {
//     from: 1,
//     to: 10
// };

// range[Symbol.iterator] = function(){
//     return{
//         current: this.from,
//         last: this.to,

//         next(){
//             if(this.current<=this.last){
//                 return{done: false, value: this.current++}
//             } else{
//                 return {done: true}
//             }
//         }
//     };
// };

// for(let num of range){
//     alert(num)
// }

// MAP AND SETS
// MAP- this is a collection of key data items, just like an object but maps allow key data of any types
// MAP Properties
// new Map() // to create map
// Map.set(key, value) // this stores the value by the key
// Map.get(key) //returns the value by the key, will return undefine if key does not exist in the map
// Map.has(key) // this returns true if the key exist, else false
// Map.delete(key) // it removes the element that is the key value pair, using the key specified in the param
// Map.clear() //removes everything from the map
// Map.size() // used to return the current element count

// let map = new Map();
// map.set('1', 'str1')
// map.set(1, 'num1')
// map.set(true, 'bool1')
// alert(map.get(1))
// alert(map.get('1'))

// let john = {name: 'john'};
// let ben = {name: 'ben'};

// let visitCountObj = {};
// visitCountObj[ben] = 234;
// visitCountObj[john]= 123;

// alert(visitCountObj["[object Object]"]);

// using set method in maps
// let map = new Map();
// map.set('1', 'str1')
// .set(1, 'num1')
// .set(true, 'bool1')

// alert(map.get(1))
// alert(map.get('1'))

// looping over a map
// there are 3 methods to loop over a map, first one is- map.key- returns iterable for keys
// map.value- returns iterable for value, map.entries- return iterables for enteries(key value pair)

// let recipeMap = new Map([
//     ['cucumber', 500], 
//     ['tomoatoes',350],
//     ['onions', 100]
// ]);

// for(let vegetable of recipeMap.keys()){
//     alert(vegetable);
// } // this will output the keys of the map (cucumber, tomatoes, onions)

// for(let amount of recipeMap.values()){
//     alert(amount);
// } // this will alert the values

// for(let entry of recipeMap.entries()){
//     alert(entry);
// } // this will alert key and value pair

// other method 

// recipeMap.forEach((value,key,map)=>{
//     alert(`${key} : ${value}`)
// })

// using the map get method

// alert(recipeMap.get('cucumber'))

// Write a function that takes an array of numbers and returns the sum of all the elements.
// const numbers = [20, 20, 20, 20, 20]
// const result = numbers.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
// alert(result)

// Given an array of numbers, create a new array containing only the even numbers.
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumber = number.filter(number => number % 2 === 0);
// alert(evenNumber)

// OBJECT.from entries- object from map
// this method will create an object from an array of key value pair
// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
// ]);

// alert(prices.orange) // this will get a plain object from map
// Using Map method

// let map = new Map();
// map.set('banana', 1)
// map.set('orange', 2)
// map.set('meat', 4)

// let obj = Object.fromEntries(map.entries(map))
// alert(obj.orange)

// SETS
// new Set([iterable])
// Set.add(value)
// Set.delete(value)
// Set.has(value)
// Set.clear()
// Set.size

// let set = new Set();
// let john = {name: 'john'};
// let peter = {name: 'peter'};
// let mary = {name: 'mary'};

// set.add(john);
// set.add(peter);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // alert(set.size)

// for(let user of set){
//     alert(user.name)
// }

// set doesnt allow duplicates unless the entire nsme is changed
// let set = new Set(["oranges", 'apples', 'plum']);
// for(let value of set){ // using for off loop to loop over the array
//     alert(value)
// }

// set.forEach((value, valueAgain, set) => {
//     alert(value)
// }) /// using for each loop

// WEAKMAP
//  let weakMap = new weakMap()
//  let obj = {};
//  weakMap.set(obj, 'ok');

// let john = {name: 'john'}
// let weakMap = new weakMap();
// weakMap.set(john, '...')

// weakmap does not support iteration and key founction value
// we put data to the weakmap using object as the key

// VisitCount.js
// let visitCountMap = new WeakMap();

// function countUser(user){
//     let count = visitCountMap.get(user) || 0;
//     visitCountMap.set(user, count+1)
// }

// main.js
// let john = {name: 'john'}
// countUser(john)
// john = null

// weakset behave similarly to weakmap, we may only add objects to weakset, we cannot use primitves
// it support the add, has, delete  function but doesnt support the size and has not iterator has the weakmap
// membership in weakset may mean something about the object

// let visitedSet = new WeakSet()
// let john = {name: 'john'};
// let peter = {name: 'peter'};
// let mary = {name: 'mary'};

// visitedSet.add(john)
// visitedSet.add(peter)
// visitedSet.add(john)

// alert(visitedSet.has(mary))

// john = null; // the visited set fo john will be clean automatically
// alert(visitedSet.has(john))

// weakmap is a map like collection that allows only object as keys and removes them together
// with associated value, once they become in-accessible by other means

// weakset is a set like collection that stores only object and remove once they become inaccessible by 
// other means, their main advantage is that they have weak reference to object and they can be easily 
// removed by the garbage collector.

// weakmap and weakset are used as a seconday data structure in addition to the primary object

// Object.keys, values,entries - they are used to get the key, values, and key value pair of an object array
// let user = {
//     name: 'john',
//     age: 30
// }

// for(let value of Object.values(user)){
//     alert(value)
// }

let prices = {
    banana: 1,
    orange: 2,
    meat: 4
}

let doubleprice = Object.fromEntries(
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
)
alert(doubleprice.meat)