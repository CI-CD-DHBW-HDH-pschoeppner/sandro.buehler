import { writable } from "svelte/store";

export class TodoItem {
  id = "";
  value = "";
  done = false;
}

// this function must return a unique ID every time it is called
export function generateID(): string {
  const uniqueID = Math.random().toString(16).substring(2); // get a random
  return uniqueID;
}
// make sure, that
// the value isn't longer than 255 characters
// the value isn' empty
// the todo isn't contained in the todos array (case insensitive)
export function validateTodo(todo: TodoItem, todos: TodoItem[]): boolean {
  if (todo.value.length === 0 || todo.value.length > 255) {
    // value is either empty or longer than 255 characters
    return false;
  }

  const normalizedValue = todo.value.toLowerCase();
  const isDuplicate = todos.some(
    (existingTodo) => existingTodo.value.toLowerCase() === normalizedValue
  );
  if (isDuplicate) {
    // todo is already in the array (case insensitive)
    return false;
  }

  // all validation checks passed
  return true;
}

// capitalize the first letter of the todo
export function formatTodo(todo: TodoItem): TodoItem {
  const formattedValue =
    todo.value.charAt(0).toUpperCase() + todo.value.slice(1);
  // erstelle eine Kopie der TodoItem-Instanz und ändere das formatierte Feld
  const formattedTodo: TodoItem = {
    ...todo,
    value: formattedValue,
  };
  return formattedTodo;
}

// generate a random rgb color
// each value (r,g,b) should be between 50 and 150
export function generateColor(): string {
  const r = Math.floor(Math.random() * 101) + 50; // generate a random value between 50 and 150 for red
  const g = Math.floor(Math.random() * 101) + 50; // generate a random value between 50 and 150 for green
  const b = Math.floor(Math.random() * 101) + 50; // generate a random value between 50 and 150 for blue
  const rgb = `rgb(${r}, ${g}, ${b})`; // combine the values to create the RGB string
  return rgb;
}

export const todoList = writable<TodoItem[]>([]);
