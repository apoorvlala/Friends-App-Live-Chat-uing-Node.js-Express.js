var express=require('express');
var router=express.Router();

router.get('/',(req,res)=>{
    res.render('chat',{
        pageTitle:'Chat',
        pageId:'chat'
    })
});

module.exports=router;
