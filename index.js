
var seneca = require('seneca')();

seneca.add({cmd: 'salestax'}, function(args, callback) {
  var rate  = 0.1;
  var total = Math.round(args.net * (1 + rate));
  callback(null, {total: total});
});

seneca.act({cmd:'salestax', net: 100}, function(err, result) {
  if (err) { return console.error(err); }
  console.log(result.total);
});
