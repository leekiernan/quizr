'use strict';

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Answer from './AnswerComponent'
import NotFound from './NotFoundComponent'

require('styles//Question.scss');

const questions = require('../data/question-data.json')

class QuestionComponent extends React.Component {
  answerSelected() {
    // this.props.
  }

  render() {
    const question = questions[parseInt(this.props.params.name)-1];

    if (!question) { return <NotFound />; }

    console.log(question);
    let answers = question.answers.map( (answer,i) => {
      return <Answer answer={answer} onClick={this.answerSelected} key={i} />
    });

    return (
      <div className="question-component">
        <h2>{question.title}</h2>
        {answers}
      </div>
    );
  }
}

QuestionComponent.displayName = 'QuestionComponent';

// Uncomment properties you need
// QuestionComponent.propTypes = {};
// QuestionComponent.defaultProps = {};

export default QuestionComponent;
