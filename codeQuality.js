// level {1}
// Q-Re-write the below code to better code quality standards.

// ```
// async function GET_daTA() {
//   let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let DATA = await r.json();
//   return DATA;
// }



async function GET_daTA() {
  let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let DATA = await r.json();
  return DATA;
}
