import { render, screen } from '@test/testUtils';
import Heading from './index';

describe('Heading component', () => {
    it('Renders input with the correct placeholder', () => {
        render(<Heading />);
        const inputElement = screen.getByPlaceholderText(
            'What needs to be done?'
        );

        expect(inputElement).toBeInTheDocument();
    });
});
