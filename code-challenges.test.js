// UNIT 2 ASSESSMENT: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

//Yarn template
// describe("functionName", () => {
//     it("what does the function do?", () => {
//         expect(functionName()).toEqual(output)
//     })
// })

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// describe("multiply3", () => {
//     it("multiplies each element in the array by 3 and returns in an array", () => {
//         const numbersArray1 = [6, 7, 8, 9, 10]
//         // Expected output: [18, 21, 24, 27, 30]
//         const numbersArray2 = [24, 27, 30, 33, 36]
//         // Expected output: [72, 81, 90, 99, 108]
//         expect(multiply3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
//         expect(multiply3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
//     })
// })
//ReferenceError: multiply3 is not defined

// b) Create the function that makes the test pass.

// input: array of numbers
// output: array of numbers multiplied by 3
// create a fxn that takes in an array and maps through each element.
// returns each element multiplied by 3 

const numbersArray1 = [6, 7, 8, 9, 10] 
const numbersArray2 = [24, 27, 30, 33, 36] 

const multiply3 = (array) => {
    return array.map((value) => {
        return value * 3
    })
}
console.log(multiply3(numbersArray1)) //output: [ 18, 21, 24, 27, 30 ]
console.log(multiply3(numbersArray2)) //output: [ 72, 81, 90, 99, 108 ]

// Explain your code: I created a function that maps through each element of the array and takes each element and multiplies it by 3. giving the new array with the output on lines 44 and 45. 

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// describe("divisibleby3", () => {
//     it("take the object as argument and decides if the number is evenly divivisble by 3", () => {
//         const object1 = { number: 15 }
//         // Expected output: "15 is divisible by three"
//         const object2 = { number: 0 }
//         // Expected output: "0 is divisible by three"
//         const object3 = { number: -7 }
//         // Expected output: "-7 is not divisible by three"
//         expect(divisibleby3(object1)).toEqual("15 is divisible by three")
//         expect(divisibleby3(object2)).toEqual("0 is divisible by three")
//         expect(divisibleby3(object3)).toEqual("-7 is not divisible by three")
//     })
// })
//ReferenceError: divisibleby3 is not defined

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// // b) Create the function that makes the test pass.

// input: object with a key that is a number
// output: a string that tells us if the number is evenly divisible by three
// create a fxn that takes the object as a parameter and iterates through the value given as the argument
// return whether that number is evenly divisible by 3. using modulo operator 

const divisibleby3 = (object) => {
    if (object.number % 3 === 0) { 
        return `${object.number} is divisible by three` 
    } else {
        return `${object.number} is not divisible by three`
    }
}
console.log(divisibleby3(object1)) //output: 15 is divisible by three
console.log(divisibleby3(object2)) //output: 0 is divisible by three
console.log(divisibleby3(object3)) //output: -7 is not divisible by three
//Expected: "15 is divisible by three"   Received: "undefined is divisible by three". kept getting this within my test. and was wondering why. figured it out because i was putting this.number instead of object.number. then remembered i had the parameter object! 

// Explain your code: the code above uses a condition that will take the key:number and the value: 15, 0 , 7 and takes it through the equation to tell us if that number is divisible by three or not. 

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// describe("capArray", () => {
//     it("takes in array of strings and returns array of strings with all capitalized words", () => {
//         const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
//         // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//         const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
//         // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
//         expect(capArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect(capArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//     })
// })
// ReferenceError: capArray is not defined

// b) Create the function that makes the test pass.

// input: Array of strings
// output: Array of strings with each word capitalized
// create a fxn that maps through each element of the array. takes the 0 index of that element and uppercases that letter. 
// combine that index with the rest of the word to the capitilized letter
// return the new array.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

const capArray = (array) => {
    return array.map(letter => letter[0].toUpperCase() + letter.slice(1))
}

console.log(capArray(randomNouns1)); //output: [ 'Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew' ]
console.log(capArray(randomNouns2)); //output: [ 'Temperature', 'Database', 'Chopsticks', 'Mango' ] 

// Explain your code: used a hof on this one! I took my parameter array and used .map to map through the array. then i set the parameter letter to take the first letter of each word [0] and uppercase the first letter of each word. then i used .slice with index [1] to add the rest of the letters back to the uppercase letters. used (1) so it started at the second character. at first i was using (0) and in my test it was giving me. [ 'Sstreetlamp', 'Ppotato', 'Tteeth', 'Cconclusion', 'Nnephew' ] [ 'Ttemperature', 'Ddatabase', 'Cchopsticks', 'Mmango' ]. 
