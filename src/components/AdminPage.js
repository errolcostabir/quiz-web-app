import React, { Component } from 'react';
import Axios from 'axios';
//import { prependOnceListener } from '../../backend/models/quiz';


/* const QuestionInput=(props)=> {
    return (
        props.questionList.map((val,idx) => {
            let questionId = `Q-${idx}`;
            return (
                <div key={idx}>
                    <div className="form-group">
                        <div class="form-row">
                            <div className="col">
                                <label for="formGroupExampleInput">Question</label>
                                <input type="text" className="question form-control " id="formGroupExampleInput" placeholder="question" value={props.questionList[idx].question} />
                            </div>
                            <div className="col">
                                <label for="formGroupExampleInput">Correct Answer</label>
                                <input type="text" className="correct form-control " id="formGroupExampleInput" placeholder="Correct Answer" value={props.questionList[idx].correct}  />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Choice 1" value={props.questionList[idx].answers[0]} />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Choice 2" value={props.questionList[idx].answers[1]} />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Choice 3" value={props.questionList[idx].answers[2]} />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Choice 4" value={props.questionList[idx].answers[3]} />
                            </div>
                        </div>
                    </div>
                </div>

            )
        })

    )
} */

class AdminPage extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            questionList: [
                {
                    question: '',
                    answers: [],
                    correct: ''
                }
            ],
        }

        this.handleCorrectChange = this.handleCorrectChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
        this.handleAnswerChange = this.handleAnswerChange.bind(this);
        //this.handleChange = this.handleChange.bind(this);
    }


    /* handleChange(e) {

        /* if (["question", "correct", "answers"].includes(e.target.className)) {
            let questionList = [...this.state.questionList];
            questionList[e.target.dataset.id][e.target.className] = e.target.value;
            this.setState({ questionList }, () => console.log(this.state.questionList))
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
 */


    //this.setState({[e.target.name]: e.target.value});
    /*} */


    handleNameChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleQuestionChange(e, idx) {
        const question = [...this.state.questionList];
        question[idx].question = e.target.value;
        this.setState({
            question
        })
    }


    handleCorrectChange(e, idx) {
        const correct = [...this.state.questionList];
        correct[idx].correct = e.target.value;
        this.setState({
            correct
        })
    }

    handleAnswerChange(e, idx, index) {
        const answers = [...this.state.questionList];
        answers[idx].answers[index] = e.target.value;
        this.setState({
            answers
        })

    }

    addQuestion = (e) => {
        this.setState((prevState) => ({
            questionList: [...prevState.questionList, { question: "", answers: [], correct: "" }]
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);

        const body = {
            name: this.state.name,
            questionList: this.state.questionList
        }

        console.log(body);

        Axios.post('http://localhost:9000/quiz/', body)
            .then(res => console.log(res.data))
            .catch((err) => console.log(err));
        //window.location='/';
        console.log('Quiz Created');
        //e.preventDefault()
    }

    render() {
        let questionList = this.state.questionList;

        return (
            <div>
                <div>
                    <h1>
                        AdminPage
                    </h1>
                </div>
                <div>

                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Quiz Name</label>
                            <input type="text" class="form-control col-sm-2" id="formGroupExampleInput" value={this.state.name} placeholder="Quiz Name" name="name" onChange={this.handleNameChange} />
                        </div>
                        <button onClick={this.addQuestion}>Add Question</button>
                        {//<QuestionInput questionList={questionList} />
                        }


                        {
                            questionList.map((val, idx) => {
                                let questionId = `Q-${idx}`;
                                return (
                                    <div key={idx}>
                                        <div className="form-group">
                                            <div class="form-row">
                                                <div className="col">
                                                    <label for="formGroupExampleInput">Question</label>
                                                    <input type="text" className="question form-control " id="formGroupExampleInput" placeholder="question" value={this.state.questionList[idx].question} name="question" onChange={(e) => { this.handleQuestionChange(e, idx) }} />
                                                </div>
                                                <div className="col">
                                                    <label for="formGroupExampleInput">Correct Answer</label>
                                                    <input type="text" className="correct form-control " id="formGroupExampleInput" placeholder="Correct Answer" value={this.state.questionList[idx].correct} name="correct" onChange={(e) => { this.handleCorrectChange(e, idx) }} />
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Choice 1" value={questionList[idx].answers[0]} onChange={(e) => { this.handleAnswerChange(e, idx, 0) }} />
                                                </div>
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Choice 2" value={questionList[idx].answers[1]} onChange={(e) => { this.handleAnswerChange(e, idx, 1) }} />
                                                </div>
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Choice 3" value={questionList[idx].answers[2]} onChange={(e) => { this.handleAnswerChange(e, idx, 2) }} />
                                                </div>
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Choice 4" value={questionList[idx].answers[3]} onChange={(e) => { this.handleAnswerChange(e, idx, 3) }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                        <input type="submit" value="submit" />
                    </form>
                </div>

            </div>
        )
    }



}


export default AdminPage;
