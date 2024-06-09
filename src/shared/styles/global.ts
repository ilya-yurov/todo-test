import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/Roboto400.woff2') format('woff2'),
        url('/fonts/Roboto400.woff') format('woff');
    }
    
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        src: url('/fonts/Roboto700.woff2') format('woff2'),
        url('/fonts/Roboto700.woff') format('woff');
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme.colors.darkBlue};
    }

    p,
    h4,
    h3,
    h2,
    h1 {
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        margin: 0;
        padding-left: 0;
        list-style: none;
    }

    button {
        padding: 0;
        border: none;
        cursor: pointer;
        background-color: transparent;
        font: inherit;
        line-height: inherit;
        appearance: none;
    }
    
    input {
        border: none;
        outline: none;
    }

    input::-ms-clear {
        display: none;
    }

    /* stylelint-disable selector-no-qualifying-type */
    input[type='search']::-webkit-search-decoration,
    input[type='search']::-webkit-search-cancel-button,
    input[type='search']::-webkit-search-results-button,
    input[type='search']::-webkit-search-results-decoration {
        display: none;
    }
    /* stylelint-enable selector-no-qualifying-type */

    :-webkit-autofill {
        background-clip: text;
    }
`;

export default GlobalStyles;
