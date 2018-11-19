import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import About from './components/about';
import Funstuff from './components/funstuff';
import Projects from './components/projects';
import Title from './components/title';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  render() {
    return (
      
      <div className="App">
      <BrowserRouter>
        {/* <Title/> */}

        <Switch>
          <Route exact path="/" component={Title} />
          <Route exact path='/about' component={About}/>
          <Route exact path='/funstuff' component={Funstuff}/>
          <Route exact path='/projects' component={Projects}/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
