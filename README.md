# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @amphakarn/lotide`

**Require it:**

`const _ = require('@amphakarn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual(arrA, arrB): Tests if the two arrays are equal
* assertEqual(actual, expected): Tests the equivalence of two given primitive data types
* assertObjectsEqual(actual, expected): Tests if the two objects are equal
* countLetters(sentence): Returns a count of each letter occur in a given string
* countOnly(allItems, itemsToCount): Takes in an array of items and returns counts for specific items
* eqArrays(arrA, arrB): Compare two arrays and return boolean
* eqObjects(object1, object2): Compare two objects to find out if both objects have identical keys with identical values
* findKey(object, callback): Return the first key of a given object that the callback function returns a truthy value
* findKeyByValue(object, value): Return a key the match the given value
* head(arr): Return the first element of the given array
* letterPositions(string): Return index position(s) of each letter in the given sentence
* map(array, callback): Take in an array of string and a callback function and return an array of the first letter of each word
* middle(arr): Find and return the middle character(s) of an array based on the length of the array (return 1 character if odd and return 2 characters if even)
* tail(arr): Return a new array of element from index 1 to the rest.
* takeUntil(arrA, arrB): Takes in an array and a callback function and return items that the callback function provided return a truthy value.
* without(source, itemToRem): Takes in an array and a specified item to remove and return the leftover items