// react & dom init
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//components & pages
import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Supply from './components/Supply.jsx';
import AddSupply from "./components/AddSupply.jsx";

//styling
import "./index.css";

//actions
import { action as addSupplyAction } from "./functions/functions.js"


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Supply />
      },
      {
        path: 'add',
        element: <AddSupply />,
        action: addSupplyAction
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
