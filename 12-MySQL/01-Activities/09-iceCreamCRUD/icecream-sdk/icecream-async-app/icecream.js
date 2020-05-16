const mysql = require("mysql2/promise");

const main = async () => {
    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "password",
            database: "icecream_db"
        });

        console.log(`Connected to database with id ${connection.threadId}`);

        await readProduct(connection);

        await createProduct(connection);

        await updateProduct(connection);

        await deleteProduct(connection);

        connection.end();
    } catch (err) {
        console.log(err)
    }
};

const readProduct = async (connection) => {
    const [rows, fields] = await connection.query("SELECT * FROM products");

    console.log(rows);
};

const createProduct = async (connection) => {
    const sqlQuery = "INSERT INTO products SET ?";
    const params = { flavor: "klondike", price: 3.98, quantity: 60 };

    const [rows, fields] = await connection.query(sqlQuery, params);

    console.log(rows);
};

const updateProduct = async (connection) => {
    const sqlQuery = "UPDATE products SET ?, ? WHERE ? AND ?";
    const params = [{ quantity: 400 }, { price: 3.99 }, { flavor: "rocky road" }, { id: 6 }];

    const [rows, fields] = await connection.query(sqlQuery, params);

    console.log(rows);
};

const deleteProduct = async (connection) => {
    const sqlQuery = "DELETE FROM products WHERE ?";
    const params = [{ flavor: "klondike" }];

    const [rows, fields] = await connection.query(sqlQuery, params);

    console.log(rows);
};

main();