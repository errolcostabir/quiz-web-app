import React, { useState, Component } from 'react';
import Axios from 'axios';
import Result from './Result';


class QuestionBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            questionList: [],
            score: 0,
            response: 0,
            submitted: false,
            startQuiz: false,
            showButton: true
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, correct) {
        let selected = e.target.value;

        if (selected === correct) {
            this.setState({
                score: this.state.score + 1,
            });
        }

        this.setState({
            response: this.state.response + 1
        })

    }


    playAgain = () => {
        this.setState({
            score: 0,
            response: 0,
            submitted: false,
        });
    }


    submit = () => {
        this.setState({
            submitted: true,
        })
    }


    componentDidMount() {
        this.setState({
            startQuiz: true
        })
        Axios.get('http://localhost:9000/quiz/' + this.props.match.params.id)
            .then(res => {
               
                this.setState({
                    name: res.data.name,
                    questionList: res.data.questionList,
                });
              
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="py-4">
                <div className="py-4 mt-2 bg-secondary col-md-10 m-auto ">
                    {
                        this.state.response <= 5 &&
                        this.state.questionList.map((question, index) => {
                            return (
                                <div>
                                    <h4 key={index} className="text-white">{question.question}</h4>
                                    {
                                        question.answers.map((subitem, i) => {
                                            return (
                                                <div> <input type="radio" name={subitem} value={subitem} id={i} key={i} onChange={(e) => { this.handleChange(e, question.correct) }} /><label className="text-white-50">{subitem}</label> </div>
                                            )
                                        })

                                    }
                                </div>
                            )

                        })
                    }
                    {
                        this.state.startQuiz === true && this.state.submitted === true ? (<Result score={this.state.score} />) : null
                    }

                    {
                        this.state.submitted === false && this.state.showButton === true ? (<button className="btn btn-warning btn-lg btn-block text-white"  disabled={this.state.response < 5} onClick={this.submit}>SUBMIT</button>) : null
                    }

                </div>
            </div>
        )
    }

}

export default QuestionBox;