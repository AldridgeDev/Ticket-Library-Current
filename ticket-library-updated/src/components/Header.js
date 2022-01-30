import React, { Component } from 'react';
import '../styles/Header.css';

export default class Header extends Component {
    render() {
        return (
            <header className='component-header'>
                <h1>Ticket Library</h1>
                <h3>Developed by Antonio Aldridge</h3>
            </header>
        )
    }
}