function checkIsProperObject(val, variableName) {
    if (typeof val !== "object") {
        if (typeof val == "undefined") {
            throw `${variableName} is not defined`
        }
        throw `${variableName || "provided variable"} is not a object`;
    }
    if (val.constructor !== Object) {
        throw `${variableName || "provided variable"} is not a object`;
    }
}
function checkIsProperArray(val, variableName) {
    if (typeof val !== "object") {
        if (typeof val == "undefined") {
            throw `${variableName} is not defined`
        }
        throw `${variableName || "provided variable"} is not a array`;
    }
    if (val.constructor !== Array) {
        throw `${variableName || "provided variable"} is not a array`;
    }

}
function checkIsProperString(val, variableName) {
    if (typeof (val) !== "string") {
        if (typeof val == "undefined") {
            throw `${variableName} is not defined`
        }
        throw `${variableName || "provided variable"} is not a string`;
    }

}

module.exports = {
    deepEquality: (obj1, obj2) => {
        checkIsProperObject(obj1, "obj1")
        checkIsProperObject(obj2, "obj2")
        var aProps = Object.getOwnPropertyNames(obj1);
        var bProps = Object.getOwnPropertyNames(obj2);
        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length != bProps.length) {
            return false;
        }
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
            // If values of same property are not equal,
            // objects are not equivalent
            if (obj1[propName] !== obj2[propName]) {
                return false;
            }
        }
        // If we made it this far, objects
        // are considered equivalent
        return true;
    },
    uniqueElements: (arr) => {
        checkIsProperArray(arr, "arr");

        var temp = [];
        for (var i = 0; i < arr.length; i++) {
            if (temp.indexOf(arr[i]) == -1) {
                temp.push(arr[i]);
            }
        }
        return temp.length;
    },
    countOfEachCharacterInString: (str) => {
        checkIsProperString(str, "str")
        var json = {};
        for (var j = 0; j < str.length; j++) {
            if (!json[str.charAt(j)]) {
                json[str.charAt(j)] = 1;
            } else {
                json[str.charAt(j)]++;
            }
        }
        return json;
    },
}
