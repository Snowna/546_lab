function checkIsProperString(text) {
    if (typeof (text) !== "string") {
        if (typeof text == "undefined") {
            throw `${text} is not defined`
        }
        throw `${text || "provided variable"} is not a string`;
    }

}

function createMetrics(text) {
    checkIsProperString(text);
    var json = {};
    var v_list = 'aeiou';
    var totalVowels = 0;
    var totalConsonants = 0;
    var uniqueWords = 0;
    var longWords = 0;
    var wordOccurrences = {};
    //////// 
    var temp = text.toLowerCase();
    temp = temp.replace(/\\n/g, ' ').replace(/\\t/g, ' ');var totalNonLetters = temp.match(/[^a-zA-Z]/g).length;
    temp = temp.replace(/\s+/g, ' ').trim().replace(/[^a-zA-Z0-9/ -]/g, '');//lowercase and /n/t and symbol etc..
    temp = temp.replace(/-/g, ' ').replace(/ +/g, ' ')///dan yin hao  
    temp = temp.replace(/[0-9]/g, '').replace(/ +/g, ' ').replace(/(^\s*)|(\s*$)/g, "");//number
     var totalLetters = temp.match(/[a-zA-Z]/g).length;
     
     ////////
    var temp1 = temp.split(' ');//the real words
    var totalWords = temp1.length;
    averageWordLength = totalLetters / totalWords;
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] !== ' ') {
            if (v_list.indexOf(temp[i]) !== -1) {
                totalVowels += 1;
            }
            else totalConsonants += 1;
        }
    }
    // for (var i = 0; i < temp.length; i++) {
    //     if (temp[i].length >= 6) {
    //         longWords += 1;
    //     }
    //     if (!wordOccurrences[temp[i]]) {
    //         uniqueWords += 1;
    //         wordOccurrences[temp[i]] = 1;
    //     } else {
    //         wordOccurrences[temp[i]]++;
    //     }
    // }
    for (var i = 0; i < temp1.length; i++) {
        if (temp1[i].length >= 6) {
            longWords += 1;
        }
        if (!wordOccurrences[temp1[i]]) {
            uniqueWords += 1;
            wordOccurrences[temp1[i]] = 1;
        } else {
            wordOccurrences[temp1[i]]++;
        }
    }
    //////////////
    json["totalLetters"] = totalLetters;
    json["totalNonLetters"] = totalNonLetters;
    json["totalWords"] = totalWords;
    json["totalVowels"] = totalVowels;
    json["totalConsonants"] = totalConsonants;
    json["uniqueWords"] = uniqueWords;
    json["longWords"] = longWords;
    json["averageWordLength"] = averageWordLength;
    json["wordOccurrences"] = wordOccurrences;
    //return temp;
    return json;
}
module.exports = {
    createMetrics,
}