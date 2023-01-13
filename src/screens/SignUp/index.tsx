import Button from "@components/Layout/Button";
import Image from "next/image";
import styled from "styled-components";
import Logo from "/public/static/images/logo/logo.png";

const SignUp: React.FC = () => {
  return (
    <Container>
      <FormColumn>
        <ImageContainer>
          <LogoImage src={Logo} alt="Logo" width={150} />
        </ImageContainer>
        <Form>
          <FormGroup>
            <Title>Who are you?</Title>
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
              <Title>SIRET</Title>
              <TextInput
                type="text"
                id="siret"
                name="siret"
                placeholder="123 568 941 00056"
              ></TextInput>
            </FormGroupVariant>
            <FormGroupVariant>
              <Title>VAT</Title>
              <TextInput
                type="text"
                id="vat"
                name="vat"
                placeholder="FR 32 123568941"
              ></TextInput>
            </FormGroupVariant>
          </CompanyInfo>
          <FormGroup>
            <Title>Full Name</Title>
            <TextInput
              type="text"
              id="fullname"
              name="fullname"
              placeholder="John Doe"
            ></TextInput>
          </FormGroup>
          <CompanyInfo>
            <FormGroupVariant>
              <Title>Email address</Title>
              <TextInput
                type="text"
                id="email"
                name="email"
                placeholder="johndoe@prospekt.com"
              ></TextInput>
            </FormGroupVariant>
            <FormGroupVariant>
              <Title>Phone number</Title>
              <TextInput
                type="text"
                id="phone"
                name="phone"
                placeholder="+33 06 01 02 03 04"
              ></TextInput>
            </FormGroupVariant>
          </CompanyInfo>
          <FormGroup>
            <Title>Password</Title>
            <TextInput
              type="password"
              id="password"
              name="password"
              placeholder="***********"
            ></TextInput>
          </FormGroup>
          <Submit>Register</Submit>
        </Form>
      </FormColumn>
      <ImageColumn></ImageColumn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1200px;
  min-height: 100vh;
  margin-right: auto;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.greyscale3};
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: unset;
    padding: 0 32px;
  }
`;

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 386px;
  padding: 24px 0;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  height: unset;
`;

const LogoImage = styled(Image)`
  object-fit: contain;
  height: unset;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: fit-content;
  width: 100%;
  margin-top: 80px;
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

const Title = styled.label``;

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
  width: 183px;
  padding: 23px 20px;
  border-radius: 4px;
  border: 1px solid transparent;
  :has(${RadioInput}:checked) {
    border-color: ${({ theme }) => theme.colors.primary1};
  }
`;

const Label = styled.label``;

const TextInput = styled.input`
  background-color: transparent;
  border: none;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.greyscale4};
  outline: none;
`;

const Submit = styled(Button)`
  width: 100%;
  height: 40px;
  margin-top: 50px;
  border-radius: 20px;
`;

const ImageColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 692px;
  margin: 24px 0;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.greyscale4};
  object-fit: cover;
  object-position: 50% 50%;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 100%;
    height: 50vh;
  }
`;

export default SignUp;
