import { render, screen } from '@test/testUtils';
import TodoItem from './index';

const mockTodo = {
    id: 1,
    text: 'Test Task',
    completed: false
};

describe('TodoItem Component', () => {
    it('renders task label correctly', () => {
        render(<TodoItem todo={mockTodo} />);

        const taskLabel = screen.getByText('Test Task');

        expect(taskLabel).toBeInTheDocument();
    });
});
