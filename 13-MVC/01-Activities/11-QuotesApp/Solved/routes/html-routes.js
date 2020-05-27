module.exports = (app, connection) => {
    // Serve index.handlebars to the root route.
    app.get("/", async (req, res) => {
        try {
            const query = "SELECT * FROM quote";

            const data = await connection.query(query);

            res.render("index", { quotes: data });

        } catch (error) {
            console.log(error);

            res.status(500).json(error);
        }
    });

    // Show the user the individual quote and the form to update the quote.
    app.get("/:id", async (req, res) => {
        try {
            const query = "SELECT * FROM quote where id = ?";

            const data = await connection.query(query, req.params.id);

            res.render("single-quote", data[0]);

        } catch (error) {
            console.log(error);

            res.status(500).json(error);
        }
    });
};