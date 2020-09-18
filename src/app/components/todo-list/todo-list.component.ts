import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  todos: { text: string; done: boolean }[];

  todoText = "";

  ngOnInit() {
    this.todos = [
      { text: "learn Angular", done: true },
      { text: "build an Angular App", done: false },
    ];
  }

  addTodo() {
    this.todos.push({ text: this.todoText, done: false });

    this.todoText = "";
  }

  remaining() {
    let count = 0;
    this.todos.forEach((todo) => (count += todo.done ? 0 : 1));

    return count;
  }

  archive() {
    let oldTodos = this.todos;
    this.todos = [];

    oldTodos.forEach((todo) => {
      if (!todo.done) this.todos.push(todo);
    });
  }
}
