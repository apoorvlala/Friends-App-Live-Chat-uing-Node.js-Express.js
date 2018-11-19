var express=require('express');

var router=express.Router();
router.get('/',(req,res)=>{
//     res.send(
//         `<link rel="stylesheet" type="text/css" href="/css/style.css">
//         <h1>Welcome to Friends App...</h1>
//         <img src="images/misc/background.jpg">
//         <script src="/reload/reload.js"></script>`);
var data=req.app.get('appData');
var pageFriends=data.friends;
res.render('index',{pageTitle:'Our Friends List',pageId:'home',friends:pageFriends,});
});



module.exports=router;
