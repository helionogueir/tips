// Variables
let limit = 0
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/**
 * Example 01
 */
limit = 0
while (numbers[limit]) {
  console.log(`E1: ${numbers[limit++]}`)
}

/**
 * Example 02
 */
limit = 0
do {
  console.log(`E2: ${numbers[limit]}`)
} while (numbers[++limit])

/**
 * Example 03
 */
for (let i = 0; i < numbers.length; i++) {
  console.log(`E3: ${numbers[i]}`)
}

/**
 * Example 04
 */
for (let i in numbers) {
  console.log(`E4: ${numbers[i]}`)
}

/**
 * Example 05
 * Case some number in array "number" is equals 0 (Zero), the loop stops.
 * If array "number" were [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] the loop bellow does't work.
 */
for (let i = 0, number; number = numbers[i++];) {
  console.log(`E5: ${number}`)
}

/**
 * Example 06
 * This example is ASYNC.
 */
numbers.forEach(function (number) {
  console.log(`E6: ${number}`)
})

/**
 * Example 07
 * This example is ASYNC.
 */
numbers.forEach(number => console.log(`E7: ${number}`))
