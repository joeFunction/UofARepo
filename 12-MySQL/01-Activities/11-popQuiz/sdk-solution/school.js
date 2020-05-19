const mysql = require("mysql2/promise");

const main = async () => {
    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "password",
            database: "schools_db"
        });

        console.log(`Connected to db with id: ${connection.threadId}`);

        await readSchool(connection);

        connection.end();
    } catch (error) {
        console.log(error);
    }
};

const readSchool = async (connection) => {
    const [rows, fields] = await connection.query("SELECT * FROM school");

    console.log(rows);
};

main();
