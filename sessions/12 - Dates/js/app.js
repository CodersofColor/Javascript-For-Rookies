//create new date object
const before = new Date('February 1 2019 7:30:59');
const now = new Date();

//getting  year, months, day, times how date data
//year
console.log('getFullYear:', now.getFullYear());
//months
console.log('getMonth:', now.getMonth());
//date
console.log('getDate:', now.getDate());
//day
console.log('getDay:', now.getDay());
// hours
console.log('getHours', now.getHours());
//minutes
console.log('getMinutes', now.getMinutes());
//seconds
console.log('getSeconds', now.getSeconds());
//timestamp - number of miliseconds since 12am Jan 1st 1970
console.log('getTimeStamp', now.getTime());
//get date to string
console.log('get Date String:', now.toDateString());
//get time to string
console.log('get time string:', now.toTimeString());
//get local string
console.log('get local string:', now.toLocaleString());

//write to document
// document.write(now.toDateString());

const diff = now.getTime() - before.getTime();

console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);


console.log(mins, hours, days);

function cortney(){
  alert('cortney');
}
//convert timestamp
// console.log(new Date(35176116310));