import React, { Component } from 'react';
import './title.css';
import Menu from './menu';
import TitleText from './titleText';


export class Title extends Component {

  render() {
    return (
        <div>
            <div style={{marginTop: '50px', marginBottom: '30px'}}>
                <Menu></Menu>
            </div>
            <TitleText/>
        </div>
    )
  }
}


export default Title;