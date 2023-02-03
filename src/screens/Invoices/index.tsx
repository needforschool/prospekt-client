import React, { useEffect } from "react";
import styled from "styled-components";
import Sidebar from "@components/Sidebar";

const Invoices: React.FC = () => {
  const [userRole, setUserRole] = React.useState("");

  function getCookie() {
    const name = "role";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        setUserRole(c.split("=")[1]);
      }
    }
    return false;
  }
  const mount = true;
  useEffect(() => {
    getCookie();
  }, [mount]);
  return (
    <Main>
      <Sidebar></Sidebar>
      <Container>
        <Title>Invoices</Title>
        <CardsContainer>
          {(() => {
            if (userRole === "Sales") {
              return (
                <InvoicesContainer>
                  <HeadContainer>
                    <HeadTitle>Invoices</HeadTitle>
                    <HeadButton href="/notes">Add notes</HeadButton>
                  </HeadContainer>
                  <ArrayContainer>
                    <HeadRow>
                      <FirstTitle>#ID</FirstTitle>
                      <SecondTitle>Customers</SecondTitle>
                      <ThirdTitle>Status</ThirdTitle>
                      <FourthTitle>Amount</FourthTitle>
                      <SixthTitle>Date</SixthTitle>
                    </HeadRow>
                    <ContainerRow>
                      <ContentRow>
                        <FirstContent>#4824</FirstContent>
                        <SecondContent>Phillip</SecondContent>
                        <ThirdContent data-status="paid">Paid</ThirdContent>
                        <FourthContent>199.50$</FourthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#1505</FirstContent>
                        <SecondContent>Lipshutz</SecondContent>
                        <ThirdContent data-status="canceled">
                          Canceled
                        </ThirdContent>
                        <FourthContent>2470.49$</FourthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#6157</FirstContent>
                        <SecondContent>Dos Santos</SecondContent>
                        <ThirdContent data-status="pending">
                          Pending
                        </ThirdContent>
                        <FourthContent>57.04$</FourthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#6940</FirstContent>
                        <SecondContent>Workman</SecondContent>
                        <ThirdContent data-status="pending">
                          Pending
                        </ThirdContent>
                        <FourthContent>3778$</FourthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#3591</FirstContent>
                        <SecondContent>Schleifer</SecondContent>
                        <ThirdContent data-status="paid">Paid</ThirdContent>
                        <FourthContent>248.27$</FourthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#4824</FirstContent>
                        <SecondContent>Phillip</SecondContent>
                        <ThirdContent data-status="paid">Paid</ThirdContent>
                        <FourthContent>199.50$</FourthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#1505</FirstContent>
                        <SecondContent>Lipshutz</SecondContent>
                        <ThirdContent data-status="canceled">
                          Canceled
                        </ThirdContent>
                        <FourthContent>2470.49$</FourthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#6157</FirstContent>
                        <SecondContent>Dos Santos</SecondContent>
                        <ThirdContent data-status="pending">
                          Pending
                        </ThirdContent>
                        <FourthContent>57.04$</FourthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#6940</FirstContent>
                        <SecondContent>Workman</SecondContent>
                        <ThirdContent data-status="pending">
                          Pending
                        </ThirdContent>
                        <FourthContent>3778$</FourthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#3591</FirstContent>
                        <SecondContent>Schleifer</SecondContent>
                        <ThirdContent data-status="paid">Paid</ThirdContent>
                        <FourthContent>248.27$</FourthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#4824</FirstContent>
                        <SecondContent>Phillip</SecondContent>
                        <ThirdContent data-status="paid">Paid</ThirdContent>
                        <FourthContent>199.50$</FourthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#1505</FirstContent>
                        <SecondContent>Lipshutz</SecondContent>
                        <ThirdContent data-status="canceled">
                          Canceled
                        </ThirdContent>
                        <FourthContent>2470.49$</FourthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#6157</FirstContent>
                        <SecondContent>Dos Santos</SecondContent>
                        <ThirdContent data-status="pending">
                          Pending
                        </ThirdContent>
                        <FourthContent>57.04$</FourthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#6940</FirstContent>
                        <SecondContent>Workman</SecondContent>
                        <ThirdContent data-status="pending">
                          Pending
                        </ThirdContent>
                        <FourthContent>3778$</FourthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#3591</FirstContent>
                        <SecondContent>Schleifer</SecondContent>
                        <ThirdContent data-status="paid">Paid</ThirdContent>
                        <FourthContent>248.27$</FourthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                    </ContainerRow>
                  </ArrayContainer>
                </InvoicesContainer>
              );
            } else {
              return (
                <InvoicesContainer>
                  <HeadContainer>
                    <HeadTitle>Invoices</HeadTitle>
                    <HeadButton href="/notes">Add notes</HeadButton>
                  </HeadContainer>
                  <ArrayContainer>
                    <HeadRow>
                      <FirstTitle>#ID</FirstTitle>
                      <SecondTitle>Sales</SecondTitle>
                      <ThirdTitle>Status</ThirdTitle>
                      <FourthTitle>Amount</FourthTitle>
                      <FifthTitle>Payment</FifthTitle>
                      <SixthTitle>Date</SixthTitle>
                    </HeadRow>
                    <ContainerRow>
                      <ContentRow>
                        <FirstContent>#4824</FirstContent>
                        <SecondContent>Phillip</SecondContent>
                        <ThirdContent data-status="paid">Paid</ThirdContent>
                        <FourthContent>199.50$</FourthContent>
                        <FifthContent2></FifthContent2>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#1505</FirstContent>
                        <SecondContent>Lipshutz</SecondContent>
                        <ThirdContent data-status="canceled">
                          Canceled
                        </ThirdContent>
                        <FourthContent>2470.49$</FourthContent>
                        <FifthContent2></FifthContent2>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#6157</FirstContent>
                        <SecondContent>Dos Santos</SecondContent>
                        <ThirdContent data-status="pending">
                          Pending
                        </ThirdContent>
                        <FourthContent>57.04$</FourthContent>
                        <FifthContent href="">Stripe</FifthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#6940</FirstContent>
                        <SecondContent>Workman</SecondContent>
                        <ThirdContent data-status="pending">
                          Pending
                        </ThirdContent>
                        <FourthContent>3778$</FourthContent>
                        <FifthContent href="">Stripe</FifthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#3591</FirstContent>
                        <SecondContent>Schleifer</SecondContent>
                        <ThirdContent data-status="paid">Paid</ThirdContent>
                        <FourthContent>248.27$</FourthContent>
                        <FifthContent2></FifthContent2>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#4824</FirstContent>
                        <SecondContent>Phillip</SecondContent>
                        <ThirdContent data-status="paid">Paid</ThirdContent>
                        <FourthContent>199.50$</FourthContent>
                        <FifthContent2></FifthContent2>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#1505</FirstContent>
                        <SecondContent>Lipshutz</SecondContent>
                        <ThirdContent data-status="canceled">
                          Canceled
                        </ThirdContent>
                        <FourthContent>2470.49$</FourthContent>
                        <FifthContent2></FifthContent2>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#6157</FirstContent>
                        <SecondContent>Dos Santos</SecondContent>
                        <ThirdContent data-status="pending">
                          Pending
                        </ThirdContent>
                        <FourthContent>57.04$</FourthContent>
                        <FifthContent href="">Stripe</FifthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#6940</FirstContent>
                        <SecondContent>Workman</SecondContent>
                        <ThirdContent data-status="pending">
                          Pending
                        </ThirdContent>
                        <FourthContent>3778$</FourthContent>
                        <FifthContent href="">Stripe</FifthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#3591</FirstContent>
                        <SecondContent>Schleifer</SecondContent>
                        <ThirdContent data-status="paid">Paid</ThirdContent>
                        <FourthContent>248.27$</FourthContent>
                        <FifthContent2></FifthContent2>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#4824</FirstContent>
                        <SecondContent>Phillip</SecondContent>
                        <ThirdContent data-status="paid">Paid</ThirdContent>
                        <FourthContent>199.50$</FourthContent>
                        <FifthContent href="">Stripe</FifthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#1505</FirstContent>
                        <SecondContent>Lipshutz</SecondContent>
                        <ThirdContent data-status="canceled">
                          Canceled
                        </ThirdContent>
                        <FourthContent>2470.49$</FourthContent>
                        <FifthContent2></FifthContent2>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#6157</FirstContent>
                        <SecondContent>Dos Santos</SecondContent>
                        <ThirdContent data-status="pending">
                          Pending
                        </ThirdContent>
                        <FourthContent>57.04$</FourthContent>
                        <FifthContent href="">Stripe</FifthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#6940</FirstContent>
                        <SecondContent>Workman</SecondContent>
                        <ThirdContent data-status="pending">
                          Pending
                        </ThirdContent>
                        <FourthContent>3778$</FourthContent>
                        <FifthContent href="">Stripe</FifthContent>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                      <Sep></Sep>
                      <ContentRow>
                        <FirstContent>#3591</FirstContent>
                        <SecondContent>Schleifer</SecondContent>
                        <ThirdContent data-status="paid">Paid</ThirdContent>
                        <FourthContent>248.27$</FourthContent>
                        <FifthContent2></FifthContent2>
                        <SixthContent>18/11/2022</SixthContent>
                      </ContentRow>
                    </ContainerRow>
                  </ArrayContainer>
                </InvoicesContainer>
              );
            }
          })()}
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

const InvoicesContainer = styled.div`
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
  width: 10%;
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
  width: 10%;
`;

const FourthTitle = styled.h3`
  font-family: ${({ theme }) => theme.family.primary};
  font-size: ${({ theme }) => theme.size.big};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.greyscale1};
  width: 10%;
`;

const FifthTitle = styled.h3`
  font-family: ${({ theme }) => theme.family.primary};
  font-size: ${({ theme }) => theme.size.big};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.greyscale1};
  width: 10%;
`;

const SixthTitle = styled.h3`
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
  font-size: ${({ theme }) => theme.size.big};
  color: ${({ theme }) => theme.colors.greyscale5};
  width: 10%;
`;

const SecondContent = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.medium};
  color: ${({ theme }) => theme.colors.greyscale2};
  width: 15%;
`;

const ThirdContent = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.medium};
  color: ${({ theme }) => theme.colors.greyscale5};
  width: 10%;
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

const FourthContent = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.medium};
  color: ${({ theme }) => theme.colors.greyscale4};
  width: 10%;
`;

const FifthContent = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 10%;
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.medium};
  color: ${({ theme }) => theme.colors.greyscale2};
  background-color: ${({ theme }) => theme.colors.primary1};
  border-radius: 20px;
`;

const FifthContent2 = styled.div`
  visibility: hidden;
  opacity: 0;
  height: 40px;
  width: 10%;
`;

const SixthContent = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.medium};
  color: ${({ theme }) => theme.colors.greyscale5};
  width: 10%;
`;

export default Invoices;
