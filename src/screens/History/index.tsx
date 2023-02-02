import styled from "styled-components";
import Sidebar from "@components/Sidebar";

const History: React.FC = () => {
  return (
    <Main>
      <Sidebar></Sidebar>
      <Container>
        <Title>History</Title>
        <CardsContainer>
          <HistoryContainer>
            <HeadContainer>
              <HeadTitle>History</HeadTitle>
              <HeadButton href="/notes">Add notes</HeadButton>
            </HeadContainer>
            <ArrayContainer>
              <HeadRow>
                <FirstTitle>Actions</FirstTitle>
                <SecondTitle>User</SecondTitle>
                <ThirdTitle>Notes</ThirdTitle>
                <FourthTitle>Date</FourthTitle>
              </HeadRow>
              <ContainerRow>
                <ContentRow>
                  <FirstContent>Outgoing call</FirstContent>
                  <SecondContent>Alex Baumbach</SecondContent>
                  <ThirdContent>Molestias animi quidem iure.</ThirdContent>
                  <FourthContent>07/01/2023</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Payment received</FirstContent>
                  <SecondContent>Janice Heaney</SecondContent>
                  <ThirdContent>
                    Nisi mollitia nemo saepe expedita rem tempora quos.
                  </ThirdContent>
                  <FourthContent>02/01/2023</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>New customer registered</FirstContent>
                  <SecondContent>Reginald Doyle</SecondContent>
                  <ThirdContent>Autem earum praesentium.</ThirdContent>
                  <FourthContent>29/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>New prospect added</FirstContent>
                  <SecondContent>Willie Wilderman</SecondContent>
                  <ThirdContent>
                    Molestias ab placeat tempora doloremque.
                  </ThirdContent>
                  <FourthContent>29/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Email sent</FirstContent>
                  <SecondContent>Al Kemmer</SecondContent>
                  <ThirdContent>
                    Eveniet sunt tenetur hic labore enim.
                  </ThirdContent>
                  <FourthContent>29/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Quote created</FirstContent>
                  <SecondContent>Nathan Mertz</SecondContent>
                  <ThirdContent>
                    Dolores architecto omnis exercitationem ad alias maiores
                    quod accusamus.
                  </ThirdContent>
                  <FourthContent>21/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Invoice sent</FirstContent>
                  <SecondContent>Lori Bahringer</SecondContent>
                  <ThirdContent>
                    Alias aperiam aut molestiae non quo quia ab qui.
                  </ThirdContent>
                  <FourthContent>21/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Payment received</FirstContent>
                  <SecondContent>Angelo Miller</SecondContent>
                  <ThirdContent>
                    Magnam saepe quisquam porro aperiam et dolore quas officia
                    voluptas.
                  </ThirdContent>
                  <FourthContent>17/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Invoice sent</FirstContent>
                  <SecondContent>Jeremy Oberbrunner</SecondContent>
                  <ThirdContent>
                    Nihil laborum quod et et harum nesciunt quisquam voluptas.
                  </ThirdContent>
                  <FourthContent>05/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Email sent</FirstContent>
                  <SecondContent>Loretta Champlin</SecondContent>
                  <ThirdContent>Libero eos odio sunt laboriosam.</ThirdContent>
                  <FourthContent>03/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Quote created</FirstContent>
                  <SecondContent>Violet Heaney</SecondContent>
                  <ThirdContent>Ex voluptate ab.</ThirdContent>
                  <FourthContent>28/11/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Outgoing call</FirstContent>
                  <SecondContent>Lucas Labadie</SecondContent>
                  <ThirdContent>
                    Perferendis et blanditiis non eos.
                  </ThirdContent>
                  <FourthContent>28/11/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Outgoing call</FirstContent>
                  <SecondContent>Alex Baumbach</SecondContent>
                  <ThirdContent>Molestias animi quidem iure.</ThirdContent>
                  <FourthContent>07/01/2023</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Payment received</FirstContent>
                  <SecondContent>Janice Heaney</SecondContent>
                  <ThirdContent>
                    Nisi mollitia nemo saepe expedita rem tempora quos.
                  </ThirdContent>
                  <FourthContent>02/01/2023</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>New customer registered</FirstContent>
                  <SecondContent>Reginald Doyle</SecondContent>
                  <ThirdContent>Autem earum praesentium.</ThirdContent>
                  <FourthContent>29/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>New prospect added</FirstContent>
                  <SecondContent>Willie Wilderman</SecondContent>
                  <ThirdContent>
                    Molestias ab placeat tempora doloremque.
                  </ThirdContent>
                  <FourthContent>29/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Email sent</FirstContent>
                  <SecondContent>Al Kemmer</SecondContent>
                  <ThirdContent>
                    Eveniet sunt tenetur hic labore enim.
                  </ThirdContent>
                  <FourthContent>29/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Quote created</FirstContent>
                  <SecondContent>Nathan Mertz</SecondContent>
                  <ThirdContent>
                    Dolores architecto omnis exercitationem ad alias maiores
                    quod accusamus.
                  </ThirdContent>
                  <FourthContent>21/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Invoice sent</FirstContent>
                  <SecondContent>Lori Bahringer</SecondContent>
                  <ThirdContent>
                    Alias aperiam aut molestiae non quo quia ab qui.
                  </ThirdContent>
                  <FourthContent>21/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Payment received</FirstContent>
                  <SecondContent>Angelo Miller</SecondContent>
                  <ThirdContent>
                    Magnam saepe quisquam porro aperiam et dolore quas officia
                    voluptas.
                  </ThirdContent>
                  <FourthContent>17/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Invoice sent</FirstContent>
                  <SecondContent>Jeremy Oberbrunner</SecondContent>
                  <ThirdContent>
                    Nihil laborum quod et et harum nesciunt quisquam voluptas.
                  </ThirdContent>
                  <FourthContent>05/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Email sent</FirstContent>
                  <SecondContent>Loretta Champlin</SecondContent>
                  <ThirdContent>Libero eos odio sunt laboriosam.</ThirdContent>
                  <FourthContent>03/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Quote created</FirstContent>
                  <SecondContent>Violet Heaney</SecondContent>
                  <ThirdContent>Ex voluptate ab.</ThirdContent>
                  <FourthContent>28/11/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Outgoing call</FirstContent>
                  <SecondContent>Lucas Labadie</SecondContent>
                  <ThirdContent>
                    Perferendis et blanditiis non eos.
                  </ThirdContent>
                  <FourthContent>28/11/2022</FourthContent>
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
  display: flex;
  gap: 24px;
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

const Sep = styled.div`
  flex-shrink: 0;
  width: calc(100% - 8px);
  height: 1px;
  background-color: ${({ theme }) => theme.colors.greyscale2};
  opacity: 0.1;
`;

const ContainerRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
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

const HistoryContainer = styled.div`
  width: 100%;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.bg2};
  padding: 24px;
  display: flex;
  flex-direction: column;
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
  width: 20%;
`;

const SecondTitle = styled.h3`
  font-family: ${({ theme }) => theme.family.primary};
  font-size: ${({ theme }) => theme.size.big};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.greyscale1};
  width: 15%;
`;

const ThirdTitle = styled.h3`
  font-family: ${({ theme }) => theme.family.primary};
  font-size: ${({ theme }) => theme.size.big};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.greyscale1};
  width: 50%;
`;

const FourthTitle = styled.h3`
  font-family: ${({ theme }) => theme.family.primary};
  font-size: ${({ theme }) => theme.size.big};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.greyscale1};
  width: 10%;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FirstContent = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.small};
  color: ${({ theme }) => theme.colors.greyscale2};
  width: 20%;
`;

const SecondContent = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.small};
  color: ${({ theme }) => theme.colors.greyscale5};
  width: 15%;
`;

const ThirdContent = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.small};
  color: ${({ theme }) => theme.colors.greyscale2};
  width: 50%;
`;

const FourthContent = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.small};
  color: ${({ theme }) => theme.colors.greyscale5};
  width: 10%;
`;

export default History;
