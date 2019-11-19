export interface Todo {
    title: string;
    description: string;
}

export function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ... todo, ...fieldsToUpdate };
}
