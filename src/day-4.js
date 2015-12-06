var crypto = require('crypto');
var key = 'yzbqklnj';

var i = 1;
while (true) {

    var md5 = crypto.createHash('md5').update(`${key}${i}`).digest('hex');

    if (md5.startsWith('000000')) {
        console.log(md5, i);
        break;
    }
    i++;

    if (i % 1000000 === 0) {
        console.log(i);
    }
}

