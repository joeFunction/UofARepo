// Step - 1
const dbRequest = indexedDB.open("toDoList_db", 1);

// Step - 4: Initialization or whenever the version is changed.
dbRequest.onupgradeneeded = (event) => {
    console.log("Initializing database");
    console.log(event.target);

    const db = event.target.result;

    const store = db.createObjectStore("toDoList", { autoIncrement: true });

    store.createIndex("statusIndex", "status");
};

// Step - 2
dbRequest.onsuccess = event => {
    const db = event.target.result;
    console.log(`Successfully opened connection to db: ${db.name}`);

    addData(db);
    getData(db);
    getByStatus(db);
    updateData(db);
    deleteData(db);
    getAllUsingCursor(db);
};

// Step - 3
dbRequest.onerror = event => {
    console.log(`error opening db: ${event.target.error}`);
};

const addData = (db) => {
    const transaction = db.transaction(["toDoList"], "readwrite");
    const store = transaction.objectStore("toDoList");

    store.add({ item: "Teach class", status: "pending" });
    store.add({ item: "Read a book", status: "pending" });
    store.add({ item: "Play video game", status: "completed" });

    transaction.onsuccess = () => console.log("Successfully added to the db");
    transaction.onerror = event => console.log(`Unable to add data. Error: ${event.target.error}`);
};

const getData = (db) => {
    const transaction = db.transaction(["toDoList"], "readwrite");
    const store = transaction.objectStore("toDoList");

    const request = store.get(3);

    request.onsuccess = (event) => console.log(event.target.result);
    request.onerror = event => console.log(`Unable to add data. Error: ${event.target.error}`);
};

const getByStatus = (db) => {
    const transaction = db.transaction(["toDoList"], "readwrite");
    const store = transaction.objectStore("toDoList");
    const statusIndex = store.index("statusIndex");

    const request = statusIndex.getAll("completed");

    request.onsuccess = (event) => console.log(event.target.result);
    request.onerror = event => console.log(`Unable to add data. Error: ${event.target.error}`);
};

const updateData = (db) => {
    const transaction = db.transaction(["toDoList"], "readwrite");
    const store = transaction.objectStore("toDoList");

    const request = store.get(3);

    request.onsuccess = (event) => {
        const data = event.target.result;
        data.status = "pending";

        const requestUpdate = store.put(data, 3);

        requestUpdate.onsuccess = event => console.log(`Successfully updated data`);
        requestUpdate.onerror = event => console.log(`Unable to update data. Error: ${event.target.error}`);
    };
    request.onerror = event => console.log(`Unable to add data. Error: ${event.target.error}`);
};

const deleteData = (db) => {
    const request =
        db
            .transaction(["toDoList"], "readwrite")
            .objectStore("toDoList")
            .delete(33);

    request.onsuccess = event => console.log(`Successfully deleted data`);
    request.onerror = event => console.log(`Unable to delete data. Error: ${event.target.error}`);
};

const getAllUsingCursor = (db) => {
    const request =
        db
            .transaction(["toDoList"], "readwrite")
            .objectStore("toDoList")
            .openCursor();

    request.onsuccess = event => {
        const cursor = event.target.result;

        if (cursor) {
            console.log(cursor.value);
            if (cursor.value.item === "Teach class") {
                const todo = cursor.value;
                todo.status = "pending";
                cursor.update(todo);
            }
            cursor.continue();
        } else {
            console.log("No documents left!");
        }
    };
};
