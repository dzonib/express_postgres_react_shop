import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
    }

    body {
        font-family: 'Permanent Marker', cursive;
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
        line-height: 2;
        color: ${props => props.theme.black} ;
        

        a {
            text-decoration: none;
        }
    }
`

export default GlobalStyle
