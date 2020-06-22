module.exports = (app, connection) => {
    // Serve index.handlebars to the root route, populated with all quote data.
    app.get("/", async (req, res) => {

    });

    // Serve single-quote.handlebars, populated with data that corresponds to the ID in the route URL.
    app.get("/:id", async (req, res) => {

    });
}