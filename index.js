var express = require('express');
var wekoin = require('./lib/wekoin');
var app = express();
app.get('/accounts', function(req,res){
  wekoin.listAccounts(function(err,accounts){
    if (err){
      res.status(500).send(err);
    }
    else{
      res.send(accounts);
    }
  });
});
app.listen(process.env.PORT || 3000, function(){
  console.log('Server started');
});
