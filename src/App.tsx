import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Form from "./Form";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <div>
        <Form />
      </div>
    </MantineProvider>
  );
}
