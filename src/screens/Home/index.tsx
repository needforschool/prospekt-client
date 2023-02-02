import Button from "@components/Layout/Button";
import Image from "next/image";
import styled from "styled-components";
import Logo from "/public/static/images/logo/logo.png";

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <ImageContainer>
          <LogoImage src={Logo} alt="Prospekt logo" />
        </ImageContainer>
        <SignIn href="/signin">Sign in</SignIn>
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
  padding: 0 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 590px;
`;

const LogoImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  position: relative;
  height: unset;
  transform: translateY(-10px);
  transition: ease 0.5s;
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 10px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;

const SignIn = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
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
