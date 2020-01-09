// Variables
let name = 'John'
let age = 18

/**
 * Example 01
 */
function sayMyName(name) {
  console.log(`E1: My name is ${name}`)
}
sayMyName(name)

/**
 * Example 02
 */
const sayMyNameArrowFunction = name => console.log(`E2: My name is ${name}`)
sayMyNameArrowFunction(name)

/**
 * Example 03
 */
function WhoAmI(name) {
  return function (age) {
    console.log(`E3: My name is ${name}, and I am ${parseInt(age)} years old`)
  }
}
WhoAmI('John')(18)

/**
 * Example 04
 */
const WhoAmIArrowFunction = name => age => console.log(`E4: My name is ${name}, and I am ${parseInt(age)} years old`)
WhoAmIArrowFunction('John')(18)

/**
 * Example 05
 */
function sayMyNameIn(name, milliseconds) {
  setTimeout(function () {
    console.log(`E5: My name is ${name}`)
  }, milliseconds)
}
sayMyNameIn(name, 1000)

/**
 * Example 06
 */
const sayMyNameInArrowFunction = (name, milliseconds) => setTimeout(() => console.log(`E6: My name is ${name}`), milliseconds)
sayMyNameInArrowFunction(name, 1000)

/**
 * Example 07
 */
function WhoAmIIn(name, milliseconds) {
  return function (age) {
    setTimeout(function () {
      console.log(`E7: My name is ${name}, and I am ${parseInt(age)} years old`)
    }, milliseconds)
  }
}
WhoAmIIn('John', 1000)(18)

/**
 * Example 08
 */
const WhoAmIInArrowFunction = (name, milliseconds) => age => {
  setTimeout(() => {
    console.log(`E8: My name is ${name}, and I am ${parseInt(age)} years old`)
  }, milliseconds)
}
WhoAmIInArrowFunction('John', 1000)(18)
