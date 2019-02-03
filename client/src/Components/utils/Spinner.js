import React from 'react'
import styled from 'styled-components'

import spinner from './spinner.gif'

const Spinner = () => {
	return <StyledImgContainer>
		<img src={spinner} alt="loading" />
	</StyledImgContainer>
}

const StyledImgContainer = styled.div`
	display: flex;
	justify-content: center;
`

export default Spinner
