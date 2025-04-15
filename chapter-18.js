//Synchronous code function call : executes line-by-line, blocking further code execution until the function completes.
//Single Thred JavaScript:Yes

setTimeout(() => {
  console.log(
    "I wanted 3 Second of my life by looking at screen and doing nothing"
  );
}, 3000);

console.log(1);
setTimeout(() => {
  console.log(3);
}, 2000);
setTimeout(() => {
  console.log(1);
}, 2000);

for (let i = 1; i <= 6; i++) {
  setTimeout(() => {
    console.log("I am learning JavaScript");
  }, 2000 * i);
}

//4.0 milliseconds

/*
Event Loop is a loop that:

1.Runs synchronous code first.

2.Processes microtasks (Promises).

3.Executes one macrotask (Timers, I/O).

4.Repeats
*/

//Call Stack:	Tracks synchronous function calls (LIFO: Last-In-First-Out).
//Callback Queue:	Holds async callbacks (from setTimeout, DOM events, etc.).

/*
JavaScript is single-threaded but achieves async behavior via:

Delegate async tasks to external APIs.

Queue callbacks (Microtasks > Macrotasks).

Event Loop schedules callbacks when the stack is empty.
*/
