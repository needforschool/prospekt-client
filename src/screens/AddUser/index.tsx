import styled from "styled-components";
import Sidebar from "@components/Sidebar";
import Button from "@components/Layout/Button";

const AddUser: React.FC = () => {
  return (
    <Main>
      <Sidebar></Sidebar>
      <Container>
        <Title>Add user</Title>
        <CardsContainer>
          <AddUserContainer>
            <FormWrapper>
              <FormTitle>Users</FormTitle>
              <Form>
                <FormGroup>
                  <RadioContainer>
                    <Radio>
                      <RadioInput
                        type="radio"
                        id="individual"
                        name="identity"
                        value="individual"
                      />
                      <Label htmlFor="individual">Individual</Label>
                    </Radio>
                    <Radio>
                      <RadioInput
                        type="radio"
                        id="company"
                        name="identity"
                        value="company"
                        defaultChecked
                      />
                      <Label htmlFor="company">Company</Label>
                    </Radio>
                  </RadioContainer>
                </FormGroup>
                <CompanyInfo>
                  <FormGroupVariant>
                    <FieldTitle>SIRET</FieldTitle>
                    <TextInput
                      type="text"
                      id="siret"
                      name="siret"
                      placeholder="123 568 941 00056"
                    ></TextInput>
                  </FormGroupVariant>
                  <FormGroupVariant>
                    <FieldTitle>VAT</FieldTitle>
                    <TextInput
                      type="text"
                      id="vat"
                      name="vat"
                      placeholder="FR 32 123568941"
                    ></TextInput>
                  </FormGroupVariant>
                </CompanyInfo>
                <FormGroup>
                  <FieldTitle>Full Name</FieldTitle>
                  <TextInput
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="John Doe"
                  ></TextInput>
                </FormGroup>
                <FormGroup>
                  <FieldTitle>Email address</FieldTitle>
                  <TextInput
                    type="text"
                    id="email"
                    name="email"
                    placeholder="johndoe@prospekt.com"
                  ></TextInput>
                </FormGroup>
                <FormGroup>
                  <FieldTitle>Phone number</FieldTitle>
                  <TextInput
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="+33 06 01 02 03 04"
                  ></TextInput>
                </FormGroup>
                <FormGroup>
                  <FieldTitle>Password</FieldTitle>
                  <TextInput
                    type="password"
                    id="password"
                    name="password"
                    placeholder="***********"
                  ></TextInput>
                </FormGroup>
                <Submit>Send email</Submit>
              </Form>
            </FormWrapper>
          </AddUserContainer>
          <HistoryContainer>
            <HeadContainer>
              <HeadTitle>History</HeadTitle>
            </HeadContainer>
            <ArrayContainer>
              <HeadRow>
                <FirstTitle>Actions</FirstTitle>
                <SecondTitle>Users</SecondTitle>
                <ThirdTitle>Date</ThirdTitle>
              </HeadRow>
              <ContainerRow>
                <ContentRow>
                  <FirstContent>New customer registered</FirstContent>
                  <SecondContent>Shari Prosacco IV</SecondContent>
                  <ThirdContent>17sec ago</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>New customer registered</FirstContent>
                  <SecondContent>Joe Wisozk</SecondContent>
                  <ThirdContent>1h07 ago</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>New customer registered</FirstContent>
                  <SecondContent>Virgil Douglas</SecondContent>
                  <ThirdContent>5h47 ago</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>New prospect added</FirstContent>
                  <SecondContent>Julian Runolfsdottir</SecondContent>
                  <ThirdContent>11h47 ago</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>New customer registered</FirstContent>
                  <SecondContent>Peggy Walsh</SecondContent>
                  <ThirdContent>1 day ago</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>New customer registered</FirstContent>
                  <SecondContent>Darnell Heidenreich</SecondContent>
                  <ThirdContent>3 days ago</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>New prospect added</FirstContent>
                  <SecondContent>Marian Kub</SecondContent>
                  <ThirdContent>2 weeks ago</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>New prospect added</FirstContent>
                  <SecondContent>Forrest Cassin</SecondContent>
                  <ThirdContent>2 weeks ago</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>New prospect added</FirstContent>
                  <SecondContent>Andrea Pollich</SecondContent>
                  <ThirdContent>2 weeks ago</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>New prospect added</FirstContent>
                  <SecondContent>Darrell Feil</SecondContent>
                  <ThirdContent>2 weeks ago</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>New prospect added</FirstContent>
                  <SecondContent>Megan Kreiger</SecondContent>
                  <ThirdContent>2 weeks ago</ThirdContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>New prospect added</FirstContent>
                  <SecondContent>Shannon Wisoky</SecondContent>
                  <ThirdContent>2 weeks ago</ThirdContent>
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
  flex-direction: row;
  gap: 24px;
`;

const AddUserContainer = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.bg2};
  animation: appear1 2s cubic-bezier(0.355, 0, 0.325, 1);
  @keyframes appear1 {
    0% {
      transform: translateY(-15px);
      opacity: 0;
    }
    20% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

const FormWrapper = styled.div`
  padding: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: fit-content;
  width: 90%;
  margin-top: 24px;
  width: 100%;
`;

const FormTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary1};
  font-size: ${({ theme }) => theme.size.h2};
  font-weight: ${({ theme }) => theme.weight.bold};
  font-family: ${({ theme }) => theme.family.primary};
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 32px;
  margin-top: 40px;
  :not(:nth-of-type(2)) {
    margin-top: 53px;
  }
`;

const FormGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  :not(:first-child) {
    margin-top: 53px;
    :after {
      content: "";
      position: absolute;
      bottom: -12px;
      left: 0px;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.greyscale3};
    }
  }
`;

const FormGroupVariant = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 183px;
  :after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 0px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.greyscale3};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: calc(50% - 20px);
  }
`;

const FieldTitle = styled.label`
  color: ${({ theme }) => theme.colors.greyscale1};
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding-top: 12px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    justify-content: unset;
    column-gap: 40px;
  }
`;

const RadioInput = styled.input``;

const Radio = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 183px;
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid transparent;
  :has(${RadioInput}:checked) {
    border-color: ${({ theme }) => theme.colors.primary1};
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.greyscale1};
`;

const TextInput = styled.input`
  background-color: transparent;
  border: none;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.greyscale4};
  outline: none;
`;

const Submit = styled(Button)`
  width: 20%;
  display: flex;
  align-self: flex-end;
  height: 40px;
  margin-top: 50px;
  border-radius: 20px;
`;

const HistoryContainer = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.bg2};
  padding: 24px;
  animation: appear2 2s cubic-bezier(0.355, 0, 0.325, 1);
  @keyframes appear2 {
    0% {
      transform: translateY(-15px);
      opacity: 0;
    }
    15% {
      transform: translateY(-15px);
      opacity: 0;
    }
    40% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
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

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FirstContent = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.small};
  color: ${({ theme }) => theme.colors.greyscale2};
  width: 25%;
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
  color: ${({ theme }) => theme.colors.greyscale5};
  width: 20%;
`;

const Sep = styled.div`
  flex-shrink: 0;
  width: calc(100% - 8px);
  height: 1px;
  background-color: #fafafa;
  opacity: 0.1;
`;

export default AddUser;
