import type { FC } from 'react';
import { useTodoStore } from '@pages/Home/model/store/useTodoStore.ts';
import { FooterContainer, FilterButton, ClearButton } from './styles';

const Footer: FC = () => {
    const todos = useTodoStore((state) => state.todos);
    const filter = useTodoStore((state) => state.filter);
    const setFilter = useTodoStore((state) => state.setFilter);
    const clearCompleted = useTodoStore((state) => state.clearCompleted);
    const activeCount = todos.filter((todo) => !todo.completed).length;

    return (
        <FooterContainer>
            <span>{activeCount} items left</span>
            <div>
                <FilterButton
                    isActive={filter === 'all'}
                    onClick={() => setFilter('all')}
                    data-testid="filter-all"
                >
                    All
                </FilterButton>
                <FilterButton
                    isActive={filter === 'active'}
                    onClick={() => setFilter('active')}
                    data-testid="filter-active"
                >
                    Active
                </FilterButton>
                <FilterButton
                    isActive={filter === 'completed'}
                    onClick={() => setFilter('completed')}
                    data-testid="filter-completed"
                >
                    Completed
                </FilterButton>
            </div>
            <ClearButton onClick={clearCompleted}>Clear completed</ClearButton>
        </FooterContainer>
    );
};

export default Footer;
