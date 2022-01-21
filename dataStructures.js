// level {1}
// Q1. Convert [1, 2, 3] to [2, 3, 4] using one line of code.
// Output should be [2, 3, 4]

console.log([1,2,3].map(e=>e+1))

//2. Calculate total of all the numbers in array [1, 2, 3] using one line of code.
//Output should be a number: 6

console.log(arr=[1, 2, 3].reduce((sum=0,e)=>sum+e))

// 3. Print all the properties of the object along with value {name: 'Elie', rank: 'Pro'}.
// Output should be a string: "name: Elie, rank: Pro"

console.log(JSON.stringify({name: 'Elie', rank: 'Pro'}))
