
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello World with Github to Azure</h1>');
});


app.listen(port, () => console.log(`Server started on port ${port}`));
