import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  '../styles/SearchInput.css';

export default class SearchInput extends Component {
    static propTypes = {
        textChange: PropTypes.func
    };

    handleChange = event => {
        this.props.textChange(event);
    };

    render() {
        return (
            <div className='component-search-input'>
                <input 
                onChange={this.handleChange} 
                placeholder='Search for a Ticket'
                />
            </div>
        );
    }
}