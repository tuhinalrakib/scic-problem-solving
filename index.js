// Problem 1: Write a function that capitalizes the first letter of each word in a string.
function capitalize(str) {
    const strArray = str.split(" ")
    const newArray = strArray.map(string => {
        const capString1 = string.slice(0, 1).toUpperCase()
        const capString2 = string.slice(1, string.length)
        const capWordString1 = capString1 + capString2
        return capWordString1
    })

    return newArray.join(" ")
}

console.log(capitalize("hello world"))

// Problem 2: Count Vowels in a String
function CountVowels(str){
    const strArray = str.split("")
    let count = 0
    strArray.map(string=>{
        if(string === "a" || string === "e" || string === "i" || string === "o" || string === "u"){
            count++
        }
    })
    return count
}

console.log(CountVowels("programming"))

// Problem 3: Check for Palindrome

// function isPalindrome(string){
//     const 
// }
const str = "madam"
let j = str.length-1
for(let i=0;i<str.length/2-1;i++){
    console.log(str[i])
    if(j != str.length/2){
        
    }
}

/**
 * Problem 3: Check for Palindrome
Write a function that checks if a string is a palindrome (reads the same forward and backward).

Example:

Input: "madam"
Output: true
Input: "hello"
Output: false


Problem 4: Find the Maximum Number
Write a function that takes an array of numbers and returns the largest number.

Example:

Input: [5, 1, 9, 3]
Output: 9


Problem 5: Remove Duplicates from an Array
Write a function that removes all duplicate numbers from an array.

Example:

Input: [1, 2, 2, 3, 4, 4]
Output: [1, 2, 3, 4]


Problem 6: Sum of All Numbers in an Array
Write a function that returns the sum of all numbers in an array.

Example:

Input: [1, 2, 3, 4]
Output: 10


Problem 7: Find Even Numbers in an Array
Write a function that returns all even numbers from a given array.

Example:

Input: [1, 2, 3, 4, 5, 6]
Output: [2, 4, 6]


Problem 8: Capitalize First Letter of Each Word
Write a function that capitalizes the first letter of each word in a string.

Example:

Input: "hello world"
Output: "Hello World"


Problem 9: Find the Factorial of a Number
Write a function that calculates the factorial of a number using a loop.

Example:

Input: 5
Output: 120


Problem 10: PingPong Challenge
Write a function that prints numbers from 1 to 20.

Example:

For multiples of 3, print "Ping"
For multiples of 5, print "Pong"
For multiples of both 3 and 5, print "PingPong"
If the number is not a multiple of 3 or 5, print the number itself
Example Output:

1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..

 */