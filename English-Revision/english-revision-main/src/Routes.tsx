import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import RecognitionScreen from './pages/Recognition/Recognition';
import SpeechScreen from './pages/Speech/Speech';
import TranslateScreen from './pages/Translate/Translate';
import InitScreen from './pages/Init/Init';

const Routes: React.FC = () => (
    <Router>
      <Switch>
        <Route path="/" component={InitScreen} exact/>
        <Route path="/translate" component={TranslateScreen} exact/>
        <Route path="/speech" component={SpeechScreen} exact/>
        <Route path="/recognition" component={RecognitionScreen} exact/>
      </Switch>
    </Router>
)

export default Routes;
