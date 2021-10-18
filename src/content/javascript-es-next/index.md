---
title: ES6 to ES NEXT (ES2021) - New JavaScript Standardized Features
slug: blog/es6-to-es-next-javascript
date: '2021-10-17'
description: 'ECMAScript is the standard upon which JavaScript is based. ES6 is a standard published in June 2015. ES NEXT is a dynamic name that refers to whatever the next version is at the time of writing.'
category: JavaScript
---

ECMAScript is the standard upon which JavaScript is based. ES6 is a standard published in June 2015. ES NEXT is a dynamic name that refers to whatever the next version is at time of writing.

### Latest ECMAScript - JavaScript

The latest ECMAScript version is ES2021 - 12th edition released in June 2021.

## ES6

ECMAScript 2015 (ES6) was the second major revision to JavaScript. The most important features of ES6:

### Let and Const

The `let` can be reassigned and take new value. It creates a mutable variable. `let` keyword allows you to declare a variable with block scope.

```javascript
let name = 'Mark';
name = 'Tom';

console.log(name);

// Output: Tom
```

`const` once used, can't be reassigned. In other words, it's an immutable variable except when it is used with objects. `const` declares a constant value.

```javascript
const x = 2;
```

### Arrow functions

My favorite one, I enjoy using the arrow function, because your code is more readable, more structured, and looks like modern code. Let's compare the old function with the modern arrow function:

```javascript
function myFunctionES5(name, year) {
    return 'Name: ' + name + ', Year: ' + year;
}

const myFunctionES6 = (name, year) => {
    return `Name: ${name}, Year: ${year}`;
};

console.log(myFunctionES5(Adrian, 20));
console.log(myFunctionES6(Tom, 35));

//Output myFunctionES5: Name: Adrian, Year: 20
//Output myFunctionES6: Name: Tom, Year: 35
```

An arrow function can use with built-in functions like map, filter, or reduce.

```javascript
const array = [1, 2, 3, 4, 5];

let ArrayMap = array.map((item) => item);
```

### Template Literals

As you can see in `Array Function` I used a new way to return a string. We don't have to use the plus operator `+` to concatenate strings.

```javascript
// The old syntax:
return 'Name: ' + name + ', Year: ' + year;

// The new ES6 syntax:
return `Name: ${name}, Year: ${year}`;
```

It's a huge difference between the old syntax and ES6. The new way looks more organized and well structured.

### Default parameters

When you forget to write the parameter, it won't return an undefined error because the parameter is already defined in the default. So when you run your function with a missed parameter, it will take the value of the default parameter, and it will not return an error.

```javascript
const myFunc = (name, age) => {
    return `Hello ${name}, your age is ${age}.`;
};
console.log(myFunc('Adrian'));

// Output: Hello Adrian, your age is undefined.
```

### Array and object destructing

Destruction makes the assignment of the values of an array or object to the new variable easier.

The old way:

```javascript
const contacts = {
    name: 'Adrian',
    age: 20,
};

let name = contacts.name;
let age = contacts.age;

console.log(name);
console.log(age);
```

ES6:

```javascript
const contacts = {
    name: 'Adrian',
    age: 20,
};

let { name, age } = contacts;

console.log(name);
console.log(age);
```

### Import and export

Your JavaScript apps using `import` and `export` make it more powerful. Export allows you to export a module to be used in another component, import allows you to import a module to use it in our component.

For example, we have two files, `firstFile.js` and `secondFile.js`. In firstFile.js we are going to export the `myFunction` function:

```javascript
export default const myFunction = () => {
    return 'Hello!'
}
```

And if we want to use this function in `secondFile.js`, we will use import:

```javascript
import myFunction from './firstFile';

console.log(myFunction());
```

Easy.

## ES7 (ES2016)

ES2016 was finalized in June 2016, is a tiny release for JavaScript containing just two features:

### Array.prototype.includes()

This feature introduces a more readable syntax for checking if an array contains an element.

With ES6 and lower, to check if an array contained an element you had to use `indexOf`, which checks the index in the array, and returns `-1` if the element is not there.

Since `-1` is evaluated as a true value, you could not do for example:

```javascript
if (![1, 2].indexOf(3)) {
    console.log('Not found');
}
```

But do:

```javascript
if (![1, 2].includes(3)) {
    console.log('Not found');
}
```

### Exponentiation Operator

The exponentiation operator `**` is the equivalent of `Math.pow()`, but brought into the language instead of being a library function.

