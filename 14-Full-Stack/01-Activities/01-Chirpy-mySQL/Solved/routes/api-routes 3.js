const connection = require("../config/connection");

module.exports = (app) => {
  app.get("/api/chirps", async (req, res) => {
    try {
      const rows = await connection.query("SELECT * FROM chirp");

      res.json(rows);

    } catch (error) {
      console.log(error);

      res.status(500).json(error);
    }
  });

  app.post("/api/chirps", async (req, res) => {
    try {
      const query = "INSERT INTO chirp SET ?";
      const rows = await connection.query(query, req.body);

      // Send back the ID of the new plan
      res.json({ id: rows.insertId });

    } catch (error) {
      console.log(error);

      res.status(500).json(error);
    }
  });
};
