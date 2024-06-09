import { FC, useState, FormEvent } from 'react';
import { useTodoStore } from '@pages/Home/model/store/useTodoStore';
import { Input, Form, Button } from './styles';

const Heading: FC = () => {
    const [value, setValue] = useState('');
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (value.trim()) {
            addTodo(value.trim());
            setValue('');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="What needs to be done?"
            />
            <Button type="submit">Add</Button>
        </Form>
    );
};

export default Heading;
