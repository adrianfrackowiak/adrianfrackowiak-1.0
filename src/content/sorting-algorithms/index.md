---
title: Sorting algorithms you should've known
slug: blog/sorting-algorithms
date: '2021-06-21'
description: In this post, I'm going to show you the most common sorting algorithms in JavaScript. It's important to know them because can be useful in your future projects or at work. Sorting algorithms are instructions given to a computer to arrange elements in a particular order.
category: Algorithms
---

In this post, I'm going to show you the most common sorting algorithms in JavaScript. It's important to know them because can be useful in your future projects or at work. Sorting algorithms are instructions given to a computer to arrange elements in a particular order.

### Bubble sort

The bubble sort compares every two adjacent values and swaps them if the first one is bigger than the second one. The average time complexity is O(n²).

```javascript
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }

    return arr;
};
```

1. Iterating through the array and compare two adjacent values
2. Swap them as required
3. Continue till the end of the array
4. Repeat the loop until the array is sorted

Example:

```javascript
const array = [34, 22, 31, 5, 64, 23, 11, 10];
bubbleSort(array);
```

Output:

```javascript
[5, 10, 11, 22, 23, 31, 34, 64];
```

### Selection sort

The selection sort algorithm is pretty simple to understand. It finds the minimum value and places it in the first position, then finds the second minimum value and places it in the second position. The average time complexity is O(n²).

```javascript
const selectionSort = (arr) => {
    let min;
    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }

    return arr;
};
```

1. Finds the minimum value of the array and places it in the first position
2. Finds the next minimum value and places it to the next
3. Repeat it for the rest of the array elements

Example:

```javascript
const array = [12, 6, 9, 5, 33, 47, 23, 11];
selectionSort(array);
```

Output:

```javascript
[5, 6, 9, 11, 12, 23, 33, 47];
```

### Insertion sort

The main concept of the insertion sort is that there is a portion of the array that is always sorted and a section that remains unsorted. The average time complexity is O(n²).

```javascript
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j > -1; j--) {
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }

    return arr;
};
```

1. Compare second value with the first value, and swap if required
2. Iterate through the rest of the array and for each element iterate through the sorted portion and insert this element where it needs to be, by making comparisons.
3. Repeat it until the array is sorted

Example:

```javascript
const array = [32, 12, 9, 55, 43, 47, 23, 2];
insertionSort(array);
```

Output:

```javascript
[2, 9, 12, 23, 32, 43, 47, 55];
```

### Quicksort

The quicksort is the most used algorithm. It makes use of recursion. Recursion means we call the function from within the same function. This algorithm picks an item, called a pivot, the value at the middle of the array, and then it makes the same with a smaller array and bigger array.

```javascript
const quickSort = (arr) => {
    const list = [...arr];

    if (list.length < 2) {
        return list;
    }

    const pivot = list[Math.floor(list.length / 2)];

    const smaller = list.filter((item) => item < pivot);
    const bigger = list.filter((item) => item > pivot);

    return [...quickSort(smaller), pivot, ...quickSort(bigger)];
};
```

1. Select a pivot from the array.
2. Perform the partition operation which will result in an array with values lesser than the pivot on the left and greater on the right.
3. Repeat the first two steps for each subarray (left and right) until the arrays are completely sorted.

Example:

```javascript
const array = [53, 23, 1, 44, 83, 32, 39, 2];
quickSort(array);
```

Output:

```javascript
[1, 2, 23, 32, 39, 44, 53, 83];
```
