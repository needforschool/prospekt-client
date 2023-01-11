import Button from "@components/Layout/Button";
import Image from "next/image";
import styled from "styled-components";
import Logo from "/public/static/images/logo/logo.png";

const SignUp: React.FC = () => {
  return (
    <Container>
      <FormColumn>
        <ImageContainer>
          <LogoImage src={Logo} alt="Logo" width={200} height={200} />
        </ImageContainer>
        <Form>
          <CompanyInfo>
            <FormGroup>
              <Title>SIRET</Title>
              <TextInput
                type="text"
                id="siret"
                name="siret"
                placeholder="123 568 941 00056"
              ></TextInput>
            </FormGroup>
            <FormGroup>
              <Title>VAT</Title>
              <TextInput
                type="text"
                id="vat"
                name="vat"
                placeholder="FR 32 123568941"
              ></TextInput>
            </FormGroup>
          </CompanyInfo>

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
                />
                <Label htmlFor="company">Company</Label>
              </Radio>
            </RadioContainer>
          </FormGroup>
          <FormGroup>
            <Title>Full Name</Title>
            <TextInput
              type="text"
              id="fullname"
              name="fullname"
              placeholder="John Doe"
            ></TextInput>
          </FormGroup>
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
            <Title>Phone number</Title>
            <TextInput
              type="text"
              id="phone"
              name="phone"
              placeholder="+33 06 01 02 03 04"
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
  background: #141522;
  height: 100vh;
  padding: 0 15px;
  color: #f5f5f5;
`;

const FormColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  // background-color: blue;
  padding-left: 5px;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  height: unset;
  padding-left: 120px;
`;

const LogoImage = styled(Image)`
  object-fit: contain;
  height: unset;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-left: 120px;
  margin-top: 80px;
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  // text-align: center;
`;

const Title = styled.label`
  padding-left: 20px;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RadioInput = styled.input``;

const Radio = styled.div`
  padding: 23px 20px;
`;

const Label = styled.label`
  margin-left: 22px;
`;

const TextInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #f5f5f5;
  margin-left: 22px;
  margin-top: 20px;
  color: #d2d2d2;
  outline: none;
`;

const Submit = styled(Button)`
  width: 386px;
  height: 40px;
  background-color: #1a72f8;
  border-radius: 30px;
  color: #f5f5f5;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  line-height: 30px;
  margin-top: 50px;
  border: none;
  cursor: pointer;
  margin-left: 20px;
`;

const ImageColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  background-color: pink;
  position: relative;
`;

export default SignUp;
