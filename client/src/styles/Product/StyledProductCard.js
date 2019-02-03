import styled from 'styled-components'

const StyledProductCard = styled.div`
	text-align: center;
	width: 430px;
	min-height: 480px;
	border: 2px solid gray;
	border-radius: 3px;
	background: linear-gradient(135deg, rgba(232,232,232,1) 0%, rgba(242,242,242,1) 32%, rgba(252,252,252,1) 40%, rgba(255,255,255,1) 100%);
	h1 {
        font-size: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 0;
		line-height: 4rem;
		height: 8rem;
	}
	h3 {
        font-size: 2.5rem;
		color: rgb(77, 77, 77);
	}
	img {
		width: 300px;
		height: 200px;
	}
	p {
        font-size: 2.3rem;
	}
	.button-container {
		display: flex;
		justify-content: center;
	}
`

export default StyledProductCard
