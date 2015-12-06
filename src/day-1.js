
process.stdin.setEncoding('utf8');

var data = '';
process.stdin.on('readable', function() {
  data += process.stdin.read();
});

process.stdin.on('end', function() {
  console.log(
      (data.match(/\(/ig) || []).length - (data.match(/\)/ig) || []).length
  );
});
