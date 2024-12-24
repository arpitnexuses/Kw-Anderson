document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('officesContainer');
    
    // Assuming your united_states_offices.js and countries.js export their data
    // Modify this according to how your data is structured
    function displayOffices() {
        const officesHTML = offices.map(office => `
            <div class="office-card">
                <h3>${office.name}</h3>
                <p>${office.address}</p>
                <p>Phone: ${office.phone}</p>
            </div>
        `).join('');
        
        container.innerHTML = officesHTML;
    }

    displayOffices();
}); 