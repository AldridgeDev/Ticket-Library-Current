import React, { Component } from 'react';
// import '../styles/Header.css';
// Juan Note: import styles from '../styles/Header.css'; // Take a look to component styling. Forgot how to do it

export default class Header extends Component {
    render() {
        return (
            // example of component styling inline
            <header 
            className='component-header'
            style={{
                color: '#C74CC7'
            }}
            >
                <h1 style={{textAlign: 'center'}}>Ticket Library</h1>
                <h3 style={{textAlign: 'center'}}>Developed by Antonio Aldridge</h3>
            </header>
        )
    }
}