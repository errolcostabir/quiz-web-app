import React, { Component } from 'react';
import QuizAPI from './QuizAPI';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';
import QuizLinks from './components/QuizLinks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import './style.css';

/* class App extends Component {

    constructor() {
        super();

        this.state = {
            startQuiz: false,
            questionBank: [],
            quizBank:[],
            score: 0,
            responses: 0,
            submitted: false,
            buttonShow: true,
            apiresponse: ""
        }
    }

    callAPI() {
        fetch('http://localhost:9000/quiz')
            .then(res => res.json())
            .then(res => this.setState({ quizBank: res }));
    }

    playAgain = () => {
        this.callAPI();
        this.setState({
            score: 0,
            responses: 0,
            submitted: false,
            buttonShow: true
        });
    }

    computeAnswer = (answer, correct) => {
        if (answer === correct) {
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        });
    }

    submit = () => {
        this.setState({
            submitted: true,
            buttonShow: false
        })
    } */

/* handleClick=({_id})=>{
    fetch('http://localhost:9000/quiz/:${_id}')
        .then(res => res.json())
        .then(res => this.setState({ questionBank: res }));
} */

/*  componentDidMount() {
     this.callAPI();
 }

 render() {
     return (
         <div>
             <h1>Quizzz</h1> */
{/* {
                    this.state.startQuiz===false&&this.state.quizBank.map(
                        ({name,_id})=>(
                            <QuizLinks name={name} key={_id} handleClick={this.handleClick(_id)}/>
                        )
                    )
                } */}
{/*  {
                    this.state.startQuiz===true&&
                    this.state.questionBank.length > 0 &&
                    this.state.submitted === false &&
                    this.state.responses <= 5 &&
                    this.state.questionBank.map(
                        ({ question, answers, correct, _id }) => (
                            <QuestionBox question={question} answers={answers} key={_id} selected={answer => this.computeAnswer(answer, correct)} disable={this.state.disable} />
                        )
                    )
                }

                {
                    this.state.startQuiz===true&&this.state.submitted === true ? (<Result score={this.state.score} playAgain={this.playAgain} />) : null
                }

                {
                    this.state.startQuiz===true&&this.state.buttonShow ? (<button disabled={this.state.responses < 5} onClick={this.submit}>submit</button>) : null
                }

            </div>
        )
    }
}

export default App; */}

function App() {
    return (
        <Router>

            <div className="container-fluid">
                <Route path="/" exact component={QuizLinks} />
                <Route path="/questionpage/:id" component={QuestionBox} />
                <Route path="/adminpage" component={AdminPage}/>
            </div>

        </Router>
    )
}


export default App;
