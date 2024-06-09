import { FC } from 'react';
import { useTodoStore } from '@pages/Home/model/store/useTodoStore.ts';
import { Todo } from '@pages/Home/model/types/Todo.ts';
import { Item, Checkbox, Label, DeleteButton } from './styles.ts';

type Props = {
    todo: Todo;
};

const TodoItem: FC<Props> = (props) => {
    const { todo } = props;
    const toggleTodo = useTodoStore((state) => state.toggleTodo);
    const removeTodo = useTodoStore((state) => state.removeTodo);
    const id = todo.id.toString();

    return (
        <Item>
            <Checkbox
                id={id}
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <Label htmlFor={id} isCompleted={todo.completed}>
                {todo.text}
            </Label>
            <DeleteButton onClick={() => removeTodo(todo.id)}>×</DeleteButton>
        </Item>
    );
};

export default TodoItem;
