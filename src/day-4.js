var crypto = require('crypto');
var key = 'yzbqklnj';

var i = 1;
while (true) {

    var md5 = crypto.createHash('md5').update(`${key}${i}`).digest('hex');

    if (md5.substr(0, 6) === '0000000') {
        console.log(md5, i);
        break;
    }
    i++;
}

