import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import Quiz from './components/Quiz';

// Render the main component into the dom
ReactDOM.render((
    <Router history={browserHistory} >
      <Route path="/" component={Quiz}>
        <Route path="question:questionId" component={Question} />
        <Route path="results" component={Results}>
          <Route path=":donkey" component={Result} />
        </Route>
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
    ), document.getElementById('app') );
