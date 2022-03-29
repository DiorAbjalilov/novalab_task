import { BrowserRouter } from "react-router-dom";
import RouterPage from "./components/RouterPage";
import Container from "@mui/material/Container";
import LoadingComponent from "./components/loader/LoadingComponent";
import { useSelector } from "react-redux";
function App() {
  const loading = useSelector((state) => state.users_Reducer.loader);
  console.log("loading..", loading);
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <BrowserRouter>
      <Container>
        <RouterPage />
      </Container>
    </BrowserRouter>
  );
}

export default App;
