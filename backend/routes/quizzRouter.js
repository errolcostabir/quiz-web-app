const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const Question=require('../models/quiz');
const { route } = require('.');
const router=express.Router();


router.get('/',(req,res,next)=>{
    Question.find({})
    .then((quiz)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(quiz);
    },(err)=>next(err))
    .catch((err)=>next(err));
});

router.post('/',(req,res,next)=>{
    Question.create(req.body)
    .then((quiz)=>{
        console.log('Queston created: ',quiz);
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(quiz);
    },(err)=>next(err))
    .catch((err)=>next(err));

});


router.get('/:quizId',(req,res,next)=>{
    Question.findById(req.params.quizId)
    .then((quiz)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(quiz);
    },(err)=>next(err))
    .catch((err)=>next(err));
});



module.exports=router;

