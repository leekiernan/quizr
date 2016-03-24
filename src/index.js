// import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Quiz from './components/QuizComponent';
import Question from './components/QuestionComponent';
import Result from './components/ResultComponent';
import NotFound from './components/NotFoundComponent';


// Render the main component into the dom
render((
  <Router history={browserHistory} >
    <Route path='/' component={Quiz}>
      <Route path='question/:name' component={Question} />
      <Route path='results/:name' component={Result} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
), document.getElementById('app') );
