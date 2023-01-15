import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./pages/layout/main.component";
import UserDetails from "./pages/users/details/userDetails.component";
import Users from "./pages/users/users.component";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Users />} />
          <Route path="/users/:username" element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
