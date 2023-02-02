import styled from "styled-components";
import Sidebar from "@components/Sidebar";

const Thanks: React.FC = () => {
  return (
    <Main>
      <Sidebar></Sidebar>
      <Container>
        <Title>Thanks! 💙</Title>
        <Subtitle>Payment successful</Subtitle>
        <ContainerButton>
          <DashboardButton href="/dashboard">Back to dashboard</DashboardButton>
        </ContainerButton>
      </Container>
    </Main>
  );
};

const Main = styled.main`
  width: 100%;
  display: flex;
  height: unset;
`;

const Container = styled.div`
  margin-left: 245px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: calc(100% - 245px);
  padding: 32px 24px;
`;

const Title = styled.h1`
  width: 100%;
  max-width: 1376px;
  padding-top: 240px;
  margin: 0 auto;
  text-align: center;
  font-family: ${({ theme }) => theme.family.primary};
  font-size: ${({ theme }) => theme.size.h1};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.greyscale1};
`;

const Subtitle = styled.p`
  width: 100%;
  max-width: 1376px;
  padding-top: 24px;
  margin: 0 auto;
  text-align: center;
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.big};
  font-weight: ${({ theme }) => theme.weight.regular};
  color: ${({ theme }) => theme.colors.greyscale1};
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1376px;
  padding-top: 48px;
  margin: 0 auto;
`;

const DashboardButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  background-color: #1a72f8;
  border-radius: 20px;
  font-family: ${({ theme }) => theme.family.primary};
  font-size: ${({ theme }) => theme.size.big};
  font-weight: ${({ theme }) => theme.weight.medium};
  color: ${({ theme }) => theme.colors.greyscale1};
  text-align: center;
  border: none;
  cursor: pointer;
`;

export default Thanks;
