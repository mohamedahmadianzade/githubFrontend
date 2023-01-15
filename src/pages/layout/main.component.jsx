import MenuBar from "../../components/MenuBar";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";
export default function MainLayout(params) {
  return (
    <>
      <MenuBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
