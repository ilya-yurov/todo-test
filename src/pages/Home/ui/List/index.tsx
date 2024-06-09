import { FC, useMemo } from 'react';
import { useTodoStore } from '@pages/Home/model/store/useTodoStore.ts';
import TodoItem from './Item';
import { List } from './styles';

const TodoList: FC = () => {
    const todos = useTodoStore((state) => state.todos);
    const filter = useTodoStore((state) => state.filter);

    const filteredTodos = useMemo(() => {
        return todos.filter((todo) => {
            if (filter === 'active') {
                return !todo.completed;
            }

            if (filter === 'completed') {
                return todo.completed;
            }

            return true;
        });
    }, [todos, filter]);

    return (
        <List>
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </List>
    );
};

export default TodoList;
