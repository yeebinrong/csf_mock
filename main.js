// load libraries
const { json } = require('express');
const express = require('express');
const withQuery = require('with-query').default;
const fetch = require('node-fetch');

// declare an instance of express
const app = express()

// declare port
const PORT = parseInt(process.env.PORT) || 3000;
const API_KEY = process.env.BIT_API;

// Create link to angular build directory
var distDir = __dirname + "/client/dist/";
app.use(express.static(distDir));

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });

app.get('/api/:url', async (req, resp) => {
    const URL = req.params.url;
    const ENDPOINT = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/short?crypto=BTC&fiat=USD,EUR'

    try {
        const results = await fetch(ENDPOINT, {
            method: 'GET',
            headers: {
                'x-ba-key': API_KEY,
                'Accept': 'application/json'
            }
        })
        const data = await results.json();
        console.log(data);
        resp.status(200)
        resp.type('application/json')
        resp.send(data);
    } catch (e) {
        console.error('error fetching', e)
    }

})

app.listen(PORT, () => {
    console.info(`Application is listening on port ${PORT} at ${new Date()}`);
})