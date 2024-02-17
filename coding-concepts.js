// UNIT 2 ASSESSMENT: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Alpha 2024"
//console.log(cohort.split(" "))

// a) Your answer: "Alpha" "2024"
// b) Verify and explain: [ 'Alpha', '2024' ]. so im right but wrong! had to remember that .split returns a new array of the string. it also puts the string into a substrings but within side a new array. 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
//console.log(greeter("LEARN Student"))

// a) Your answer: undefined. because name is the parameter not the variable. and there is no value to a variable with name. so using string interpolation wont work.
// b) Verify and explain: got this one right. these is just no value here with a name when you are console logging. you would need a variable called name with a value for this to work. 

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer: all the odd numbers. [11, 13, 15]
// b) Verify and explain: awesome! so my understanding of this is since its using hof .filter it is then taking each number(element) through the equation number % 2 !== 0 and leaves us with the odd numbers. if it was ===0 it would give us the even numbers


// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 //console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: So this one is telling us to look at the key which is languages by using dot notation and then specifically what is at [0] index of that key. which gives the value JavaScript since its at the [0] index of the key languages

// --------------------5) What will this log?

class Learn {
  constructor(name, cohort, year) {
    this.student = name
    this.cohort = cohort //"Alpha"
    this.year = year //2024
  }
}
const learnStudent = new Learn("George","Bravo", 2040)
console.log(learnStudent)

// a) Your answer: {student: George cohort: Alpha year: 2024}
// b) Verify and explain: so it printed Learn { student: 'George', cohort: 'Alpha', year: 2024 }. i was not fully right becuase it also printed out Learn. from what i remember on classes is when you are setting a variable learnStudent = new Learn this is giving you the option to change what you have in the class but it depends on what you have the parameters set to in the constructor. so since name is the only parameter thats why its only changing this.student. i beleive if you add cohort and year as parameters in the constructor and then set the value in the keys to cohort and year. you would be able to add onto line 59 to change it all. im going to try it. Output for that is //Learn { student: 'George', cohort: 'Bravo', year: 2040 }
