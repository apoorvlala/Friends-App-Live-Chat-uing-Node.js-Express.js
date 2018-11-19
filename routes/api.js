var express=require('express');
var bodyParser=require('body-parser');
var router=express.Router();
var fs=require('fs');
var io=require('socket.io')();
var feedbackData=require('../data/feedback.json');

router.get('/',(req,res)=>{
    res.json(feedbackData);
});
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.post('/',(req,res)=>{    
    feedbackData.unshift(req.body);
    fs.writeFile('data/feedback.json',JSON.stringify(feedbackData),'utf8',(err)=>{if(err){console.log(err);}});
    res.json(feedbackData);
});

router.delete('/:id',(req,res)=>{
    console.log(req.params.id);
    feedbackData.splice(req.params.id,1);
    fs.writeFile('/data/feedback.json',JSON.stringify(feedbackData),'utf8',(err)=>{if(err)throw err;});
    res.json(feedbackData);
});

module.exports=router;