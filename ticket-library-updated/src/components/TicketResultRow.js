import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../styles/TicketResultRow.css";

export default class TicketResultRow extends Component {
    static propTypes = {
        ticketName: PropTypes.string,
        // desc: PropTypes.string
        icon: PropTypes.string
    };

    render() {
        return (
            <div className='component-ticket-result-row'>
                <span className='ticketName'><i className={this.props.icon}></i> {this.props.ticketName}</span>
                <p className='desc'>{this.props.desc}</p>
            </div>
        );
    }
}