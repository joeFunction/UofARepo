module.exports = (app, connection) => {
    app.post("/api/quotes", async (req, res) => {
        try {
            const query = "INSERT INTO quote SET ?";

            const data = await connection.query(query, req.body);

            res.status(200).json({ id: data.insertId });

        } catch (error) {
            console.log(error);

            res.status(500).json(error);
        }
    });

    app.delete("/api/quotes/:id", async (req, res) => {
        try {
            const query = "DELETE FROM quote WHERE id = ?";

            const data = await connection.query(query, req.params.id);

            if (data.affectedRows === 0) {
                res.status(404).end();
            }

            res.status(200).end();

        } catch (error) {
            console.log(error);

            res.status(500).json(error);
        }
    });

    // Update a quote by an id and then redirect to the root route.
    app.put("/api/quotes/:id", async (req, res) => {
        try {
            const query = "UPDATE quote SET ? WHERE id = ?";

            const data = await connection.query(query, [req.body, req.params.id]);

            if (data.changedRows === 0) {
                res.status(404).end();
            }

            res.status(200).end();

        } catch (error) {
            console.log(error);

            res.status(500).json(error);
        }
    });
};