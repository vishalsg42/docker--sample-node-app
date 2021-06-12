const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.send('Hello World!');
});

const server = app.listen(8000, ()=> {
    const address = server.address().address;
    const port = server.address().port;
    console.log(`App at http://${address}:${port}`);
});
