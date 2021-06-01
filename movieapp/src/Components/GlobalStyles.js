import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const globalStyle = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color:inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        background-color: rgba(25, 25, 25);
        color: white;
        padding-top : 85px;
    }
`;


// 나중에 폰트 바꾸기


export default globalStyle;