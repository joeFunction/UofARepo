module.exports = (app, connection) => {
    app.get("/api/plans", async (req, res) => {
        try {
            const rows = await connection.query("SELECT * FROM plan");

            res.json(rows);

        } catch (error) {
            console.log(error);

            res.status(500).json(error);
        }
    });

    app.get("/api/plans/:id", async (req, res) => {
        try {
            const query = "SELECT * FROM plan WHERE id = ?";
            const rows = await connection.query(query, req.params.id);

            res.json(rows[0]);

        } catch (error) {
            console.log(error);

            res.status(500).json(error);
        }
    });

    // Create a new plan
    app.post("/api/plans", async (req, res) => {
        try {
            const query = "INSERT INTO plan SET ?";
            const rows = await connection.query(query, req.body);

            // Send back the ID of the new plan
            res.json({ id: rows.insertId });

        } catch (error) {
            console.log(error);

            res.status(500).json(error);
        }
    });

    // Update a plan
    app.put("/api/plans/:id", async (req, res) => {
        try {
            const query = "UPDATE plan SET ? WHERE id = ?";
            const rows = await connection.query(query, [req.body, req.params.id]);

            if (rows.changedRows === 0) {
                res.status(404).end();
            }

            res.status(200).end();

        } catch (error) {
            console.log(error);

            res.status(500).json(error);
        }
    });

    // Delete a plan
    app.delete("/api/plans/:id", async (req, res) => {
        try {
            const query = "DELETE FROM plan WHERE id = ?";
            const rows = await connection.query(query, req.params.id);

            if (rows.affectedRows === 0) {
                res.status(404).end();
            }
            res.status(200).end();

        } catch (error) {
            console.log(error);

            res.status(500).json(error);
        }
    });
};
