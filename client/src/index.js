import React, { createContext } from "react"
// import ReactDOM from "react-dom"
import * as ReactDOMClient from "react-dom/client"
import App from "./App"
import "./index.css"
import UserStore from "./store/UserStore"
import PhotoStore from "./store/PhotoStore"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"

export const Context = createContext()
const root = ReactDOMClient.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Context.Provider
                value={{
                    user: new UserStore(),
                    photo: new PhotoStore(),
                }}
            >
                <App />
            </Context.Provider>
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
