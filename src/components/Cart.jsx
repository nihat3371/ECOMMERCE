import styled from 'styled-components'
import Announcement from './Announcement'
import Footer from './Footer'
import Navbar from './Navbar'

const Container = styled.div`

`;

const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
