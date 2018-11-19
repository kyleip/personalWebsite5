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

  callApi(){
    return;
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      
      <div className="App">
      <BrowserRouter>
        <div>
          <Title/>
          {/* <Route exact path="/" component={Title} /> */}
          <Route path='/about' component={About}/>
          <Route path='/funstuff' component={Funstuff}/>
          <Route path='/projects' component={Projects}/>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
