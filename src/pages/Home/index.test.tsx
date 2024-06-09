import { render, fireEvent, screen } from '@test/testUtils';
import Home from './index';
import { useTodoStore } from '@pages/Home/model/store/useTodoStore.ts';

beforeEach(() => {
    useTodoStore.getState().resetStore();
});

describe('Home Component', () => {
    it('Adds a new todo when a task is submitted', () => {
        render(<Home />);

        const input = screen.getByPlaceholderText('What needs to be done?');
        const addButton = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.click(addButton);

        const todoItem = screen.getByText('New Task');

        expect(todoItem).toBeInTheDocument();
    });

    it('Toggles the completed status of a todo when clicked', () => {
        render(<Home />);
        const input = screen.getByPlaceholderText('What needs to be done?');
        const addButton = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'Test Task' } });
        fireEvent.click(addButton);

        const taskCheckbox = screen.getByRole('checkbox');

        fireEvent.click(taskCheckbox);

        expect(taskCheckbox).toBeChecked();

        fireEvent.click(taskCheckbox);

        expect(taskCheckbox).not.toBeChecked();
    });
});
