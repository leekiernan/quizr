require('normalize.css');
require('styles/Quiz.css');

import React from 'react';
import questionData from '../data/questionData.json'

class NoMatchComponent extends React.Component {
  render() {
    return ();
  }
}
class ResultComponent extends React.Component {
  render() {
    return ();
  }
}
class ResultsComponent extends React.Component {
  render() {
    return ();
  }
}

class QuestionComponent extends React.Component {
  render() {
    return ();
  }
}

class QuizComponent extends React.Component {
  defaultProps() {}

  getInitialState() {
  }

  render() {
    return (
      <div className="quiz">
      </div>
    );
  }
}

export default QuizComponent;
