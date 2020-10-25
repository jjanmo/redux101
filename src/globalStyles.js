import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        padding : 0;
        margin : 0;
        box-sizing : border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color :#eee;
    }
    a{
        text-decoration : none;
        color : inherit;
    }
    li{
        list-style: none;
    }
    input, textarea {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`;

export default GlobalStyles;
