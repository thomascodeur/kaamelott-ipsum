const quotes = require("./quotes.json");
const express = require("express");
const app = express();

app.get(
    "/:quotes_to_display",
    (request, response) => {
        let quotes_to_display = parseInt(request.params.quotes_to_display)
        if (isNaN(quotes_to_display)) quotes_to_display = 10
        const oneQuote = () => quotes[Math.floor(Math.random()*quotes.length)]
        const xQuotes = (x) => {
            let quotes = "";
            for (let i =0; i < x; i++) {
                quotes += "\n"+oneQuote()
            }
            return quotes
        }
        response.status(200).send(xQuotes(parseInt(quotes_to_display)))
    }
);

app.listen(3000);
