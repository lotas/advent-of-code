'use strict';

process.stdin.setEncoding('utf8');

var data = '';
process.stdin.on('readable', function () {
    data += process.stdin.read();
});

process.stdin.on('end', function () {
    var total = 0;
    data.split("\n").forEach(function (dimensions) {
        if (dimensions && (dimensions.match(/x/ig) || []).length == 2) {
            total += getAreaForParcel(dimensions);
        }
    });

    console.log(total);
});


function getAreaForParcel(dimensions) {
    var dims = (dimensions.split('x') || []);
    dims.forEach(function(val, key) {
        dims[key] = parseInt(val);
    });
    dims.sort(function(a, b) {
        return a - b;
    });
    console.log(dims);
    return 3 * (dims[0] * dims[1]) +
        2 * (dims[1] * dims[2]) +
        2 * (dims[0] * dims[2]);
}