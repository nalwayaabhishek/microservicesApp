
var seneca = require('seneca')();

seneca.add({cmd: 'salestax'}, function(args, callback) {
  var rate = args.rate;
  var total = Math.round(args.net * (1 + rate));
  callback(null, {total: total});
});

seneca.add({cmd: 'salestax', country: 'India'},
     function(args, callback) {
  var rate = 0.2;
  seneca.act({cmd: 'salestax', rate: rate, net: args.net},
 function (err, result) {
        callback(null, result);
      })
  	
   
});

seneca.add({cmd: 'salestax', country: 'USA'},
 function(args, callback) {
  var rate = 0.3;
  seneca.act({cmd: 'salestax', rate: rate, net: args.net},
  	 function (err, result) {
        callback(null, result);
      })
  
  
});

seneca.act({cmd:'salestax',  country: 'USA', net: 100}, function(err, result) {
  if (err) { return console.error(err); }
  console.log(result.total);
});

seneca.act({cmd:'salestax', country: 'India', net: 100 }, function(err, result) {
  if (err) { return console.error(err); }
  console.log(result.total);
});
