const time = new Date();
const time2 = new Date('2022-03-25');
const time3 = new Date(2018, 11);
const time4 = new Date(99, 11, 24); // Fri Dec 24 1999 00:00:00 GMT+0100 (Ora standard dell’Europa centrale)
const time5 = new Date(9, 11, 24); // Fri Dec 24 1909 00:00:00 GMT+0100 (Ora standard dell’Europa centrale)
const time6 = new Date(0); // Thu Jan 01 1970 01:00:00 GMT+0100 (Ora standard dell’Europa centrale)


console.log(time6);

const time7 = new Date();
console.log(time7.toDateString()); // Mon Aug 21 2023

const time8 = new Date();
console.log(time8.toUTCString()); // Mon, 21 Aug 2023 15:20:48 GMT

const time9 = new Date();
console.log(time9.toISOString()); // 2023-08-21T15:21:59.794Z

