const express = require('express');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// POST route for adding a new artifact
app.post('/new', (req, res) => {
    const { name, rarity, image, website } = req.body;

    // Create the artifact object
    const artifact = { name, rarity, image, website };

    // Retrieve existing artifacts from local storage
    let artifacts = JSON.parse(localStorage.getItem('artifacts')) || [];

    // Add the new artifact to the array
    artifacts.push(artifact);

    // Store the updated artifacts array in local storage
    localStorage.setItem('artifacts', JSON.stringify(artifacts));

    // Send a success response
    res.json({ message: 'Artifact added successfully' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
