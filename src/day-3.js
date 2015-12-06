
process.stdin.setEncoding('utf8');

var data = '';
process.stdin.on('readable', function() {
  data += process.stdin.read();
});
process.stdin.on('end', processCalc);


function processCalc() {
    var x = 0;
    var y = 0;
    var map = new Map();
    map.set(`${x}:${y}`, 1);
    var unique = 1;

    for (var index = 0; index < data.length; index++) {
        // console.log('==', index, data.charAt(index));
        switch (data.charAt(index)) {
            case '^': y++; break;
            case 'v': y--; break;
            case '<': x--; break;
            case '>': x++; break;
            default:
                // console.error('unexpected char: ', data.charAt(index));
                continue;
                break;
        }

        if (map.get(`${x}:${y}`) !== 1) {
            unique += 1;
            map.set(`${x}:${y}`, 1);
        }

        // console.log(data.charAt(index), x, y, unique);
    }

    // console.log("\033[2J\033[0f")

    // for (y = -100; y < 150; y ++) {
    //     var str = "";
    //     for (x = -100; x < 150; x++) {
    //         if (map.get(`${x}:${y}`) === 1) {
    //             str += 'x';
    //         } else {
    //             str += '-';
    //         }
    //     }
    //     console.log(str);
    // }

    // console.log(map);
    console.log(x, y);
    console.log(unique);
}