import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message/Message';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Switch, Route } from 'react-router';
import Greeting from './Greeting/Greeting';
import MessageSent from './MessageSent/MessageSent';
import Messages from './Messages/Messages';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Greeting} />
        <Route path='/message' component={Message} />
        <Route path='/sent' component={MessageSent} />
        <Route path='/messages' component={Messages} />
      </Switch>
    );
  }

}

export default App;
