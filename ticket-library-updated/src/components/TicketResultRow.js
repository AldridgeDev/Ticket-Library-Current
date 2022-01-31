import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../styles/TicketResultRow.css";

export default class TicketResultRow extends Component {
    static propTypes = {
        ticketName: PropTypes.string,
        desc: PropTypes.string,
        icon: PropTypes.string,
        template: PropTypes.string,
        category: PropTypes.string,
    };

    render() {
        return (
            <div className='component-ticket-result-row'>
                <h3 className='ticketName'><i className={this.props.icon}></i> {this.props.ticketName}</h3>
                <span className='category'>{this.props.category}</span>
                <p className='desc'>{this.props.desc}</p>
            </div>
        );
    }
}