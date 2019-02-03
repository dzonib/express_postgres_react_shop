import styled from 'styled-components'

const StyledProductsList = styled.div`
    display: grid;
    justify-content: space-between;
    margin: 6rem;
    
    grid-template-columns: repeat(3, 1fr)
    /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
`

export default StyledProductsList