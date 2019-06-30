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
        const isMobile = window.innerWidth <= 500;
        var titleStyle
        if (isMobile){
            titleStyle = {
                marginTop: '50px',
                marginBottom: '30px',
                right: '10px'
            }
        } else {
            titleStyle = {
                marginTop: '50px',
                 marginBottom: '30px'
            }
        }

        return (
            <div>
                <div style={titleStyle}>
                    <Menu hover_handler={this.hover_handler.bind(this)}></Menu>
                </div>
                <TitleText titleColor={this.state.titleColor} textColor={this.state.textColor}/>
            </div>
        )
    }
}


export default Title;