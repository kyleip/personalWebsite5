import React, {Component} from 'react';
import { Button,Image, Popup, Transition} from 'semantic-ui-react';
import './menu.css';
import {Link} from 'react-router-dom';

// import About from './about';
// import Funstuff from './funstuff';
// import Projects from './projects';
// import Title from './title';



// const bluePink = {

// }
export default class Menu extends Component {
    constructor () {
      super()
      this.state = {
        isExpanded: false,
        isHovered: false,
        textComponent: ''
      }
      this.handleColorChangeHelper = this.handleColorChangeHelper.bind(this);
      this.handleHover = this.handleHover.bind(this);
    }

    toggleExpanded () {
      this.setState({
        isExpanded: !this.state.isExpanded
      })
    }

    handleColorChangeHelper (titlecolor, textcolor) {
      let colors = {
        titleColor: titlecolor,
        textColor: textcolor
      }
      this.props.hover_handler(colors);
    }

    handleHover (component) {
      this.setState({
        isHovered: true,
        textComponent: component
      });
    }
    
    render () {
      const isMobile = window.innerWidth <= 500;
      var pixels = '300px';
      var right = '110px';
      var bottom = '113px';
      var marginTop = '100px';
      var circleRight = '11px';
      if (isMobile) {
        // pixels = '250px';
        // pixels='500px'
        // circleRight = '-4px';
        // right = '99px';
      //   bottom = '40px';
      //   marginTop = '0px';
      }

      return (
        <div class='circle-container' style={{right:circleRight,marginTop:marginTop,marginBottom:'1px'}}>
          <div>
          <Link to='/' class='center'
          >
          <Image 
            onClick={this.toggleExpanded.bind(this)}
            src= {process.env.PUBLIC_URL + '/static/me_cropped.jpg'} 
            style={{display:"inline-block", 
            width:pixels,height:pixels,
            maxWidth:"1000%",
            bottom:bottom,right:right}} 
            circular 
          />
          </Link>
          <Popup content="Projects" trigger = { 
          <Link to='/projects' class='deg0' visible={this.state.isExpanded}>
            <Transition animation='slide right' duration='1000' visible={this.state.isExpanded} mountOnShow='true'>
            <Button circular icon='big coffee'
                style={{...buttonStyle,backgroundColor:'#E24E42'}}
                onMouseEnter = { () => {
                  this.handleColorChangeHelper('#E24E42','#57BC90')
                  this.handleHover('Projects');
                }}
                onClick = { () => {
                  this.handleColorChangeHelper('#E24E42','#57BC90')
                }}
              />
            </Transition>
          </Link>
          }/>
          <Popup content="Fun Stuff!" trigger = { 
          <Link to='/funstuff' class='deg45'>
            <Transition animation='slide right' duration='1000' visible={this.state.isExpanded}>
            <Button circular icon='big music' 
                style={{...buttonStyle,backgroundColor:'#E9B000'}}
                onMouseEnter = { () => {
                  this.handleColorChangeHelper('#E9B000','#94618E')
                }}
                onClick = { () => {
                  this.handleColorChangeHelper('#E9B000','#94618E')
                }}
              />
            </Transition>
          </Link>}
          />
          <Popup content="Resume" trigger = {
          <Link to='/resume' class='deg135'>
            <Transition animation='slide left' duration='1000' visible={this.state.isExpanded}>
            <Button circular icon='big file pdf ' 
                style={{...buttonStyle,backgroundColor:'#94618E'}}
                onMouseEnter = { () => {
                  this.handleColorChangeHelper('#94618E','#E9B000')
                }}
              />
            </Transition>
          </Link>}
          /> 
          <Popup content="Github" trigger = {
          <Link to='/github' class='deg180'>
            <Transition animation='slide left' duration='1000' visible={this.state.isExpanded}>
            <Button circular icon='big github' 
                style={{...buttonStyle,backgroundColor:'#57BC90'}}
                onMouseEnter = { () => {
                  this.handleColorChangeHelper('#57BC90','#E24E42')
                }}
              />
            </Transition>
          </Link>
          }/>
          <Popup content="LinkedIn" trigger = {
          <Link to='/linkedin' class='deg225'>
          <Transition animation='slide left' duration='1000' visible={this.state.isExpanded}>
            <Button circular icon='big suitcase' 
                style={{...buttonStyle,backgroundColor:'#4EC5C1'}}
                onMouseEnter = { () => {
                  this.handleColorChangeHelper('#4EC5C1','#EB6E80')
                }}
              />
            </Transition>
          </Link>
          }/>
          <Popup content="About" trigger = {
          <Link to='/about' class='deg315'>
            <Transition animation='slide right' duration='1000' visible={this.state.isExpanded}>
            <Button circular icon='big question circle' 
                style={{...buttonStyle,backgroundColor:'#EB6E80'}}
                onMouseEnter = { () => {
                  this.handleColorChangeHelper('#EB6E80','#4EC5C1')
                }}
                onClick = { () => {
                  this.handleColorChangeHelper('#EB6E80','#4EC5C1')
                }}
              />
              </Transition>
            
          </Link>
          }/>
          </div>
      </div>
      )
    }
}

 const buttonStyle = {
  height:'75px',
  width:'75px',
  color:'white',
 }
