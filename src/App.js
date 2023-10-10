import { Route, Routes } from "react-router-dom";
import UserRoutes from "./Routes/UserRoutes";
import AdminRoutes from "./Routes/AdminRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";



function App() {
  return (
    <>
        <Routes>
          <Route path="/*" element={<UserRoutes />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/admin/*" element={<AdminRoutes />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
