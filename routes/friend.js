var express=require('express');
router=express.Router();
var dataFile=require('../data/data.json');

router.get('/',(req,res)=>{
    var data=req.app.get('appData');
    var pageFriends=data.friends;
    res.render('friends',{
        pageTitle:'Friends',
        friends:pageFriends,
        pageId:'friend'
    });    
});
router.get('/show/:friend_id',(req,res)=>{
    var dataFile=req.app.get('appData');
    var pageFriends=[];
    dataFile.friends.forEach((item)=>{
        if(item.shortname==req.params.friend_id){
            pageFriends.push(item);
        }
    });
    res.render('friends',{
        pageTitle:'Friends Information',
        friends:pageFriends,
        pageId:'friendDetail'
    });
});

module.exports=router;