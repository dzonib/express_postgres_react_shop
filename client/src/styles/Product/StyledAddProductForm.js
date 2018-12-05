import styled from 'styled-components'


const StyledAddProductForm = styled.form`

    width: 300px;
    margin: 30px auto;
    border: 1px solid #f4f4f4;
    padding: 30px 30px 20px 30px;
    box-shadow: 1px 1px 5px ${props => props.theme.darkGreen};
    h1 {
        text-align: center;
        padding: 0;
        margin: 0 auto;
        border-bottom: 1.5px solid ${props => props.theme.darkGreen};
        line-height: 3rem;
    }
    label {
        display: block;
        font-weight: 500;
        line-height: 1rem;
        margin-top: 1rem;
    }
    input {
        width: 100%;
        border: 1px solid ${props => props.theme.darkGreen};
        outline-color: ${props => props.theme.darkGreen};
        line-height: 2rem;
        font-size: 95%;
        border-radius: 3px;
    }
    textarea {
        width: 100%;
        border: 1px solid ${props => props.theme.darkGreen};
        outline-color: ${props => props.theme.darkGreen};
        font-size: 95%;
        margin-top: 3.5px;
        border-radius: 3px;
    }
`

export default StyledAddProductForm