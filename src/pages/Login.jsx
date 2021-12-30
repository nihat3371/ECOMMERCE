import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-left: 10px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom:
`;


const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    cursor: pointer;
    margin-left: 10px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
    margin-left: 10px;
`;


const Login = () => {
    return (
        <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link>DO NOT YOU REMEMBER YOUR PASSWORD?</Link>
                <Link>CREATE A NEWW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login
