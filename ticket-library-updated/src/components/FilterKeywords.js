import ticketData from '../ticketData.json';

export default function FilterKeywords(searchText, maxResults = 20) {
    return ticketData
        .filter(ticket => {
            let searchTerm = searchText.toLowerCase();
            let tagNames = JSON.stringify(ticket.tags);
            

            /* let tagNames = ticket.tags; */

            if (ticket.ticketName.toLowerCase().includes(searchTerm) || 
               (ticket.category.toLowerCase().includes(searchTerm)) ||
               (tagNames.toLowerCase().includes(searchTerm))){
                return true;
            }
            return false;
        }).slice(0, maxResults);
}