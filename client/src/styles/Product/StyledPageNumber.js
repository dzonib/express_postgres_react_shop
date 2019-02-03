import styled from 'styled-components'

export const StyledPageNumbers = styled.div`
	color: brown;
	display: flex;
	justify-content: center;

	a {
		display: inline;
		font-size: 2rem;
		margin: 2rem;
		border: ${(props) => (props.danger ? '1px solid red' : '3px solid' + props.theme.darkGreen)};
		background: white;
		color: ${(props) => (props.danger ? 'red' : props.theme.darkGreen)};
		padding: 1.3rem 2rem;
		&:hover {
			box-shadow: 1px 3px 4px 1px ${(props) => (props.danger ? 'red' : '#004940')};
			background: ${(props) => (props.theme.darkGreen)};
			color: ${(props) => (props.danger ? 'red' : 'white')};
			cursor: pointer;
			transition: all 0.1s ease-in;
            color: yellow;
		}

        &:active {
            color: yellow;
        }
	}

    .active {
        color: yellow;
        background: ${(props) => (props.theme.darkGreen)};
    }
`
