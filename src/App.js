import Form from "./Form";
import Timer from "./Timer";
import Container from "./Container";
import { ThemeProvider } from "styled-components";
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Form>
          <Timer />
        </Form>
      </Container>
    </ThemeProvider>
  );
}

export default App;
