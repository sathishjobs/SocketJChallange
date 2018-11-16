/**
 * Question: 
 * List down at least 5 practical examples of how ES6/Typescript has improved the way you
 * write code.
 */

// 1) Manipulating Objects 
// es5 
var obj1 = { a: 1, b: 2 }
var obj2 = { a: 2, c: 3, d: 4 }
var obj3 = Object.assign(obj1, obj2)

// es6 
const obj1 = { a: 1, b: 2 }
const obj2 = { a: 2, c: 3, d: 4 }
const obj3 = { ...obj1, ...obj2 }

// 2) Object defining
// e65
var a = 1
var b = 2
var c = 3
var d = 4
var obj1 = { a: a, b: b, c: c, d: d }

// es6 example
var a = 1
var b = 2
var c = 3
var d = 4
var obj1 = { a, b, c, d }

// 3) Module import
//es5
var myModule = require("./myModule");
//es6 
import myModule from ("./myModule")

// 4) Async await 
// es5
api.then(() => {
    //logic
});

// es6 
let result = async () => {
    let data = await api();
}

// 5) function default params 
// es5 
function test(name, age) {
    if (!name)
        name = "defaultname"
    if (!age)
        age = 26
    //logic
}

//es6 
function test(name = "defaultname", age = 26){
    //logic
}