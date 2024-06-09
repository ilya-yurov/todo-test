import { create } from 'zustand';
import type { Todo } from '@pages/Home/model/types/Todo.ts';

interface TodoState {
    todos: Todo[];
    filter: 'all' | 'active' | 'completed';
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
    clearCompleted: () => void;
    resetStore: () => void;
}

export const useTodoStore = create<TodoState>((set) => ({
    todos: [],
    filter: 'all',
    addTodo: (text) =>
        set((state) => ({
            todos: [...state.todos, { id: Date.now(), text, completed: false }]
        })),
    toggleTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        })),
    removeTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id)
        })),
    setFilter: (filter) => set(() => ({ filter })),
    clearCompleted: () =>
        set((state) => ({
            todos: state.todos.filter((todo) => !todo.completed)
        })),
    resetStore: () => set({ todos: [], filter: 'all' })
}));
