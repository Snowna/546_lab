const questionOne = function questionOne(arr) {
    // Implement question 1 here
    return arr[0] * arr[0] + arr[1] * arr[1] + arr[2] * arr[2]
}

const questionTwo = function questionTwo(num) {
    // Implement question 2 here
    if (num === 0) return 0;
    if (num === 1) return 1;
    return questionTwo(num - 1) + questionTwo(num - 2)
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    var v_list = 'aeiouAEIOU';
    var v_count = 0;

    for (var x = 0; x < text.length; x++) {
        if (v_list.indexOf(text[x]) !== -1) {
            v_count += 1;
        }
    }
    return v_count;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    if (num < 0) return "NaN";
    else if (num === 1) return 1;
    else {
        var result = 1;
        for (var i = 1; i <= num; i++) {
            result *= i;
        }
    }
    return result
}

module.exports = {
    firstName: "Xuena",
    lastName: "Zhang",
    studentId: "10429679",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};