```javascript
const first = Math.pow(2, 4);
const second = 2 ** 4;

console.log(first);
console.log(second);

// Output: 16
// Output: 16
```

## ES2017

June 2017 - new 8th edition of ECMAScript. Few new things like [new asynchronous function Async / Await](https://www.adrianfrackowiak.pl/blog/asynchronous-functions).

### Padding a string

Two smaller ES2017 features added to strings are `padStart()` and `padEnd()`. These two methods allow you to easily add characters to a string so it reaches a specific length. The `padStart()` adds characters at the beginning of the string. The `padEnd()` adds characters at the end.

```javascript
'Adrian'.padStart(10, '-');
'Adrian'.padStart(7, '-');
'Adrian'.padStart(6, '-');

// Output: ----Adrian
// Output: -Adrian
// Output: Adrian
```

```javascript
'Adrian'.padEnd(10, '-');
'Adrian'.padEnd(7, '-');
'Adrian'.padEnd(6, '-');

// Output: Adrian----
// Output: Adrian-
// Output: Adrian
```

### Object.values()

`Object.values()` method returns values from all object's own properties. It returns these values in the form of an array.

```javascript
const obj = { name: 'Adrian', age: 20, year: 2001 };
console.log(Object.values(obj));

// Output: Array (3) ['Adrian', 20, 2001]
```

### Object.entries()

Similarly to the `Object.values()`, the `Object.entries()` also works with arrays. If you pass in an array, you will also get a multidimensional array. There will be one nested array for every item in the array. Each of these arrays will contain two items, the index of the item and the item itself.

```javascript
const obj = { name: 'Adrian', age: 20, year: 2001 };
console.log(Object.entries(obj));

// Output: Array (3) [Array (2) ['name', 'Adrian'], Array (2) [...], Array (2) [...]]
```

### [Async function (read more)](https://www.adrianfrackowiak.pl/blog/asynchronous-functions)

Async functions are one of the most popular ES2017 features. Async functions are actually about two features. The first one is the `async` keyword. When you put this keyword at the beginning of a function declaration you create an async function. The second feature is the `await` operator. This operator can be used only inside an async function.

This operator pauses the execution of the async function in which it is placed. The execution is paused until a promise that follows this operator is resolved, until it is either fulfilled or rejected. When the promise is resolved, `await` extracts the value returned by the promise and allows to work with it, or assign it to a variable.

```javascript
const getCurrencies = async () => {
    const data = await fetch(
        'https://www.coingecko.com/api/documentations/v3/swagger.json'
    );
    const json = await data.json();

    return json;
};
```

## ES2018

The ninth edition of the ECMAScript standard, officially known as ECMAScript 2018, was released in June 2018. ES9 continues the yearly release cycle by adding four `RegExp` features, rest/spread properties, asynchronous iteration, and `Promise.prototype.finally()`.

### Object Spread

In ES6, `...` spread operator makes copying and merging arrays a lot simpler. Rather than calling the `concat()` or `slice()` method, you could use the `...` operator:

```javascript
const arr1 = [1, 2, 3];
const copyOfArr1 = [...arr1];

const arr2 = [4, 5];
const mergeArr1WithArr2 = [...arr1, ...arr2];

console.log(copyOfArr1);
console.log(mergeArr1WithArr2);

// Output: Array (3) [1, 2, 3]
// Output: Array (5) [1, 2, 3, 4, 5]
```

ES2018 further expands this syntax by adding spread properties to object literals. With the spread properties, you can copy own enumerable properties of an object onto a new object. Consider the following example:

```javascript
const obj1 = {
    a: 10,
    b: 20,
};

const obj2 = {
    ...obj1,
    c: 30,
};
```

### Promise.prototype.finally()

With this method, programmers will be able to execute a block of code regardless of the promise's fate. Let's look at a simple example:

```javascript
fetch('https://www.coingecko.com/api/documentations/v3/swagger.json')
    .then((response) => {
        console.log(response.status);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        document.querySelector('#spinner').style.display = 'none';
    });
```

### Asynchronous Iteration

With Asynchronous Iteration we get asynchronous iterators and asynchronous iterables. Asynchronous iterators are just like regular iterators, except their `next()` method returns a promise for a `{value, done}` pair. To consume asynchronous iterables, we can now use the `await` keyword with `for ... of` loops.

```javascript
for await (const line of readLines(filePath)) {
    console.log(line);
}
```

### RegExp related features

ES2018 adds four new features to the RegExp object, which further improves JavaScript's string processing capabilities. These features are as allows:

-   s (dotAll) flag for regular expressions
-   RegExp named capture groups
-   RegExp Lookbehind Assertions
-   RegExp Unicode Property Escapes

## ES2019

10th version of the ECMAScript. Let's take a closer look at what new features we got and how we can put them to use.

### String.trimStart() and String.trimEnd()

`String.trim()` has been a part of the ECMA standard since ES5. It removes whitespace from both the beginning and the end of a string. With new methods `trimStart()` and `trimEnd()` we can now choose which end of the string we want to trim.

```javascript
const str = '   Hello :)       ';

console.log(str.trimStart());
console.log(str.trimEnd());

// Output: 'Hello :)       '
// Output: '   Hello :)'
```

### Object.fromEntries()

This method simply converts a list of key-value pairs to an Object.

```javascript
const arr = [['name', 'Adrian']];
const obj = Object.fromEntries(arr);

console.log(obj);

// Output: Object {name: 'Adrian'}
```

### Array.flat() and Array.flatMap()

ES2019 introduced the `Array.prototype.flat()` method that creates a new array with all the elements of the subarrays concatenated to it recursively up to a specified depth.

```javascript
const arr = [1, 2, 3, [4, 5, 6, 7]];
console.log(arr.flat());

// Output: Array (7) [1,2,3,4,5,6,7]
```

The `flatMap()` method is the combination of the `map()` method followed by the `flat()` method. `flatMap()` first maps each element in an array using a mapping function and then flattens the results into a new array.

## ES2020

### BigInt

BigInt, one of the most anticipated features in JavaScript, is finally here. It allows a developer to have much greater integer representation in their JS code for data processing for data handling.

At the moment the maximum number you can store as an integer in JS is `pow(2, 53) - 1`. But BigInt allows you to go even beyond that.

### Dynamic import

Dynamic imports in JavaScript give you the option to import JS files dynamically as modules in your application natively. This is just like how you do it with Webpack and Babel at the moment.

```javascript
const module = await import('./file.js');
```

### Nullish Coalescing

Nullish coalescing adds the ability to truly check nullish values instead of falsey values. What is the difference between nullish and falsey values, you might ask?

In JavaScript, a lot of values are falsey, like empty strings, the number 0, undefined, null false, NaN, and so on.

However, a lot of times you might want to check if a variable is nullish - that is if it is either undefined or null, like when it's okay for a variable to have an empty string, or even a false value.

In that case, you'll use the new nullish coalescing operator `??`.

```javascript
const age = undefined ?? 28;
console.log(age);

// Output: 28
```

### Optional Chaining

Optional chaining syntax allows you to access deeply nested object properties without worrying if the property exists or not. If it exists, great! If not, undefined will be returned.

```javascript
const obj = {
    name: 'Adrian',
    age: 20,
    dog: {
        name: 'Scooby',
        age: 12,
    },
};

const dogName = obj.dog?.name;
const catName = obj.cat?.name;

console.log(dogName);
console.log(catName);

// Output: Scooby
// Output: undefined
```

### Promise.allSettled

The `Promise.allSettled` method accepts an array of Promises and only resolves when all of them are settled - either resolved or rejected.

This was not available natively before, even though some close implementations like `race` and `all` were available. This brings "Just run all promises - I don't care about the results" natively to JavaScript.

```javascript
const arr = [
    Promise.resolve(100),
    Promise.reject(null),
    Promise.reject(new Error('Oh No')),
];

Promise.allSettled(arr).then((res) => {
    console.log('All Promises Settled', res);
});

// Output: All Promises Settled (3) [{...}, {...}, {...}]
```

### globalThis

If you wrote some cross-platform JS code that could run on Node, in the browser env, and also inside web-workers, you'd have a hard time getting hold of the global object.

This is because it is `window` for browsers, `global` for Node, and `self` for web workers. If there are more runtimes, the global object will be different for them as well.

So you would have had to have your own implementation of detecting runtime and then using the correct global - that is, until now.

ES2020 brings us `globalThis` which always refers to the global object, no matter where you are executing your code:

```javascript
globalThis.setTimeout === window.setTimeout;
```

## ES2021

The latest version of ECMAScript. 12th edition was released in June 2021.

### String.prototype.replaceAll()

A new method on the String prototype makes it much easier to replace all instances of a sub-string, without resorting to a regex. The `replaceAll` method is a sequel to the `String.replace` method, which only replaces the first occurrence of the pattern with replacement.

```javascript
const str = 'xxyyzz';

console.log(str.replace('x', 'o'));
console.log(str.replaceAll('x', 'o'));

// Output: oxyyzz
// Output: ooyyzz
```

### Logical Assignment Operators

The new logical assignment operators `&&=`, `||=` and `??=` are quite similar to the existing logical operators and are quite useful for assigning default values to variables.

-   Logical OR assignment operator `||=`

The logical OR assignment operator is a short-circuit operation just like the logical OR operator `||`. The expression above is identical to `x || (x = y)`, which means that `y` will only be assigned to `x` if `x` is falsy. Otherwise, `x` retains its original value.

```javascript
const obj = {
    time: 50,
    title: '',
};

obj.time ||= 10;
console.log(obj.time);

obj.title ||= 'empty';
console.log(obj.title);

// Output: 50
// Output: empty
```

-   Logical AND assignment `&&=`

The logical AND assignment operator is the opposite of the logical OR assignment operator. In this case, `y` is only assigned to `x`, if and only if `x` is a truthy value. Otherwise, it retains its original value.

```javascript
let a = 1;
let b = 0;

a &&= 2;
console.log(a);

b &&= 2;
console.log(b);

// Output: 2
// Output: 0
```

-   Logical nullish assignment operator `??=`

The logical nullish operator only assigns `y` to `x` if `x` is nullish (null or undefined).

```javascript
const a = { time: 50 };

a.time ??= 10;
console.log(a.time);

a.speed ??= 25;
console.log(a.speed);

// Output: 50
// Output: 25
```

### Numeric Separator

The numeric separator simply improves the readability of large numbers by using the underscore `_` character to separate number groups, just like you use commas to separate numbers in writing. Consider the number `1200044555`. At first glance, it's quite difficult to decipher that this number is 1.2 billion and something.

```javascript
const billGatesNetWorth = 1_200_044_555;
```

### Promise.any()

The `Promise.any()` method is a new promise method that takes in a series of promises and resolves to the value of the first promise to successfully resolve. In other words, the `Promise.any` resolves successfully if any of the promises resolve and rejects if all promises reject.

```javascript
const pr1 = new Promise((resolve) =>
    setTimeout((resolve) => resolve, 300, 'faster')
);
const pr2 = new Promise((resolve) =>
    setTimeout((resolve) => resolve, 100, 'fastest')
);
const pr3 = new Promise((resolve) =>
    setTimeout((resolve) => resolve, 700, 'fast')
);
const promises = [pr1, pr2, pr3];

Promise.any(promises).then((value) => console.log(value));
```

Ok, so if you are here, you're awesome! Thanks for reading and watch out my new posts or project. Have a nice day!

#### Source

[https://www.javascripttutorial.net/es-next/](https://www.javascripttutorial.net/es-next/)
[https://www.freecodecamp.org/news/es5-to-esnext-heres-every-feature-added-to-javascript-since-2015-d0c255e13c6e/](https://www.freecodecamp.org/news/es5-to-esnext-heres-every-feature-added-to-javascript-since-2015-d0c255e13c6e/)
[https://blog.alexdevero.com/javascript-es2017-features/](https://blog.alexdevero.com/javascript-es2017-features/)
[https://www.freecodecamp.org/news/here-are-examples-of-everything-new-in-ecmascript-2016-2017-and-2018-d52fa3b5a70e/](https://www.freecodecamp.org/news/here-are-examples-of-everything-new-in-ecmascript-2016-2017-and-2018-d52fa3b5a70e/)
[https://flaviocopes.com/es2016/](https://flaviocopes.com/es2016/)
[https://css-tricks.com/new-es2018-features-every-javascript-developer-should-know/](https://css-tricks.com/new-es2018-features-every-javascript-developer-should-know/)
[https://medium.com/@bramus/javascript-whats-new-in-ecmascript-2018-es2018-17ede97f36d5](https://medium.com/@bramus/javascript-whats-new-in-ecmascript-2018-es2018-17ede97f36d5)
[https://www.javascript.christmas/2019/7](https://www.javascript.christmas/2019/7)
[https://www.freecodecamp.org/news/javascript-new-features-es2020/](https://www.freecodecamp.org/news/javascript-new-features-es2020/)
[https://blog.logrocket.com/new-es2021-features-you-may-have-missed/](https://blog.logrocket.com/new-es2021-features-you-may-have-missed/)
[https://developer.mozilla.org/](https://developer.mozilla.org/)
