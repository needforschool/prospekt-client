import Button from "@components/Layout/Button";
import Image from "next/image";
import styled from "styled-components";
import Logo from "/public/static/images/logo/logo.png";

const SignIn: React.FC = () => {
  function setCustomer() {
    const d = new Date();
    d.setTime(d.getTime() + 3 * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = "role=Customer ;" + expires + ";path=/";
  }
  function setSales() {
    const d = new Date();
    d.setTime(d.getTime() + 3 * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = "role=Sales ;" + expires + ";path=/";
  }
  return (
    <Container>
      <FormColumn>
        <ImageContainer>
          <LogoImage src={Logo} alt="Logo" width={150} />
        </ImageContainer>
        <Form>
          <FormGroup>
            <Title>Email address</Title>
            <TextInput
              type="text"
              id="email"
              name="email"
              placeholder="johndoe@prospekt.com"
            ></TextInput>
          </FormGroup>
          <FormGroup>
            <Title>Password</Title>
            <TextInput
              type="password"
              id="password"
              name="password"
              placeholder="***********"
            ></TextInput>
          </FormGroup>
          <Submit>Login</Submit>
        </Form>
        <LogContainer>
          <CustomerLog onClick={setCustomer} href="/dashboard">
            Log as Customer
          </CustomerLog>
          <SalesLog onClick={setSales} href="/dashboard">
            Log as Sales
          </SalesLog>
        </LogContainer>
      </FormColumn>
      <ImageColumn></ImageColumn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100vh;
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.greyscale3};
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 32px;
  }
`;

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 48px);
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

const LogContainer = styled.div`
  padding-top: 48px;
  width: 100%;
  display: flex;
  gap: 16px;
`;

const CustomerLog = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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

const SalesLog = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const FormGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  :not(:first-child) {
    margin-top: 53px;
  }
  :after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 0px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.greyscale3};
  }
`;

const Title = styled.label``;

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
  height: calc(100vh - 48px);
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

export default SignIn;
