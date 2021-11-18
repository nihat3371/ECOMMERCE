import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    display:flex;
`;
const Left = styled.div`
    flex:1;
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
    display:flex;
`;
const SocialIcon = styled.div`

`;

const Center = styled.div`
    flex:1;
`;
const Right = styled.div`
    flex:1;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>DUKE.</Logo>
                <Desc>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Desc>
            </Left>
            <SocialContainer>
                <SocialIcon>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon>
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
            <Center></Center>
            <Right></Right>
            
        </Container>
    )
}

export default Footer
