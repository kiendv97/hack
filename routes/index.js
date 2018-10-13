var express = require('express');
var router = express.Router();
// API key HackMD
const InfinitoApi = require('node-infinito-api');
const opts = {
     apiKey: '68b2fa19-c920-4315-96d3-8d883f330d86',
     secret: 'etzz6w9UdsjWBA4NJtV46W6sckwhuGQruSqHWVarggHU7vU7Ldv509qLuGdUKHe3',
     baseUrl: 'https://staging-api-testnet.infinitowallet.io',
     logLevel: 'NONE',
     
 };
 const api = new InfinitoApi(opts);
 const coinAPI = api.BTC;

 //  http://localhost:3000/bitcoin
 router.get('/bitcoin', async (req,res,next)=>{
  const result = await coinAPI.getBalance('1Dp1TZfsMDfrNwuAzXi8mJwcXNA5xiHPor');

  res.send(result);
 })
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
