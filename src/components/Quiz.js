require('normalize.css');
require('styles/Quiz.css');

import React from 'react';



const data = require('json!../data/question-data.json')

class NoMatchComponent extends React.Component {
  render() {
    return (
      <div></div>
        );
  }
}
class ResultComponent extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
}
class ResultsComponent extends React.Component {
  render() {
    return (
      <div></div>
        );
  }
}

class QuestionComponent extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
}

class QuizComponent extends React.Component {
  defaultProps() {}

  getInitialState() {
  }

  render() {
    return (
      <div className="quiz">
      {data.title}
      </div>
    );
  }
}

export default QuizComponent;
