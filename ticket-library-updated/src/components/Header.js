import React, { Component } from 'react';
import '../styles/Header.css';
// import styles from '../styles/Header.css'; // Take a look to component styling. Forgot how to do it

export default class Header extends Component {
    render() {
        return (
            // <header className={styles.componentHeader}>
            <header className='component-header'>
                <h1>Ticket Library</h1>
                <h3>Developed by Antonio Aldridge</h3>
            </header>
        )
    }
}