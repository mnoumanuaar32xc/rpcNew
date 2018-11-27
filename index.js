const express = require ('express')
const app = express()
const Client = require('bitcoin-core');

const client = new Client({
    username:'bitcoinN0deAccess',
      password:'bitc0inRPCpass',
      port: 8332,
  });
//getinfo
  app.post('/getinfo',function(req,res){
  const batch = [
    { method: 'getblockchaininfo', parameters: [] }
  ]
   client.command(batch).then((responses) => res.send(responses));
});


//gettransaction

app.post('/gettransaction',function(req,res){

  client.getTransactionByHash('b4dd08f32be15d96b7166fd77afd18aece7480f72af6c9c7f9c5cbeb01e686fe');
});

 app.listen(3000,()=> console.log("Server is running at http://localhost:3000"));
