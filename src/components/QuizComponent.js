require('normalize.css');
require('styles/Quiz.css');

import React from 'react';

// import QuestionComponent from './QuestionComponent'

class QuizComponent extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div className="quiz">
        <h1>Quiz</h1>

        {this.props.children && React.cloneElement(this.props.children)}
      </div>
    );
  }
}

export default QuizComponent;
