import styled from "styled-components";
import Sidebar from "@components/Sidebar";
import React, { useEffect } from "react";
import ReactDOMServer from "react-dom/server";

const Quotes: React.FC = () => {
  const QuantityInput = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
    98, 99, 100,
  ];
  const mount = true;
  useEffect(() => {
    function addFormRow() {
      const addItem = document.querySelector(".addItem");
      const containerRow = document.querySelector(".containerRow");
      let i = 1;
      addItem?.addEventListener("click", () => {
        i++;
        if (containerRow !== null) {
          containerRow.innerHTML += ReactDOMServer.renderToString(
            <>
              <InputContainer2 className="inputRow">
                <InputText1
                  type="text"
                  placeholder="Website"
                  id={"name" + i}
                  name={"name" + i}
                ></InputText1>
                <InputSelect2 id={"quantity" + i} name={"quantity" + i}>
                  {QuantityInput.map((el, i) => {
                    return (
                      <option key={i} value={el}>
                        {el}
                      </option>
                    );
                  })}
                </InputSelect2>
                <InputText2
                  type="text"
                  placeholder="100"
                  id={"price" + i}
                  name={"price" + i}
                ></InputText2>
                <InputText3
                  type="text"
                  placeholder="20"
                  id={"vat" + i}
                  name={"vat" + i}
                ></InputText3>
                <RemoveRow>-</RemoveRow>
              </InputContainer2>
              <Sep></Sep>
            </>
          );
        }
      });
    }
    addFormRow();
  }, [mount]);
  return (
    <Main>
      <Sidebar></Sidebar>
      <Container>
        <Title>Quotes</Title>
        <CardsContainer>
          <QuotesContainer>
            <HeadContainer>
              <HeadTitle>Quotes</HeadTitle>
            </HeadContainer>
            <ArrayContainer>
              <HeadRow>
                <FirstTitle>#ID</FirstTitle>
                <SecondTitle>Customers</SecondTitle>
                <ThirdTitle>Amount</ThirdTitle>
                <FourthTitle>Date</FourthTitle>
              </HeadRow>
              <ContainerRow>
                <ContentRow>
                  <FirstContent>#4422</FirstContent>
                  <SecondContent>Botosh</SecondContent>
                  <ThirdContent>732.37$</ThirdContent>
                  <FourthContent>12/01/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>#2702</FirstContent>
                  <SecondContent>Press</SecondContent>
                  <ThirdContent>932.11$</ThirdContent>
                  <FourthContent>11/28/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>#8950</FirstContent>
                  <SecondContent>Korsgaard</SecondContent>
                  <ThirdContent>621.68$</ThirdContent>
                  <FourthContent>11/16/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>#9108</FirstContent>
                  <SecondContent>Calzoni</SecondContent>
                  <ThirdContent>518.46$</ThirdContent>
                  <FourthContent>11/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>#2770</FirstContent>
                  <SecondContent>Kock-Bouabid</SecondContent>
                  <ThirdContent>751$</ThirdContent>
                  <FourthContent>11/07/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>#4422</FirstContent>
                  <SecondContent>Botosh</SecondContent>
                  <ThirdContent>732.37$</ThirdContent>
                  <FourthContent>12/01/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>#2702</FirstContent>
                  <SecondContent>Press</SecondContent>
                  <ThirdContent>932.11$</ThirdContent>
                  <FourthContent>11/28/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>#8950</FirstContent>
                  <SecondContent>Korsgaard</SecondContent>
                  <ThirdContent>621.68$</ThirdContent>
                  <FourthContent>11/16/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>#9108</FirstContent>
                  <SecondContent>Calzoni</SecondContent>
                  <ThirdContent>518.46$</ThirdContent>
                  <FourthContent>11/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>#2770</FirstContent>
                  <SecondContent>Kock-Bouabid</SecondContent>
                  <ThirdContent>751$</ThirdContent>
                  <FourthContent>11/07/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>#4422</FirstContent>
                  <SecondContent>Botosh</SecondContent>
                  <ThirdContent>732.37$</ThirdContent>
                  <FourthContent>12/01/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>#2702</FirstContent>
                  <SecondContent>Press</SecondContent>
                  <ThirdContent>932.11$</ThirdContent>
                  <FourthContent>11/28/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>#8950</FirstContent>
                  <SecondContent>Korsgaard</SecondContent>
                  <ThirdContent>621.68$</ThirdContent>
                  <FourthContent>11/16/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>#9108</FirstContent>
                  <SecondContent>Calzoni</SecondContent>
                  <ThirdContent>518.46$</ThirdContent>
                  <FourthContent>11/12/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>#2770</FirstContent>
                  <SecondContent>Kock-Bouabid</SecondContent>
                  <ThirdContent>751$</ThirdContent>
                  <FourthContent>11/07/2022</FourthContent>
                </ContentRow>
                <Sep></Sep>
              </ContainerRow>
            </ArrayContainer>
          </QuotesContainer>
          <NewQuoteContainer>
            <HeadContainer>
              <HeadTitle>New Quote</HeadTitle>
            </HeadContainer>
            <FormContainer>
              <InputContainer1>
                <InputName>User</InputName>
                <InputSelect1>
                  <option value="" disabled selected>
                    Select your customer
                  </option>
                </InputSelect1>
              </InputContainer1>
              <Sep2></Sep2>
              <InputNameContainer>
                <InputName>Product(s) name</InputName>
                <InputName>Quantity</InputName>
                <InputName>Unit price ($)</InputName>
                <InputName>VAT</InputName>
              </InputNameContainer>
              <ContainerRow2 className="containerRow">
                <InputContainer2 className="inputRow">
                  <InputText1
                    type="text"
                    placeholder="Website"
                    id="name1"
                    name="name1"
                  ></InputText1>
                  <InputSelect2 id="quantity1" name="quantity1">
                    {QuantityInput.map((el, i) => {
                      return (
                        <option key={i} value={el}>
                          {el}
                        </option>
                      );
                    })}
                  </InputSelect2>
                  <InputText2
                    type="text"
                    placeholder="100"
                    id="price1"
                    name="price1"
                  ></InputText2>
                  <InputText3
                    type="text"
                    placeholder="20"
                    id="vat1"
                    name="vat1"
                  ></InputText3>
                </InputContainer2>
                <Sep className="sep"></Sep>
              </ContainerRow2>
              <AddRowContainer className="addItem">Add item</AddRowContainer>
              <Sep2></Sep2>
              <SubmitContainer
                type="submit"
                value="Send by mail"
              ></SubmitContainer>
            </FormContainer>
          </NewQuoteContainer>
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

const Sep = styled.div`
  flex-shrink: 0;
  width: calc(100% - 8px);
  height: 1px;
  background-color: #fafafa;
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

const ContainerRow2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 180px;
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

const QuotesContainer = styled.div`
  width: 45%;
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
  width: 30%;
`;

const ThirdTitle = styled.h3`
  font-family: ${({ theme }) => theme.family.primary};
  font-size: ${({ theme }) => theme.size.big};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.greyscale1};
  width: 20%;
