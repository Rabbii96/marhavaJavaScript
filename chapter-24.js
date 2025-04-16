//Data persists even after the browser is closed.	Data is cleared when the browser tab or window is closed.


localStorage.setItem('mode', 'dark');
console.log("Mode set to:", localStorage.getItem('mode'));


localStorage.setItem('mode', 'light');
console.log("Mode set to:", localStorage.getItem('mode'));



sessionStorage.setItem('userToken', 'abcd1234');
const token = sessionStorage.getItem('userToken');
console.log("User Token:", token);

localStorage.setItem('userName', 'Alex');
console.log("User Name stored:", localStorage.getItem('userName'));
localStorage.removeItem('userName');
console.log("User Name after removal:", localStorage.getItem('userName'));



window.history.go(-2);