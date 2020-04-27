/* 
This code will run in the browswer. Since the modern browser support ES6, this code will display message in
the browser console
 */
const setTimeoutAsync = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello World");
        }, timeout);
    });
};

setTimeoutAsync(2000)
    .then((res) => { console.log(res) })
    .catch((err) => { console.log(err) });
