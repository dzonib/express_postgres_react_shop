import styled from 'styled-components'

const StyledProductCard = styled.div`
    text-align: center;
    width: 300px;
    min-height: 480px;
    border: 1px solid gray;
    border-radius: 3px;
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
        line-height: 4rem;
        height: 8rem;
    }
    h3 {
        color: rgb(77, 77, 77);
    }
    img {
        width: 300px;
        height: 200px;
    }
    p {
        min-height: 90px;
    }
    .button-container {
        display: flex;
        justify-content: center;
    }
`

export default StyledProductCard