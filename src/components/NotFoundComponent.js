'use strict';

import React from 'react';

require('styles//NotFound.scss');

class NotFoundComponent extends React.Component {
  render() {
    return (
      <div className="notfound-component">
        <h1>404.</h1>
      </div>
    );
  }
}

NotFoundComponent.displayName = 'NotFoundComponent';

// Uncomment properties you need
// NotFoundComponent.propTypes = {};
// NotFoundComponent.defaultProps = {};

export default NotFoundComponent;
