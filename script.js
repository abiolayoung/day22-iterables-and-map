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

let map = new Map();
map.set('1', 'str1')
map.set(1, 'num1')
map.set(true, 'bool1')
alert(map.get(1))
alert(map.get('1'))