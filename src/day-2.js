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
    var total = 0;
    var ribbon = 0;

    var parcels = data.split("\n").map((str) => {
        // sort by small -> big
        var dims = (str.split('x') || []);
        dims.forEach(function (val, key) {
            dims[key] = parseInt(val);
        });
        dims.sort(function (a, b) {
            return a - b;
        });
        return dims;
    });

    parcels.forEach((dimensions) => {
        if (dimensions && dimensions.length == 3) {
            total += getAreaForParcel(dimensions);
            ribbon += getRibbonLengthForParce(dimensions);
        }
    });

    console.log(total, ribbon);
});

function getAreaForParcel(dims) {
    return 3 * (dims[0] * dims[1]) +  // 2 + 1 extra
        2 * (dims[1] * dims[2]) +
        2 * (dims[0] * dims[2]);
}

function getRibbonLengthForParce(dims) {
    return 2 * (dims[0] + dims[1]) + // smallest perimiter
        dims[0] * dims[1] * dims[2]; // volume
}