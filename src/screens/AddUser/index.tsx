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
          </AddUserContainer>
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
  height: calc(100vh - 144px);
  width: 100%;
  max-width: 1376px;
  margin: auto;
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const AddUserContainer = styled.div`
  width: 60%;
  height: 100%;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.bg2};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: fit-content;
  width: 90%;
  margin-left: 24px;
  margin-top: 20px;
`;

const FormTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary1};
  margin-left: 24px;
  margin-top: 28px;
  font-size: ${({ theme }) => theme.size.h2};
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
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
  justify-content: space-between;
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
  width: 40%;
  height: 100%;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.bg2};
`;

export default AddUser;
