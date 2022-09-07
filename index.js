// Code your solution in this file!
const returnFirstTwoDrivers = (array)=>{
    return array.slice(0,2);
}

const  returnLastTwoDrivers = (array)=>{
    return array.slice(array.length-2,array.length);
}
console.log(returnLastTwoDrivers([0,1,2]));

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(number){
    return (function(x){
        return x * number;
    })
}

const fareDoubler = (number)=>{
    return createFareMultiplier(number)(2);
}
const fareTripler = (number)=>{
    return createFareMultiplier(number)(3);
}

function selectDifferentDrivers(driversArray, callback){
    if(callback ===  selectingDrivers[0]){
        return callback(driversArray);
    }
    return callback(driversArray);
}
