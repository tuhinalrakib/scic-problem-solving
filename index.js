// Problem 1: Reverse a string
function reverseString(str){
    const revString = str.split("").reverse().join("")
    return revString
}
console.log(reverseString("Hello"))

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

function isPalindrome(string){
    const newStr = string.split("").reverse().join("")
    return string === newStr
}

console.log(isPalindrome("madam"))
console.log(isPalindrome("hello"))

// Problem 4: Find the Maximum Number
function maximumNumber(array){
    let maxNuum = 0
    // 1 no way
    // for(let num of array){
    //     if(maxNuum < num){
    //         maxNuum = num
    //     }
    // }

    // 2no way
    array.map(num=>{
        if(maxNuum < num){
            maxNuum = num
        }
    })

    return maxNuum
}

console.log(maximumNumber([1,20,3,4,5]))
console.log(maximumNumber([5, 1, 9, 3]))

//Problem 5: Remove Duplicates from an Array
function removeDuplicate(array){
    let i = 0;
    const newArray = []
    newArray.push(array[0])
    for (let j = 1 ; j<array.length;j++){
        if(array[i] != array[j]){
            newArray.push(array[j])
        }
        i++
    }
    return newArray
}

console.log(removeDuplicate([1,4,4,3]))
console.log(removeDuplicate([1, 2, 2, 3, 4, 4]))

// Problem 6: Sum of All Numbers in an Array
function sumOfArrayNumbers(array){
    let sum = 0
    array.map(num=> sum += num)
    return sum
}

console.log(sumOfArrayNumbers([1, 2, 3, 4]))

// Problem 7: Find Even Numbers in an Array
function evenNumbers(array){
    const eveNum = array.filter(num=> num%2 === 0)
    return eveNum
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6]))

// Problem 8: Write a function that capitalizes the first letter of each word in a string.
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

// Problem 9: Find the Factorial of a Number
function factorialNumber(num){
    let newNum = 1
    while(num > 1){
        newNum *= num
        num -= 1
    }
    return newNum
}

console.log(factorialNumber(5))

// Problem 10: PingPong Challenge
function pingPong(){
    let newArr = []
    for(let i=1;i<21;i++){
        if(i % 3 === 0 && i % 5 === 0){
            newArr.push("PingPong")
        }else if(i % 3 === 0){
            newArr.push("Ping")
        }else if(i % 5 === 0){
            newArr.push("Pong")
        }else{
            newArr.push(i)
        }
    }
    return newArr.join(" , ")
}

console.log(pingPong())