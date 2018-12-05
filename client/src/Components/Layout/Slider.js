import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'

class Slider extends Component {
    showSettings (event) {
      event.preventDefault();
     
    }

    render () {
        const styles = {
            bmBurgerButton: {
              position: 'fixed',
              width: '36px',
              height: '30px',
              left: '36px',
              top: '16px'
            },
            bmBurgerBars: {
              background: 'white'
            },
            bmCrossButton: {
              height: '24px',
              width: '24px'
            },
            bmCross: {
              background: 'Brown'
            },
            bmMenu: {
              background: 'white',
              padding: '2.5em 1.5em 0',
              fontSize: '1.15em'
            },
            bmMorphShape: {
              fill: '#373a47'
            },
            bmItemList: {
              color: '#b8b7ad',
              padding: '0.8em',
              textTransform: 'uppercase',
              fontWeight: 'bold'
            },
            bmItem: {
              display: 'block',
              color: 'black'
            },
            bmOverlay: {
              background: 'rgba(0, 0, 0, 0.3)'
            }
          }
      return (
            <Menu styles={styles} width={'300px'}>
            <h1>Menu</h1>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="asd">Settings</a>
            </Menu>
      );
    }
  }

export default Slider
