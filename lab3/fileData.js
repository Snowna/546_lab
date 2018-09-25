const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));// promisify 

function checkIsProperPath(path) {
    if (typeof path !== "string") {
        if (arguments.length !== 1) {
            throw "Error: Need One arguments";
        }
        if (typeof path !== 'string')
            throw "Error: You must provide a path as String";
    }
}

async function getFileAsString(path) {
    checkIsProperPath(path);
    return await fs.readFileAsync(path,'utf8')
}

async function getFileAsJSON(path) {
    checkIsProperPath(path);
    let stringData = await getFileAsString(path);
    let jsonData = JSON.parse(stringData);
    if (jsonData)
        return jsonData;
    else throw "Error: jsonpath went wrong";

}

async function saveStringToFile(path, text) {
    if (arguments.length !== 2) {
        throw "Error: Need two arguments. Path and text";
    }
    if (typeof path !== 'string' || typeof text !== 'string') {
        throw "You must provide path and text as strings";
    }
// var temp;
//     for(var i=0;i<text.length-1;i++){
//         if(text[i].indexOf('\\')!== -1){      
//             if(text[i+1].indexOf('n') !== -1 || text[i+1].indexOf('r') !== -1  || text[i+1].indexOf('t') !== -1 ){              
//                 temp[i] = 123;
//                 temp[i+1] = 123;
//                 console.log((text[i])); 
//             }
//         }      
//     }  
  //  text = text.replace(/\s+/g, ' ');
    await fs.writeFileAsync(path, text, 'utf8');
    return true;
}

async function saveJSONToFile(path, obj) {
    if (arguments.length !== 2) {
        throw "Error: Need two arguments. Path and text";
    }
    if (typeof path !== 'string' || typeof obj !== 'object') {
        throw "You must provide path and text as object";
    }
    await fs.writeFileAsync(path, JSON.stringify(obj),);
		return true;
 
}
module.exports = {
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile,
}
