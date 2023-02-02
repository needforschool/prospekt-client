import styled from "styled-components";
import Sidebar from "@components/Sidebar";

const Notes: React.FC = () => {
  return (
    <Main>
      <Sidebar />
      <Container>
        <Title>Notes</Title>
        <CardsContainer>
          <HistoryContainer>
            <HeadContainer>
              <HeadTitle>History</HeadTitle>
              <HeadButton href="/history">See all</HeadButton>
            </HeadContainer>
            <ArrayContainer>
              <HeadRow>
                <FirstTitle>Actions</FirstTitle>
                <SecondTitle>Date</SecondTitle>
              </HeadRow>
              <ContainerRow>
                <ContentRow>
                  <FirstContent>Outgoing call</FirstContent>
                  <SecondContent>17sec ago</SecondContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Payment received</FirstContent>
                  <SecondContent>1h07 ago</SecondContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>New customer registered</FirstContent>
                  <SecondContent>5h47 ago</SecondContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>New prospect added</FirstContent>
                  <SecondContent>11h47 ago</SecondContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Email sent</FirstContent>
                  <SecondContent>1day ago</SecondContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Quote created</FirstContent>
                  <SecondContent>3days ago</SecondContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Payment received</FirstContent>
                  <SecondContent>1month ago</SecondContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Invoice sent</FirstContent>
                  <SecondContent>4month ago</SecondContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Email sent</FirstContent>
                  <SecondContent>11months ago</SecondContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Quote created</FirstContent>
                  <SecondContent>1year ago</SecondContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Outgoing call</FirstContent>
                  <SecondContent>1year ago</SecondContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Email sent</FirstContent>
                  <SecondContent>1year ago</SecondContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Payment received</FirstContent>
                  <SecondContent>3year ago</SecondContent>
                </ContentRow>
                <Sep></Sep>
                <ContentRow>
                  <FirstContent>Invoice sent</FirstContent>
                  <SecondContent>3year ago</SecondContent>
                </ContentRow>
              </ContainerRow>
            </ArrayContainer>
          </HistoryContainer>
          <NotesContainer>
            <HeadContainer>
              <HeadTitle>Add notes</HeadTitle>
            </HeadContainer>
            <Form>
              <InputContainer>
                <InputLabel htmlFor="customer-select">User</InputLabel>
                <Select name="user" id="customer-select">
                  <Option value="">Select customer</Option>
                  <Option value="dog">Dog</Option>
                  <Option value="cat">Cat</Option>
                  <Option value="hamster">Hamster</Option>
                  <Option value="parrot">Parrot</Option>
                  <Option value="spider">Spider</Option>
                  <Option value="goldfish">Goldfish</Option>
                </Select>
              </InputContainer>
              <NoteSep></NoteSep>
              <InputContainer>
                <InputLabel htmlFor="category-select">Category</InputLabel>
                <Select name="category" id="category-select">
                  <Option value="">Select actions</Option>
                  <Option value="dog">Dog</Option>
                  <Option value="cat">Cat</Option>
                  <Option value="hamster">Hamster</Option>
                  <Option value="parrot">Parrot</Option>
                  <Option value="spider">Spider</Option>
                  <Option value="goldfish">Goldfish</Option>
                </Select>
              </InputContainer>
              <NoteSep></NoteSep>
              <InputContainer>
                <InputLabel htmlFor="description">Add description</InputLabel>
                <Textarea
                  id="description"
                  name="description"
                  rows={5}
                  cols={33}
                  placeholder="Description..."
                ></Textarea>
              </InputContainer>
              <SaveButton>Save</SaveButton>
            </Form>
          </NotesContainer>
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

const HistoryContainer = styled.div`
  width: 45%;
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
  width: 65%;
`;

const SecondTitle = styled.h3`
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
  color: ${({ theme }) => theme.colors.greyscale4};
  width: 65%;
`;

const SecondContent = styled.span`
  font-family: ${({ theme }) => theme.family.secondary};
  font-size: ${({ theme }) => theme.size.small};
  color: ${({ theme }) => theme.colors.greyscale5};
  width: 25%;
`;

const Sep = styled.div`
  flex-shrink: 0;
  width: calc(100% - 8px);
  height: 1px;
  background-color: ${({ theme }) => theme.colors.greyscale2};
  opacity: 0.1;
`;

const NotesContainer = styled.div`
  width: 55%;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.bg2};
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
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

const NoteSep = styled.div`
  flex-shrink: 0;
  width: calc(100% - 8px);
  height: 1px;
  background-color: ${({ theme }) => theme.colors.greyscale3};
  margin-top: 32px;
`;

const InputContainer = styled.div`
  color: ${({ theme }) => theme.colors.greyscale3};
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;
const InputLabel = styled.label`
  font-size: 16px;
`;
const Select = styled.select`
  height: 32px;
  padding: 4px;
  background-color: #202132;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.greyscale1};
  border: none;
  outline: none;
  margin-top: 8px;
  width: 40%;
`;
const Option = styled.option``;

const Textarea = styled.textarea`
  margin-top: 26px;
  color: ${({ theme }) => theme.colors.greyscale3};
  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.bg2};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyscale3};
  resize: none;
  outline: none;
`;

const SaveButton = styled.button`
  margin: 0 0 0 auto;
  margin-top: 32px;
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
  cursor: pointer;
`;

export default Notes;
