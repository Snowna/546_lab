const geom = require("./geometry");
const util = require("./utilities");


//Geometry: Question One

try {
    volumeOfRectangular = geom.volumeOfRectangularPrism(1,2,3);
    console.log(volumeOfRectangular);
} catch (error) {
    console.log(error)
}

//Geometry: Question Two
try {
    surfaceAreaOfRectangular = geom.surfaceAreaOfRectangularPrism(1, 1, 1);
    console.log(surfaceAreaOfRectangular);
} catch (error) {
    console.log(error)
}
//Geometry: Question Three
try {
    volumeOfSphere = geom.volumeOfSphere(1);
    console.log(volumeOfSphere);
} catch (error) {
    console.log(error)
}
//Geometry: Question Four
try {
    surfaceAreaOfSphere = geom.surfaceAreaOfSphere(1);
    console.log(surfaceAreaOfSphere);
} catch (error) {
    console.log(error)
}

//Utilities: Question One

try {
    const first = 2;
    const second = { b: 3, a: 2 };
    const third = { a: 2, b: 3 };
    deepEquality = util.deepEquality(first, second);
    console.log(deepEquality);
    console.log(util.deepEquality(first, third)); // false
    console.log(util.deepEquality(second, third)); // true
} catch (error) {
    console.log(error)
}
//Utilities: Question Two

try {
    const testArr = ["a", "a", "b", "a", "b", "c", "2" ,2];
    console.log(util.uniqueElements(testArr)); // outputs 3
}catch(error){
    console.log(error)
}

//Utilities: Question Three

try {
    const test = "Hello, the pie is in the oven!";
    const charMap = util.countOfEachCharacterInString(test);
    console.log(charMap);
} catch (error) {
    console.log(error)
}

