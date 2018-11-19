import React, { Component } from 'react';
import './title.css';
import Menu from './menu';
import TitleText from './titleText';


export class Title extends Component {
    constructor () {
        super()
        this.state = {
          titleColor:'black',
          textColor:'black',
          ...this.props
        }

    }

    hover_handler(colors) {
        this.setState({
          titleColor: colors.titleColor,
          textColor: colors.textColor
        });
        console.log('hover');
        console.log('colors', colors);
        console.log(this.state);
      }

    render() {
        return (
            <div>
                <div style={{marginTop: '50px', marginBottom: '30px'}}>
                    <Menu hover_handler={this.hover_handler.bind(this)}></Menu>
                </div>
                <TitleText titleColor={this.state.titleColor} textColor={this.state.textColor}/>
            </div>
        )
    }
}


export default Title;