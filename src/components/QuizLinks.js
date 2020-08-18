import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import '../style.css';

function Quiz(props) {
    return (
        <ul className="list-group list-group-flush align-items-center">
            <Link to={"/questionpage/" + props.quiz._id} className="list-group-item" >{props.quiz.name}</Link>
        </ul>
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
            return <Quiz quiz={quiz} key={quiz._id} />;
        })
    }

    render() {
        return (
            <div className=" justify-content-md-center">
                <div class="intro py-3 bg-white text-center">
                    <div class="container">
                        <h2 class="text-primary display-3 my-4">
                            Quizzz Time
                        </h2>
                    </div>
                </div>
                <div className="py-4">
                <hr/>

                </div>
                <div className="py-4 bg-primary col-md-6 m-auto">
                    <div>
                        {this.quizList()}
                    </div>
                </div>

                <div className="py-4 bg-secondary col-md-6 m-auto">
                    <ul className="list-group list-group-flush align-items-center">
                        <Link to={"/adminpage"} className="list-group-item">Admin Page</Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default QuizLinks;
