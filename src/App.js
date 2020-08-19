import React, { Component } from 'react';
import QuestionBox from './components/QuestionBox';
import QuizLinks from './components/QuizLinks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import './style.css';

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
