import { Facebook, Instagram, Pinterest, Twitter, Room, MailOutline, Phone } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"column"})}
    
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;
const Desc = styled.p`
    margin: 20px 0px ;
`;
const SocialContainer = styled.div`
    display: flex;

`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor:"#eee8f8"})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display:flex;
    align-items: left;
    justify-content: left;
`;

const Payment = styled.img`
    height: 40px;
    
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>DUKE.</Logo>
                <Desc>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Desc>
                <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405f">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color= "55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color= "E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}} />
                    İzmir, Bayraklı- bla bla caddesi 
                </ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}} />
                    +90 123 456 78 90
                </ContactItem>
                <ContactItem ><MailOutline style={{marginRight:"10px"}} />
                    nihat3371@hotmail.com
                </ContactItem>
                <Payment src="https://www.citypng.com/public/uploads/preview/-11597193844xtj2mnv37b.png"/>
            </Right>
        </Container>
    )
}

export default Footer