`;

const FourthTitle = styled.h3`
  font-family: ${({ theme }) => theme.family.primary};
  font-size: ${({ theme }) => theme.size.big};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.greyscale1};
  width: 20%;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FirstContent = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.medium};
  color: ${({ theme }) => theme.colors.greyscale5};
  width: 10%;
`;

const SecondContent = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.medium};
  color: ${({ theme }) => theme.colors.greyscale2};
  width: 30%;
`;

const ThirdContent = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.medium};
  color: ${({ theme }) => theme.colors.greyscale4};
  width: 20%;
`;

const FourthContent = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.medium};
  color: ${({ theme }) => theme.colors.greyscale4};
  width: 20%;
`;

const NewQuoteContainer = styled.div`
  width: 55%;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.bg2};
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.form`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

const InputContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 40%;
`;

const InputContainer2 = styled.div`
  display: flex;
  gap: 2vw;
  align-items: center;
`;

const InputNameContainer = styled.div`
  display: flex;
  gap: 2vw;
  align-items: center;
  padding-bottom: 16px;
`;

const InputName = styled.span`
  font-family: ${({ theme }) => theme.family.primary};
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.greyscale1};
`;

const InputText1 = styled.input`
  width: 115px;
  height: 32px;
  border: none;
  outline: none;
  background: transparent;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
`;

const InputText2 = styled.input`
  width: 90px;
  height: 32px;
  border: none;
  outline: none;
  background: transparent;
  text-align: right;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
`;

const InputText3 = styled.input`
  width: 25px;
  height: 32px;
  border: none;
  outline: none;
  background: transparent;
  text-align: right;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
`;

const InputSelect1 = styled.select`
  height: 32px;
  padding: 4px;
  background-color: #202132;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.greyscale1};
  border: none;
  outline: none;
`;

const InputSelect2 = styled.select`
  width: 60px;
  height: 32px;
  padding: 4px;
  background-color: #202132;
  border-radius: 8px;
  color: #ffffff;
  border: none;
  outline: none;
`;

const SubmitContainer = styled.input`
  margin: 0 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 30%;
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.greyscale1};
  background-color: ${({ theme }) => theme.colors.primary1};
  border: none;
  outline: none;
`;

const AddRowContainer = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  margin-top: 16px;
  font-family: ${({ theme }) => theme.family.primary};
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.medium};
  color: ${({ theme }) => theme.colors.greyscale1};
  ::before {
    content: "+";
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #202132;
    border-radius: 50%;
  }
`;

const RemoveRow = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  background-color: #202132;
  border-radius: 50%;
`;

const Sep2 = styled.div`
  width: 100%;
  height: 1px;
  margin: 24px 0;
  background-color: ${({ theme }) => theme.colors.greyscale1};
`;

export default Quotes;
