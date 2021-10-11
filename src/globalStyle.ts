import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        // Primary

            --Cyan: hsl(180, 66%, 49%);
            --Dark-Violet: hsl(257, 27%, 26%);

            // Secondary

            --Red: hsl(0, 87%, 67%);

            // Neutral

            --Gray: hsl(0, 0%, 75%);
            --Grayish-Violet: hsl(257, 7%, 63%);
            --Very-Dark-Blue: hsl(255, 11%, 22%);
            --Very-Dark-Violet: hsl(260, 8%, 14%);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
            
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        -webkit-font-smooth: antialiased;        
        margin: 0 ;
        overflow-x:hidden;
        
    }

    body, input, textarea  {
        font-family: 'Poppins', sans-serif;
        font-weight: 500, 700;
    }

    a{
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6, strong, button {
        font-weight: 600;
    }
`;
