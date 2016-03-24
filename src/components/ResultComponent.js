'use strict';

import React from 'react';

require('styles//Result.scss');

class ResultComponent extends React.Component {
  render() {
    console.log('hi there');

    return (
      <div className="result-component">
        Please edit src/components///ResultComponent.js to update this component!
      </div>
    );
  }
}

ResultComponent.displayName = 'ResultComponent';

// Uncomment properties you need
// ResultComponent.propTypes = {};
// ResultComponent.defaultProps = {};

export default ResultComponent;
