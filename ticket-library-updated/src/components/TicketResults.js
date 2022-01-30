import React, { Component } from 'react';
import PropTypes from "prop-types";
import TicketResultRow from "./TicketResultRow";
import '../styles/TicketResults.css';

export default class TicketResults extends Component {
    static propTypes = {
        ticketData: PropTypes.array
    };

    render() {
        return (
            <div className='component-emoji-results'>
                {this.props.ticketData.map(ticketData => (
                    <TicketResultRow 
                        key={ticketData.ticketName}
                        ticketName={ticketData.ticketName}
                    />
                ))}
            </div>
        );
    }
}