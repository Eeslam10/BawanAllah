import React from 'react'
// import Footer from '/src/components/Footer/Footer'
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory";
import Suppliers from './pages/Suppliers/Suppliers'
import SalesOrder from './pages/SalesOrder/SalesOrder';
import Reports from './pages/Reports/Reports';

function App() {  
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "/inventory", element: <Inventory /> },
    { path: "/suppliers", element: <Suppliers /> },
    { path: "/sales-order", element: <SalesOrder /> },
    { path: "/reports", element: <Reports /> }
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App