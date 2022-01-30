import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
                <input onChange={this.handleChange} />
            </div>
        );
    }
}