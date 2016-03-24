'use strict';

import React from 'react';

require('styles//Answer.scss');

class AnswerComponent extends React.Component {
  render() {
    return (
      <div className="answer-component">
        {this.props.answer}
      </div>
    );
  }
}

AnswerComponent.displayName = 'AnswerComponent';

// Uncomment properties you need
// AnswerComponent.propTypes = {};
// AnswerComponent.defaultProps = {};

export default AnswerComponent;
