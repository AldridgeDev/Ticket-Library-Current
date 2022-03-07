import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../styles/TicketResultRow.css";

export default class TicketResultRow extends Component {
    // Juan notes: 
    // Very good. This is Type-Script :-)
    // This is best practice and will be implemented in TSI code
    // TS also includes default, so lets added
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
        )
    }
}

  // look into prop defaults
TicketResultRow.defaultProps = {
    ticketName: 'Support Ticket',
    ticketRating: '3',
    tags: 'ticket',
    desc: 'This is a basic support ticket',
    icon: 'fas fa-code',
    template: 'This is where the template goes',
    category: 'Variety'
}