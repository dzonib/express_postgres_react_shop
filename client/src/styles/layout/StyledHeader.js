import styled from 'styled-components'

const StyledHeader = styled.header`
	display: flex;
	height: 60px;
	justify-content: space-between;
	background-color: ${(props) => props.theme.darkGreen};
	ul {
		margin: 0;
		padding: 0;
		display: flex;
		li {
			position: relative;
			display: flex;
			align-items: center;
			padding: 0 10px;
			height: 100%;
			list-style: none;
			margin: 0 2rem;
			a {
				color: white;
				font-size: 2rem;
				font-weight: 600;
				&:hover {
					color: ${(props) => props.theme.yellow};
				}
			}
		}
	}
`
export default StyledHeader
