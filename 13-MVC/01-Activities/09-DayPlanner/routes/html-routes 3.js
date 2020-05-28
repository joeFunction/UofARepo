module.exports = (app, connection) => {
    app.get("/", async (req, res) => {
        try {
            const rows = await connection.query("SELECT * FROM plan");

            res.render("plan", { plans: rows });

        } catch (error) {
            console.log(error);
            
            res.status(500).json(error);
        }
    });
};
