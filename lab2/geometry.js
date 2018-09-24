function checkIsProperNumber(val, variableName) {
    //if (typeof val !== "number") {
      //  throw `${variableName || "provided variable"} is not a number`;
    //}
    if (isNaN(val)) {
        throw `${variableName || "provided variable"} is not a number`;
    }
    if (val <= 0) {
        throw `${variableName || "provided variable"} should over 0`;
    }
    if (val > Number.MAX_VALUE) {
        throw `${variableName || "provided variable"} is out of range`;
    }
}

module.exports = {
    volumeOfRectangularPrism: (length, width, height) => {
        checkIsProperNumber(length, "Length");
        checkIsProperNumber(width, "Width");
        checkIsProperNumber(height, "Height");

        checkIsProperNumber(length * width * height, "Volume of rectangular");
        return length * width * height;
    },
    surfaceAreaOfRectangularPrism: (length, width, height) => {
        checkIsProperNumber(length, "Length");
        checkIsProperNumber(width, "Width");
        checkIsProperNumber(height, "Height");

        checkIsProperNumber((length * width + length * height + width * height) * 2, "Surface of rectangular");
        return (length * width + length * height + width * height) * 2;
    },
    volumeOfSphere: (radius) => {
        checkIsProperNumber(radius, "Radius");

        checkIsProperNumber((4 / 3) * Math.PI * radius * radius * radius, "Volume of sphere");
        return (4 / 3) * Math.PI * radius * radius * radius;
    },
    surfaceAreaOfSphere: (radius) => {
        checkIsProperNumber(radius, "Radius");

        checkIsProperNumber(4 * Math.PI * radius * radius, "Surface of sphere");
        return 4 * Math.PI * radius * radius;
    },
}