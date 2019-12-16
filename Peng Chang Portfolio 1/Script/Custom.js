function StringWalker(word) {
    let value = "";
    for (let loop = 0; loop < word.length; loop++) {
        value += `The letter in position ${loop} is ${word.substr(loop, 1)} \n`;
    }
}
function StringWalker1(word) {
    let value = "";
    for (let loop = word.length - 1; loop >= 0; loop--) {
        value += `The letter in position ${loop} is ${word.substr(loop, 1)} \n`;
    }
    return value;
}

function StringWalker2(word) {
    let myArray = new Array();
    for (let loop = 0; loop <word.length; loop++) {
        myArray.push(word.substr(loop, 1));
    }
    return myArray.join(',');
}

function StringWalker3(word) {
    var revesred = word.split().reverse().join();
    var message = `The word you entered was: ${word}. That word reversed is ${reversed}`;
    return message
}


