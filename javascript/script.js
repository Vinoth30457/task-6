"use strict";

// 11. Write a program that takes two arrays and finds their intersection using Sets.
// Sample Input:   const arr1 = [1, 2, 3, 4, 5];
//                             const arr2 = [3, 4, 5, 6, 7];
// Sample Output:  [3, 4, 5]

const intersectionFn = (arr1, arr2) => {
  const array1 = new Set(arr1);
  const array2 = new Set(arr2);
  let intersection = [];
  for (let element of array2) {
    if (array1.has(element)) {
      intersection.push(element);
    }
  }
  console.log(intersection);
  console.log("-------------------------");
};
intersectionFn([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);

// 12 Write a program that takes an array containing nested arrays and flattens it into a single array using the array methods.
// Sample Input:   const arr = [1, [2, 3], [4, 5, [6, 7]]];
// Sample Output: [1, 2, 3, 4, 5, 6, 7]

const nestedToArr = (arr) => {
  console.log(arr.flat(2));
  console.log("-------------------------");
};
nestedToArr([1, [2, 3], [4, 5, [6, 7]]]);

// 13 Write a program that takes an array containing both truthy and falsy values and removes the falsy values using  the array methods.
// Sample Input:   const arr = [0, "hello", "", 42, false, "world", null, true, undefined];
// Sample Output: ["hello", 42, "world", true]

const removeFalsyValue = (arr) => {
  console.log(arr.filter(Boolean));
  console.log("-------------------------");
};
removeFalsyValue([0, "hello", "", 42, false, "world", null, true, undefined]);

// 14. Write a program that takes an array of numbers and returns an array with only the unique elements without using the array methods.
// Sample Input:   const arr = [1, 2, 2, 3, 4, 4, 5];
// Sample Output: [1, 2, 3, 4, 5]

const uniqueValues = (arr) => {
  const unique = [...new Set(arr)];
  console.log(unique);
  console.log("-------------------------");
};
uniqueValues([1, 2, 2, 3, 4, 4, 5]);

// 15. Write a program that takes an array of numbers and filters out the prime numbers using the array methods.
// Sample Input:   const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// Sample Output: [2, 3, 5, 7]

const filterPrimes = (arr) => {
  const filterArr = arr.filter((num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  });
  console.log(filterArr);
  console.log("-------------------------");
};
filterPrimes([2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 16 Write a program that takes an object and checks if a specific property exists
// Sample Input:   const obj = { name: "John", age: 30, city: "New York" };
// const propertyName = "age";
// Sample Output: Property "age" exists: true

const propertyExists = (obj, property) => {
  console.log(obj.hasOwnProperty(property));
  console.log("-------------------------");
};
propertyExists({ name: "John", age: 30, city: "New York" }, "age");

// 17. Write a program that takes an object containing some properties with undefined values and removes those properties
// Sample Input:  const obj = { name: "John", age: undefined, city: "New York" };
// Sample Output:  { name: "John", city: "New York" }

const removeUndefined = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === undefined) {
      delete obj[key];
    }
  }
  console.log(obj);
  console.log("-------------------------");
};
removeUndefined({ name: "John", age: undefined, city: "New York" });

// 18. Write a program that takes an array containing nested arrays and destructures specific elements from the nested arrays.
// Sample Input const arr = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];
// Sample Output: First Element of Nested Array: 1
// Second Element of Nested Array: 4
// Third Element of Nested Array:

const deStructures = (arr) => {
  const [First, second, third] = arr;
  console.log("firstElement : " + First[0]);
  console.log("secondElement : " + second[1]);
  console.log("thirdElement : " + third[2]);
  console.log("-------------------------");
};
deStructures([
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
]);

// 19. Write a program that takes an object and extracts properties with renamed variables using destructuring assignment.
// Sample Input:  const user = { name: "John", age: 30 };
// Sample Output: User Name: John
// User Age: 30

const deStructuresObj = (obj) => {
  const { name: UserName, age: UserAge } = obj;
  console.log({ UserName, UserAge });
  console.log("-------------------------");
};
deStructuresObj({ name: "John", age: 30 });

// 20. Write a program that takes a function with an object parameter and provides default values for missing properties using destructuring assignment.
// Sample Input:
//  function displayInfo({ name = "Anonymous", age = 25 }) {
//   console.log(`Name: ${name}`);
//   console.log(`Age: ${age}`);
// }
// const obj = { name: "John" };
// Sample Output:
//  Name: John
//  Age: 25
function displayInfo({ name = "Anonymous", age = 25 }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
}
displayInfo({ name: "John" });
