const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.status(200);
    response.send({
        "welocme" : "We'll be there soon!!"
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening at port ${port}`));

