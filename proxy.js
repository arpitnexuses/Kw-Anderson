const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/countries', async (req, res) => {
    try {
        const response = await fetch('https://global.andersen.com/assets/member-firms/src/assets/js/countries.js');
        const data = await response.text();
        res.send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/api/us-offices', async (req, res) => {
    try {
        const response = await fetch('https://www.andersentax.com/offices/united_states_offices');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('Proxy server running on port 3000');
}); 