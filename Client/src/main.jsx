// react & dom init
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//components & pages
import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { Supply, loader as getSupplies } from "./components/Supply.jsx";
import AddSupply from "./components/AddSupply.jsx";
import EditSupply from "./components/EditSupply.jsx";
import  {loader as getOneSupply}  from "./components/EditSupply.jsx"
import { OrderList } from "./components/OrderList.jsx"
import { loader as getOrderData } from "./components/OrderList.jsx"

//styling
import "./index.css";

//actions
import { action as addSupply } from "./functions/addSupplyAction.js";
import { action as editSupply } from "./functions/editSupplyAction.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: getSupplies,
        element: <Supply />,
      },
      {
        path: "add",
        element: <AddSupply />,
        action: addSupply,
      },
      {
        path: "edit/:id",
        loader: getOneSupply,
        element: <EditSupply />,
        action: editSupply,
      },
      {
        path: "order",
        loader: getOrderData,
        element: <OrderList />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
