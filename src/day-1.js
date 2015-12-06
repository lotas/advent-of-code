'use strict';

process.stdin.setEncoding('utf8');

var data = '';
process.stdin.on('readable', function () {
    let chunk = process.stdin.read();
    if (chunk) {
        data += chunk;
    }
});

process.stdin.on('end', function () {
    // 1st part
    console.log(
        (data.match(/\(/ig) || []).length - (data.match(/\)/ig) || []).length
    );

    // 2nd part
    let curPos = 1;
    for (let i = 0; i < data.length; i++) {
        if (data.charAt(i) === '(') {
            curPos += 1;
        } else if (data.charAt(i) === ')') {
            curPos -= 1;
        }

        if (curPos === 0) {
            console.log(i+1);
            break;
        }
    }
});
