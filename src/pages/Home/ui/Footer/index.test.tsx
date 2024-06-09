import { render, screen } from '@test/testUtils';
import Footer from './index';

describe('Footer component', () => {
    it('renders the filter buttons correctly', () => {
        render(<Footer />);

        const allButton = screen.getByTestId('filter-all');
        const activeButton = screen.getByTestId('filter-active');
        const completedButton = screen.getByTestId('filter-completed');

        expect(allButton).toBeInTheDocument();
        expect(activeButton).toBeInTheDocument();
        expect(completedButton).toBeInTheDocument();
    });
});
