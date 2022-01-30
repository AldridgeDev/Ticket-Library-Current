import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TicketResultRow extends Component {
    static propTypes = {
        ticketName: PropTypes.string
    };

    render() {
        // come back later to add clipboard
        return (
            <div className='component-ticket-result-row'>
                <span className='ticketName'>{this.props.ticketName}</span>
            </div>
        )
    }
}