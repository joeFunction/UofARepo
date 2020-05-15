const mysql = require("mysql2/promise");

const insertProduct = async (connection) => {
    const params = { flavor: "Rocky Road", price: 3.0, quantity: 50 };

    const [rows, fields] = await connection.query("INSERT INTO products SET ?", params);
    console.log(rows);
};

const updateProduct = async (connection) => {
    const params = [{ quantity: 100 }, { price: 4.00 }, { flavor: "Rocky Road" }];

    const [rows, fields] = await connection.query("UPDATE products SET ?, ? WHERE ?", params);
    console.log(rows);
};

const readProduct = async (connection) => {
    const [rows, fields] = await connection.query("SELECT * FROM products");
    console.log(rows);
};

const deleteProduct = async (connection) => {
    const params = [{ flavor: "Rocky Road" }, { id: 19 }];

    const [rows, fields] = await connection.query("DELETE FROM products WHERE ? AND ?", params);
    console.log(rows);
};

const main = async () => {
    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "password",
            database: "icecream_DB"
        });

        console.log(`Connected as id ${connection.threadId}`);

        await insertProduct(connection);

        await readProduct(connection);

        await updateProduct(connection);

        await deleteProduct(connection);

        connection.end();
    } catch (err) {
        console.log(err);
    }
};

main();
