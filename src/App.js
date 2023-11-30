import { Route, Routes } from "react-router-dom";
import UserRoutes from "./Routes/UserRoutes";
import AdminRoutes from "./Routes/AdminRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import { SnackbarProvider } from 'notistack';
import Alert from "./components/Alert/Alert";



function App() {
  return (
    <>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Alert />
            <Routes>
              <Route path="/*" element={<UserRoutes />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/admin/*" element={<AdminRoutes />} />
              </Route>
            </Routes>
          </PersistGate>
        </Provider>
      </SnackbarProvider>
    </>
  );
}

export default App;
