import { BrowserRouter } from "react-router-dom";
import RouterPage from "./components/RouterPage";
import Container from "@mui/material/Container";
function App() {
  return (
    <BrowserRouter>
      <Container>
        <RouterPage />
      </Container>
    </BrowserRouter>
  );
}

export default App;
