const Todo = require("./Todo");

class TodoList {
  constructor() {
    this.todos = [];
  };

  addTodo(text) {
    this.todos.push(new Todo(text));
  };

  getNextTodo() {
    return this.todos[0];
  };

  completeNextTodo() {
    return this.todos.shift();
  };
}

module.exports = TodoList;
