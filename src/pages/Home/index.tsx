import type { FC } from 'react';
import Heading from './ui/Heading';
import List from './ui/List';
import Footer from './ui/Footer';
import { Container, Header, Wrapper } from './styles';

const Home: FC = () => {
    return (
        <Wrapper>
            <Header>TODOS</Header>
            <Container>
                <Heading />
                <List />
                <Footer />
            </Container>
        </Wrapper>
    );
};

export default Home;
