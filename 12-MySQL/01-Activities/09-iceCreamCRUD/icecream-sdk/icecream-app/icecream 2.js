const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "icecream_db"
});

connection.connect((err) => {
    if (err) {
        throw err;
    }

    console.log(`Connected to database with id ${connection.threadId}`);

    readProducts();
});

// CRUD operations
// C - CREATE - insert
// R - READ - select
// U - UPDATE - update
// D - DELETE - delete

// R - READ - select
const readProducts = () => {
    console.log(`Selecting all rows.......`);

    const sqlQuery = "SELECT * FROM products";

    connection.query(sqlQuery, (err, results) => {
        if (err) {
            throw err;
        }

        console.log(results);

        console.log(`--------------------------------`);

        createProduct();
    });
};

// C - CREATE - insert
const createProduct = () => {
    console.log(`Inserting a new row.......`);

    const sqlQuery = "INSERT INTO products SET ?";
    const params = { flavor: "rocky road", price: 3.60, quantity: 40 };

    connection.query(sqlQuery, params, (err, results) => {
        if (err) {
            throw err;
        }

        console.log(results);

        console.log(`--------------------------------`);

        updateProduct();
    });
};

// U - UPDATE - insert
const updateProduct = () => {
    console.log(`Updating row.......`);

    const sqlQuery = "UPDATE products SET ?, ? WHERE ? AND ?";
    const params = [{ quantity: 20 }, { price: 3.70 }, { flavor: "rocky road" }, { id: 4 }];

    connection.query(sqlQuery, params, (err, results) => {
        if (err) {
            throw err;
        }

        console.log(results);

        console.log(`--------------------------------`);

        deleteProduct();
    });
};

// D - DELETE - delete
const deleteProduct = () => {
    console.log(`Deleting row.......`);

    const sqlQuery = "DELETE FROM products WHERE ?";
    const params = [{ flavor: "rocky road" }];

    connection.query(sqlQuery, params, (err, results) => {
        if (err) {
            throw err;
        }

        console.log(results);

        console.log(`--------------------------------`);

        connection.end();
    });
};
