---
title: Asynchronous functions in JavaScript (Async / Await)
slug: blog/asynchronous-functions
date: '2021-09-17'
description: Normal functions in JavaScript are synchronous - the caller waits until the callee is finished with its computation. On the other hand, asynchronous means that things can happen independently of the main program flow. Since ES2017 asynchronous functions are even simpler with the Async / Await syntax. Async functions are a combination of promises and generators, and basically, they are a higher level abstraction over promises. Async / Await is built on promises.
category: Advanced JavaScript
---

Normal functions in JavaScript are synchronous - the caller waits until the callee is finished with its computation. On the other hand, asynchronous means that things can happen independently of the main program flow. Since ES2017 asynchronous functions are even simpler with the Async / Await syntax. Async functions are a combination of promises and generators, and basically, they are a higher level abstraction over promises. Async / Await is built on promises.

### How it works

This is a simple example of async / await:

```javascript
const getData = async () => {
    await getFirstData();
    await getSecondData();

    console.log('getData() is done.');
};

getData();
console.log('Console log calls after async function.');
```

Console will look like:

```javascript
Console log calls after async function.
getData() is done.
```

As you can see. The asynchronous function will improve your skillset. You will use it very often.
