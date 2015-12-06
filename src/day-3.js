'use strict';

process.stdin.setEncoding('utf8');

var data = '';
process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        data += chunk;
    }
});
process.stdin.on('end', processCalc);


function processCalc() {
    var map = {};
    map['0:0'] = 1;

    // 1st case - all instructions
    // santaAloneRoute(map, 0, 1);

    // 2nd case - first santa, then robot
    santaAloneRoute(map, 0, 2);
    santaAloneRoute(map, 1, 2);

    // drawMap(map);

    console.log(
        countUniqueHouses(map)
    );
}

function santaAloneRoute(map, start, inc) {
    var x = 0;
    var y = 0;

    for (var index = start; index < data.length; index += inc) {
        switch (data.charAt(index)) {
            case '^': y++; break;
            case 'v': y--; break;
            case '<': x--; break;
            case '>': x++; break;
            default:
                continue;
                break;
        }

        map[`${x}:${y}`] = 1;
    }
}

function countUniqueHouses(map) {
    return Object.keys(map).length;
}

function drawMap() {
    var x,y;
    for (y = -100; y < 150; y ++) {
        var str = "";
        for (x = -100; x < 150; x++) {
            if (map.get(`${x}:${y}`) === 1) {
                str += 'x';
            } else {
                str += '-';
            }
        }
        console.log(str);
    }
}