import { Route, Routes } from "react-router-dom";
import UserRoutes from "./Routes/UserRoutes";
import AdminRoutes from "./Routes/AdminRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";



function App() {
  let store = configureStore();
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/*" element={<UserRoutes />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/admin/*" element={<AdminRoutes />} />
          </Route>
        </Routes>
      </Provider>

    </>
  );
}

export default App;
