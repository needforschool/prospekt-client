import Image from "next/image";
import styled from "styled-components";
import Logo from "/public/static/images/logo/logo.png";

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Image src={Logo} alt="" width={430} height={130} />

        <SignIn>Sign in</SignIn>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #141522;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignIn = styled.button`
  width: 184px;
  height: 60px;
  background-color: #1a72f8;
  border-radius: 30px;
  color: #f5f5f5;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  line-height: 30px;
  margin-top: 120px;
`;

export default Home;
