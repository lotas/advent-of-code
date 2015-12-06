
process.stdin.setEncoding('utf8');

var data = '';
process.stdin.on('readable', function () {
    var chunk = process.stdin.read();
    if (chunk) {
        data += chunk;
    }
});

process.stdin.on('end', countLitLamps);

function countLitLamps() {
    var instructions = data.split("\n").map(stringToInstruction);
    var map = createMapArray(1000);

    instructions.forEach(function(cmd) {
        if (!cmd) return;

        for (var x = cmd.x1; x <= cmd.x2; x++) {
            for (var y = cmd.y1; y <= cmd.y2; y++) {
                switch (cmd.op) {
                    case 'turn on':
                        map[x][y] += 1;
                        // console.log('lightup', cmd.op, x, y);
                        break;

                    case 'turn off':
                        map[x][y] -= 1;
                        if (map[x][y] < 0) {
                            map[x][y] = 0;
                        }

                        break;
                    case 'toggle':
                        // if (map[x][y] === 1) {
                        //     map[x][y] = 0;
                        // } else {
                        //     map[x][y] = 1;
                        // }
                        map[x][y] += 2;

                        break;
                }
            }
        }
    });
    // console.log(map);

    var totalLit = 0;
    var str = '';
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            totalLit += map[i][j];
            // if (map[i][j] === 1) {
            //     totalLit += 1;
            //     str += '*';
            // } else {
            //     str += '.';
            // }
        }
        // console.log(str);
        str = '';
    }

    console.log(totalLit, str);
}

function stringToInstruction(str) {
    var match = str.match(/(turn on|turn off|toggle)\s*(\d+),(\d+)\s*through\s*(\d+),(\d+)/i);
    if (!match) return null;

    return {
        op: match[1],
        x1: parseInt(match[2]),
        y1: parseInt(match[3]),
        x2: parseInt(match[4]),
        y2: parseInt(match[5])
    };
}

function createMapArray(cnt) {
    var arr = new Array(cnt);
    for (var index = 0; index < cnt; index++) {
        arr[index] = new Array(cnt);
        for(var j = 0; j < cnt; j++) {
            arr[index][j] = 0;
        }
    }
    return arr;
}