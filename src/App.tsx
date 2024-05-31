import "@mantine/core/styles.css";
import { Container, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Form from "./Form";
import Foo from "./Components";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Container size="xs" mt="10%">
        <Form />
      </Container>
    </MantineProvider>
  );
}
