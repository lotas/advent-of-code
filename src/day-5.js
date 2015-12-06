'use strict';

process.stdin.setEncoding('utf8');

var data = '';
process.stdin.on('readable', function () {
    var chunk = process.stdin.read();
    if (chunk) {
        data += chunk;
    }
});

process.stdin.on('end', countNiceWords);

function countNiceWords() {
    var niceWords = data.split("\n").filter(isNiceWord2);
    console.log(
        niceWords,
        niceWords.length
    );
}

function isNiceWord2(word) {
    if ((word.match(/(..).*\1/) || []).length == 0) {
        return false;
    }

    return (word.match(/(.).{1}\1/i) || []).length > 0;
}

function isNiceWord(word) {
    if ((word.match(/[aeiou]/ig) || []).length < 3) {
        return false;
    }
    if (word.match(/(ab|cd|pq|xy)/ig)) {
        return false;
    }
    return (word.match(/(\w)\1/i) || []).length > 0;
}