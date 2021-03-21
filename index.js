const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue);


//const reducer = (accumulator, currentValue) => accumulator + currentValue;
// arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
//console.log(array1.reduce(reducer));
