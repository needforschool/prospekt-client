import styled from "styled-components";
import Sidebar from "@components/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <Main>
      <Sidebar></Sidebar>
      <Container>
        <Title>Dashboard</Title>
        <CardsContainer>
          <QuotesContainer>
            <HeadContainer>
              <HeadTitle>Quotes</HeadTitle>
              <HeadButton href="/quotes">See all</HeadButton>
            </HeadContainer>
            <ArrayContainer>
              <HeadRow>
                <FirstTitle>Clients</FirstTitle>
                <SecondTitle>Date</SecondTitle>
                <ThirdTitle>Amount</ThirdTitle>
              </HeadRow>
              <ContainerRow>
                <ContentRow>
                  <FirstContent>Botosh</FirstContent>
                  <SecondContent>12/01/2022</SecondContent>
                  <ThirdContent>732.37$</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Press</FirstContent>
                  <SecondContent>11/28/2022</SecondContent>
                  <ThirdContent>932.11$</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Korsgaard</FirstContent>
                  <SecondContent>11/16/2022</SecondContent>
                  <ThirdContent>621.68$</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Calzoni</FirstContent>
                  <SecondContent>11/12/2022</SecondContent>
                  <ThirdContent>518.46$</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Kock-Bouabid</FirstContent>
                  <SecondContent>11/07/2022</SecondContent>
                  <ThirdContent>751$</ThirdContent>
                </ContentRow>
              </ContainerRow>
            </ArrayContainer>
          </QuotesContainer>
          <InvoicesContainer>
            <HeadContainer>
              <HeadTitle>Invoices</HeadTitle>
              <HeadButton href="/invoices">See all</HeadButton>
            </HeadContainer>
            <ArrayContainer>
              <HeadRow>
                <FirstTitle>Clients</FirstTitle>
                <SecondTitle>Status</SecondTitle>
                <ThirdTitle>Amount</ThirdTitle>
              </HeadRow>
              <ContainerRow>
                <ContentRow>
                  <FirstContent>Phillip</FirstContent>
                  <SecondContent data-status="paid">Paid</SecondContent>
                  <ThirdContent>199.50$</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Lipshutz</FirstContent>
                  <SecondContent data-status="canceled">Canceled</SecondContent>
                  <ThirdContent>2470.49$</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Dos Santos</FirstContent>
                  <SecondContent data-status="pending">Pending</SecondContent>
                  <ThirdContent>57.04$</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Workman</FirstContent>
                  <SecondContent data-status="pending">Pending</SecondContent>
                  <ThirdContent>3778$</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Schleifer</FirstContent>
                  <SecondContent data-status="paid">Paid</SecondContent>
                  <ThirdContent>248.27$</ThirdContent>
                </ContentRow>
              </ContainerRow>
            </ArrayContainer>
          </InvoicesContainer>
          <AddUserContainer>
            <HeadContainer>
              <HeadTitle>Add user</HeadTitle>
            </HeadContainer>
          </AddUserContainer>
          <UserContainer>
            <HeadContainer>
              <HeadTitle>Users</HeadTitle>
              <HeadButton href="/users">See all</HeadButton>
            </HeadContainer>
            {/* <ListContainer></ListContainer> */}
          </UserContainer>
          <HistoryContainer>
            <HeadContainer>
              <HeadTitle>History</HeadTitle>
              <HeadButton href="/history">See all</HeadButton>
            </HeadContainer>
            <ArrayContainer>
              <HeadRow>
                <FirstTitle2>Actions</FirstTitle2>
                <SecondTitle>Date</SecondTitle>
              </HeadRow>
              <ContainerRow>
                <ContentRow>
                  <FirstContent2>Outgoing call</FirstContent2>
                  <SecondContent2>17sec ago</SecondContent2>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent2>Payment received</FirstContent2>
                  <SecondContent2>1h07 ago</SecondContent2>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent2>New customer registered</FirstContent2>
                  <SecondContent2>5h47 ago</SecondContent2>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent2>New prospect added</FirstContent2>
                  <SecondContent2>11h47 ago</SecondContent2>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent2>Email sent</FirstContent2>
                  <SecondContent2>1day ago</SecondContent2>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent2>Quote created</FirstContent2>
                  <SecondContent2>3days ago</SecondContent2>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent2>Payment received</FirstContent2>
                  <SecondContent2>1month ago</SecondContent2>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent2>Invoice sent</FirstContent2>
                  <SecondContent2>4month ago</SecondContent2>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent2>Email sent</FirstContent2>
                  <SecondContent2>11months ago</SecondContent2>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent2>Quote created</FirstContent2>
                  <SecondContent2>1year ago</SecondContent2>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent2>Outgoing call</FirstContent2>
                  <SecondContent2>1year ago</SecondContent2>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent2>Email sent</FirstContent2>
                  <SecondContent2>1year ago</SecondContent2>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent2>Payment received</FirstContent2>
                  <SecondContent2>3year ago</SecondContent2>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent2>Invoice sent</FirstContent2>
                  <SecondContent2>3year ago</SecondContent2>
                </ContentRow>
              </ContainerRow>
            </ArrayContainer>
          </HistoryContainer>
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
  height: calc(100vh - 144px);
  width: 100%;
  max-width: 1376px;
  margin: auto;
  display: grid;
  grid-template-columns:
    calc(35% - 20px)
    20px
    calc(35% - 20px)
    20px
    calc(30%);
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
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const InvoicesContainer = styled.div`
  grid-area: 5 / 1 / 6 / 2;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.bg2};
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const HistoryContainer = styled.div`
  grid-area: 1 / 5 / 6 / 6;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.bg2};
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeadTitle = styled.h2`
  font-family: ${({ theme }) => theme.family.primary};
  font-size: ${({ theme }) => theme.size.h2};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.secondary1};
`;

const HeadButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  background-color: #1a72f8;
  border-radius: 20px;
  font-family: ${({ theme }) => theme.family.primary};
  font-size: ${({ theme }) => theme.size.big};
  color: ${({ theme }) => theme.colors.greyscale1};
  text-align: center;
  border: none;
  cursor: pointer;
`;

const ArrayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: calc(100% - 64px);
  margin-top: 24px;
`;

const HeadRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FirstTitle = styled.h3`
  font-family: ${({ theme }) => theme.family.primary};
  font-size: ${({ theme }) => theme.size.big};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.greyscale1};
  width: 25%;
`;

const FirstTitle2 = styled.h3`
  font-family: ${({ theme }) => theme.family.primary};
  font-size: ${({ theme }) => theme.size.big};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.greyscale1};
  width: 65%;
`;

const SecondTitle = styled.h3`
  font-family: ${({ theme }) => theme.family.primary};
  font-size: ${({ theme }) => theme.size.big};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.greyscale1};
  width: 25%;
`;

const ThirdTitle = styled.h3`
  font-family: ${({ theme }) => theme.family.primary};
  font-size: ${({ theme }) => theme.size.big};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.greyscale1};
  width: 25%;
`;

const ContainerRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #494a57;
    border-radius: 2px;
  }
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FirstContent = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.medium};
  color: ${({ theme }) => theme.colors.greyscale4};
  width: 25%;
`;

const FirstContent2 = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.small};
  color: ${({ theme }) => theme.colors.greyscale4};
  width: 65%;
`;

const SecondContent = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.medium};
  color: ${({ theme }) => theme.colors.greyscale5};
  width: 25%;
  &[data-status="paid"] {
    position: relative;
    padding-left: 20px;
    color: ${({ theme }) => theme.colors.status1};
    ::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 8px;
      height: 8px;
      background-color: ${({ theme }) => theme.colors.status1};
      border-radius: 50%;
      transform: translate(0, -50%);
    }
  }
  &[data-status="pending"] {
    position: relative;
    padding-left: 20px;
    color: ${({ theme }) => theme.colors.status2};
    ::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 8px;
      height: 8px;
      background-color: ${({ theme }) => theme.colors.status2};
      border-radius: 50%;
      transform: translate(0, -50%);
    }
  }
  &[data-status="canceled"] {
    position: relative;
    padding-left: 20px;
    color: ${({ theme }) => theme.colors.status3};
    ::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 8px;
      height: 8px;
      background-color: ${({ theme }) => theme.colors.status3};
      border-radius: 50%;
      transform: translate(0, -50%);
    }
  }
`;

const SecondContent2 = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.small};
  color: ${({ theme }) => theme.colors.greyscale5};
  width: 25%;
`;

const ThirdContent = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.medium};
  color: ${({ theme }) => theme.colors.greyscale4};
  width: 25%;
`;

const Sep = styled.div`
  flex-shrink: 0;
  width: calc(100% - 8px);
  height: 1px;
  background-color: ${({ theme }) => theme.colors.greyscale2};
  opacity: 0.1;
`;

const AddUserContainer = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.bg2};
  padding: 24px;
`;

const UserContainer = styled.div`
  grid-area: 3 / 3 / 6 / 4;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.bg2};
  padding: 24px;
`;

export default Dashboard;
