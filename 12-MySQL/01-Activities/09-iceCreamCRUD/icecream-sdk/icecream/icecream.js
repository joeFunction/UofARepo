const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "icecream_DB"
});

connection.connect((err) => {
    if (err) {
        throw err;
    }

    console.log(`connected as id ${connection.threadId}\n`);
    createProduct();
});

const createProduct = () => {
    console.log(`Inserting a new product...\n`);

    const params = { flavor: "Rocky Road", price: 3.0, quantity: 50 };

    const query = connection.query("INSERT INTO products SET ?", params, (err, res) => {
        if (err) {
            throw err;
        }

        console.log(`${res.affectedRows} product inserted!\n`);

        updateProduct();
    });

    console.log(query.sql);
}

const updateProduct = () => {
    console.log(`Updating all Rocky Road quantities...\n`);

    const params = [{ quantity: 100 }, { price: 4.00 }, { flavor: "Rocky Road" }];

    const query = connection.query("UPDATE products SET ? WHERE ?", params, (err, res) => {
        if (err) {
            throw err;
        }

        console.log(`${res.affectedRows} products updated!\n`);

        deleteProduct();
    });

    console.log(query.sql);
}

const deleteProduct = () => {
    console.log(`Deleting all strawberry icecream...\n`);

    const params = [{ flavor: "Rocky Road" }, { id: 19 }];

    const query = connection.query("DELETE FROM products WHERE ?", params, (err, res) => {
        if (err) {
            throw err;
        }

        console.log(`${res.affectedRows} products deleted!\n`);

        readProducts();
    });

    console.log(query.sql);
}

const readProducts = () => {
    console.log(`Selecting all products...\n`);

    const query = connection.query("SELECT * FROM products", (err, res) => {
        if (err) {
            throw err;
        }

        console.log(res);
        connection.end();
    });

    console.log(query.sql);
}
