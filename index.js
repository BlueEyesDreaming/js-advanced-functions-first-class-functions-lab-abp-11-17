const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice([drivers.length-2],drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)



const selectDifferentDrivers = function(arrayOfDrivers, funct) {
  console.log(arrayOfDrivers)
  console.log(funct)
  if (funct === returnFirstTwoDrivers()) {
    return returnFirstTwoDrivers()
  } else if (funct === returnLastTwoDrivers()) {
    return returnLastTwoDrivers()
  }
}
