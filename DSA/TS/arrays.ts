// day 1 : using map, filter and reduce 

// Function to transform the array using map, filter, and reduce

function transformArray(arr : number[]) : number {
    if(arr.length == 1) return arr[0];

    return arr
        .filter(number => number % 2 !== 0)
        .map(number => number * number)
        .reduce((acc, number) => acc + number, 0 )
}

// Test the function
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result: number = transformArray(numbers);
// console.log(`Array: [${numbers}], Result: ${result}`); // result should be 165

// day 2

// Problem Statement
// Given an array of integers, return a new array with only the unique elements, removing any duplicates.

function removeDuplicates(arr: number[]): number[] {
    return [...new Set(arr)];
  }  

// Test case
const inputArray: number[] = [1, 2, 2, 3, 4, 4, 5];
const result: number[] = removeDuplicates(inputArray);

console.log(result); // Output: [1, 2, 3, 4, 5]

// Expected Output: [1, 2, 3, 4, 5]

// day 3

// Problem Statement
// Given an array of integers, find the second largest number in the array.

function findSecondLargest(arr: number[]): number | null {
    if (arr.length < 2) return null;

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (const num of arr) {
        if (num > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = num;
        } else if (num > secondLargest && num !== firstLargest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
} 