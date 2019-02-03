import styled from 'styled-components'




const StyledButton = styled.button`
    font-weight: bold;
	padding: .5rem 1rem;
	font-size: 1.7rem;
    height: 34px;
    margin: ${props => props.details ? 'auto' : '20px auto'};
	display: block;
	border: ${props => props.danger ? '1px solid red' : "1px solid" + props.theme.darkGreen};
	border-radius: 5px;
	background: white;
	color: ${(props) => props.danger ? 'red' : props.theme.darkGreen};
    width: ${props => props.details ? '600px' : '170px'};
    box-shadow: 2px 1px 4px 1px;
    transition: all 0.1s;
    
    &:hover {
        box-shadow: 1px 3px 4px 1px ${props => props.danger ? 'red' : '#004940'};
        background: ${props => props.danger ? 'white' : props.theme.darkGreen};
        color: ${props => props.danger ? 'red' : 'white'};
        cursor: pointer;
        transition: all 0.1s linear
        
    }
    &:focus {
        outline: yellow;
    }
    &:active {
        transform: translateY(1.5px);
        box-shadow: none;
    }
`

export default StyledButton