import React, { Component } from 'react';
import Axios from 'axios';

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
    }

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

        const body = {
            name: this.state.name,
            questionList: this.state.questionList
        }

        console.log(body);

        Axios.post('http://localhost:9000/quiz/', body)
            .then(res => console.log(res.data))
            .catch((err) => console.log(err));
        
        console.log('Quiz Created');
    }

    render() {
        let questionList = this.state.questionList;

        return (
            <div style={{ "fontFamily": "ubuntu" }}>
                <div class="py-1 bg-white text-center">
                    <div class="container">
                        <h1 class="text-primary display-3 my-2">
                            ADMIN PAGE
                        </h1>
                    </div>
                </div>
                <hr style={{ "backgroundColor": "gray", "height": "1px" }} />
                <div>

                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="formGroupExampleInput" style={{ "fontWeight": "bold" }} className="text-dark">Quiz Name: </label>
                            <input type="text" class="form-control col-sm-2 text-center" id="formGroupExampleInput" value={this.state.name} placeholder="Quiz Name" name="name" onChange={this.handleNameChange} />
                        </div>


                        {
                            questionList.map((val, idx) => {
                                let questionId = `Q-${idx}`;
                                return (
                                    <div key={idx}>
                                        <div className="form-group" style={{ "fontFamily": "ubuntu" }}>
                                            <div class="form-row">
                                                <div className="col">
                                                    <label for="formGroupExampleInput" className="text-dark" style={{ "fontWeight": "bold" }} >{`Question ${idx + 1}:`}</label>
                                                    <input type="text" className="question form-control text-center" id="formGroupExampleInput" placeholder="Question" value={this.state.questionList[idx].question} name="question" onChange={(e) => { this.handleQuestionChange(e, idx) }} />
                                                </div>
                                                <div className="col">
                                                    <label for="formGroupExampleInput" style={{ "fontWeight": "bold" }} className="text-dark" >Correct Answer:</label>
                                                    <input type="text" className="correct form-control text-center" id="formGroupExampleInput" placeholder="Correct Answer" value={this.state.questionList[idx].correct} name="correct" onChange={(e) => { this.handleCorrectChange(e, idx) }} />
                                                </div>
                                            </div>
                                            <div className="py-1">

                                            </div>
                                            <div class="form-row">
                                                <div class="col">
                                                    <input type="text" class="form-control text-center" placeholder="Choice 1" value={questionList[idx].answers[0]} onChange={(e) => { this.handleAnswerChange(e, idx, 0) }} />
                                                </div>
                                                <div class="col">
                                                    <input type="text" class="form-control text-center" placeholder="Choice 2" value={questionList[idx].answers[1]} onChange={(e) => { this.handleAnswerChange(e, idx, 1) }} />
                                                </div>
                                                <div class="col">
                                                    <input type="text" class="form-control text-center" placeholder="Choice 3" value={questionList[idx].answers[2]} onChange={(e) => { this.handleAnswerChange(e, idx, 2) }} />
                                                </div>
                                                <div class="col">
                                                    <input type="text" class="form-control text-center" placeholder="Choice 4" value={questionList[idx].answers[3]} onChange={(e) => { this.handleAnswerChange(e, idx, 3) }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                        <div className="text-center">
                            <button onClick={this.addQuestion} className="mr-3 btn btn-info"><span><i class="fa fa-plus mr-1"></i></span>ADD QUESTION</button>

                            <input type="submit" value="SUBMIT" className="btn btn-warning text-light" />
                        </div>
                    </form>
                </div>

            </div>
        )
    }

}


export default AdminPage;
