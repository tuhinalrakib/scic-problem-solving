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