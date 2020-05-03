/**
 * This is with reference to
 * AWS code build for bean stalk
 * 
 * Reference URL : https://github.com/backspace-academy/aws-nodejs-sample-codebuild
 * Take 
 */

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.status(200);
    response.send({
        "welocme" : "We'll be there soon!!",
        "codepipes" : "Code pipe is integrated"
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening at port ${port}`));

