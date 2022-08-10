// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers) {
   return drivers.slice(-2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(n) {
    return function(){return n*5};

}

function fareDoubler(n){
    return n*2;
};

function fareTripler(n){
    return n*3;
};

function selectDifferentDrivers(drivers,param2){
    return param2(drivers);
    //console.log(`param2 is : ${param2}.`);

 //if (param2 = returnFirstTwoDrivers) {
   // console.log(`In function, we've selected first two drivers`);
    //return param2(drivers)
 //};
 //if (param2 = returnLastTwoDrivers()) {
   // console.log(`In function, last two drivers are : ${returnLastTwoDrivers(drivers)}.`);
   // return param2(drivers);
 //else return returnLastTwoDrivers(theDrivers);
 
};

console.log("Doing selectLastDrivers test....");
console.log(`The last two drivers are given as : ${returnLastTwoDrivers(drivers)}.`);


console.log("Doing selectDiffDrivers tests....");
let myTest = selectDifferentDrivers(drivers, returnLastTwoDrivers);
console.log(`Selecting the last 2 drivers gives : ${myTest}.`);


