// MITAS -C

function checkContent(str1, str2) {
  if (str1.length !== str2.length) return false;

  const sort = (str) => str.split("").sort().join("");

  return sort(str1) === sort(str2);
}

console.log(checkContent("mitgroup", "gmtiprou"));

// MITASK-B
// function countDigits(str) {
//     let count = 0;
//     for (let char of str) {
//         if (!isNaN(char) && char !== ' ') count++;
//     }
//     return count;
// }

// console.log(countDigits("ad2a54y79wet0sfgb9"));

// MITASK-A
// function countLetter(letter, word) {
//     let count = 0;

//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         };
//     };

//     return count;
// };

// console.log(countLetter("e", "unbelievable"));

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yahshi talabal boling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "ozingizga ishlashni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi" // 60
// ];

// // CALLBACK function
// function maslahatBering(a, callback) {
//     if (typeof a != "number") callback ("Insert a number", null); else if (a <= 20) callback(null, list[ø]);
//     else if (a < 20 && a <= 30) callback(null, list[1]);
//     else if (a < 30 && a <= 40) callback(null, list[2]);
//     else if (a < 40 && a <= 50) callback(null, list[3]);
//     else if (a < 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function () {
//             callback(null, list[5]);
//         }, 1000);
//     }
// }

// console. log ("passed here 0"); 
// maslahatBering(70, (err, data) => {
//     if (err) console. log ("ERROR:", err);
//     else {
//         console. log (data) ;
//     }
// });
// console. log("passed here 1");


// ASYNC function
// async function maslahatBering(a) {
//     if(typeof a !== 'number') throw new Error("insert a number");
//     else if(a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//             resolve(list[5]);
//             }, 5000);
//         });
//     }
// };

// CALL VIA THEN/CATCH
// console.log('passed here 0');
// maslahatBering(25)
//     .then(data => {
//         console.log('javob:', data);
//     })
//     .catch(err => {
//         console.log("ERROR:", err);
//     });

// console.log('passed here 1');


// CALL VIA ASYNC/WAIT
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();