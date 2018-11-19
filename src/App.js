import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import About from './components/about';
import Funstuff from './components/funstuff';
import Projects from './components/projects';
import Title from './components/title';
import Resume from './components/resume';
import Github from './components/github';
import LinkedIn from './components/linkedin';

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
          <Route path='/resume' component={Resume}/>
          <Route path='/github' component={Github}/>
          <Route path='/linkedin' component={LinkedIn}/>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
