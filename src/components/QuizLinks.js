import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import '../style.css';

function Quiz(props) {
    return (
        <div className="">
            <Link to={"/questionpage/" + props.quiz._id} className="list-group-item text-center" style={{ "fontFamily": "ubuntu" }} >{props.quiz.name}</Link>
        </div>
    )
}


class QuizLinks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quizBank: []
        };
    }


    componentDidMount() {
        Axios.get('http://localhost:9000/quiz')
            .then(res => {
                this.setState({
                    quizBank: res.data
                });
            })
            .catch((err) => {
                console.log(err);
            })

    }

    quizList() {
        return this.state.quizBank.map(quiz => {
            return (
                <div className="list-group list-group-flush ">
                    <Quiz quiz={quiz} key={quiz._id} />
                </div>
            );
        })
    }

    render() {
        return (
            <div className=" justify-content-md-center">
                <div class="intro py-2 bg-white text-center">
                    <div class="container">
                        <h2 class="text-primary display-2 my-1" style={{ "fontFamily": "ubuntu" }}>
                            <span style={{ "fontSize": "100px" }}>Q</span>uizzz <span>T</span>ime
                        </h2>
                    </div>
                    <p className="text-secondary" style={{ "fontFamily": "ubuntu" }}>
                        This is a simple <span className="text-dark" style={{ "fontWeight": "bold" }} >Quiz Web App</span> with a very simple UI developed
                        By <span className="text-dark" style={{ "fontWeight": "bold" }}>Errol Costabir</span> using React JS and Node JS.
                        <br /> This App allows an Admin to create a Quiz as they desire and let a user take a quiz of their choices.
                         Wanna to host a quiz??? Head on to the Admin page by clicking the link below or simply take up any of the quiz's below.
                    </p>
                    <p className="text-secondary" style={{ "fontFamily": "ubuntu" }}><i class="fa fa-instagram"></i> /errolcostabir</p>
                </div>
                <div className="">
                    <hr style={{ "backgroundColor": "gray", "height": "1px" }} />
                </div>
                <div className="py-4 bg-info col-md-6 m-auto">
                    <div>
                        {this.quizList()}
                    </div>
                </div>

                <div className="py-4 bg-dark col-md-6 m-auto">
                    <ul className="list-group list-group-flush align-items-center">
                        <Link to={"/adminpage"} className="list-group-item">Admin Page</Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default QuizLinks;
