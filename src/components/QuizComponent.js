require('normalize.css');
require('styles/Quiz.css');

import React from 'react';
import Question from './QuestionComponent'

const data = require('../data/question-data.json')

class QuizComponent extends React.Component {

  render() {
    let questions = data.map( (question, i) => {
      return <Question key={i} question={question.title} onAnswered={this.nextQuestion} />;
    });

    return (
      <div className="quiz">
        <h1>Quiz</h1>
        {questions}

        {this.props.children && React.cloneElement(this.props.children)}
      </div>
    );
  }
}

export default QuizComponent;
