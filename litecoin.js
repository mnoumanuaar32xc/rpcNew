//var bitcore = require('bitcore');
var RpcClient = require('bitcoind-rpc');
const express = require ('express')
const app = express()
app.listen(3000,()=> console.log("Server is running at http://localhost:3000"));

var config = {
    protocol: 'http',
    user: 'user',
    pass: 'pass',
    host: '127.0.0.1',
    port: '18332',
  };

  var rpc = new RpcClient(config);
 

app.post('/getinfo',function(req,res){
res.send(rpc.getInfo());

});