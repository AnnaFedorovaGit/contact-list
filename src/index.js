import ReactDOM from 'react-dom/client'
import App from 'App'
import { Provider } from "react-redux"
import { store } from "./redux/store"

import './index.css'


const root = document.getElementById("root")
ReactDOM.createRoot(root).render(
    <Provider store={store}>
        <App />
    </Provider >
);
