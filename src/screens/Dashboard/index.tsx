import Image from "next/image";
import styled from "styled-components";
import Logo from "/public/static/images/logo/logo.png";
import Sidebar from "@components/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <Main>
      <Sidebar></Sidebar>
      <Container>
        <Title>Dashboard</Title>
        <CardsContainer>
          <QuotesContainer></QuotesContainer>
          <InvoicesContainer></InvoicesContainer>
          <AddUserContainer></AddUserContainer>
          <UserContainer></UserContainer>
          <HistoryContainer></HistoryContainer>
        </CardsContainer>
      </Container>
    </Main>
  );
};

const Main = styled.main`
  overflow: hidden;
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
  margin: auto;
  font-family: ${({ theme }) => theme.family.primary};
  font-size: ${({ theme }) => theme.size.h1};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.greyscale1};
`;

const CardsContainer = styled.div`
  padding-top: 24px;
  height: 100%;
  width: 100%;
  max-width: 1376px;
  margin: auto;
  display: grid;
  grid-template-columns:
    calc(40% - 20px)
    20px
    calc(35% - 20px)
    20px
    calc(25%);
  grid-template-rows:
    calc(35% - 20px)
    20px
    calc(15% - 10px)
    20px
    calc(50% - 10px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const QuotesContainer = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.bg2};
`;

const InvoicesContainer = styled.div`
  grid-area: 5 / 1 / 6 / 2;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.bg2};
`;

const AddUserContainer = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.bg2};
`;

const UserContainer = styled.div`
  grid-area: 3 / 3 / 6 / 4;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.bg2};
`;

const HistoryContainer = styled.div`
  grid-area: 1 / 5 / 6 / 6;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.bg2};
`;

export default Dashboard;
