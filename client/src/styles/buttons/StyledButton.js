import styled from 'styled-components'

const StyledButton = styled.button`
	padding: .5rem 1rem;
	font-size: 1.7rem;
    height: 34px;
    margin: ${props => props.details ? 'auto' : '5px auto'};
	display: block;
	border: ${props => props.danger ? '1px solid red' : "1px solid" + props.theme.darkGreen};
	border-radius: 5px;
	background: white;
	color: ${(props) => props.danger ? 'red' : props.theme.darkGreen};
    width: ${props => props.details ? '600px' : '130px'};
    

    &:hover {
        background: ${(props) => props.danger ? 'red' : props.theme.darkGreen};
        color: white;
        cursor: pointer;
    }
    &:focus {
        outline: yellow;
    }
`

export default StyledButton
