import ticketData from '../ticketData.json';

export default function FilterKeywords(searchText, maxResults) {
    return ticketData
        .filter(ticket => {
            if (ticket.ticketName.toLowerCase().includes(searchText.toLowerCase()) || (ticket.tags.includes(searchText))) {
                return true;
            }
            return false;
        }).slice(0, maxResults);
}