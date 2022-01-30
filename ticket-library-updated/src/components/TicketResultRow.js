import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../styles/TicketResultRow.css";

export default class TicketResultRow extends Component {
    static propTypes = {
        ticketName: PropTypes.string
    };

    render() {
        return (
            <div className='component-ticket-result-row'>
                <span className='ticketName'>{this.props.ticketName}</span>
            </div>
        )
    }
}