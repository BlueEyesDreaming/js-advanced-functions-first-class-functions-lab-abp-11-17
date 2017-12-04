const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice([drivers.length-2],drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// const createFareMultiplier = function(fare, multiplier) {
//     return function(multiplier) {
//       return fare * multiplier;
//     }
//   }

const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)



// function selectDifferentDrivers(arrayOfDrivers, function(drivers)) {
// // const selectDifferentDrivers = function(arrayOfDrivers, function()) {
//   return arrayOfDrivers
// }
