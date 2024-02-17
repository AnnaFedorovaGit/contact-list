import ReactDOM from 'react-dom/client';
import { Slide, ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import App from 'App';
import { persistor, store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';


const root = document.getElementById("root")
ReactDOM.createRoot(root).render(
    <BrowserRouter basename='/goit-react-hw-08-phonebook'>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    limit={4}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                    theme="dark"
                    transition={Slide}
                />
            </PersistGate>
        </Provider >
    </BrowserRouter>
);
