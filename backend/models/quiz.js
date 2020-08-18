const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const questionSchema=new Schema({
    question: {type: String, required: true},
    answers: {type: Array,default: [], required: true},
    correct: {type: String,required: true}
});

const quizName=new Schema({
    name: {type: String,
    required: true,
    },
    questionList: [questionSchema]  
});





module.exports=mongoose.model('QuizName',quizName);
