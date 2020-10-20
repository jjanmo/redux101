import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        padding : 0;
        margin : 0;
        box-sizing : border-box;
    }
    body{
        font-family:'Times New Roman', Times, serif;
    }
    a{
        text-decoration : none;
        color : inherit;
    }
    li{
        list-style: none;
    }
`;

export default GlobalStyles;
