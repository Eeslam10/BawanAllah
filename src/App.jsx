<<<<<<< HEAD
import React from 'react'
import Footer from '/src/components/footer/Footer'
=======
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "/inventory", element: <Inventory /> },
  ]);
>>>>>>> d8cb1e9 (feat: added navbar)

  return (
<<<<<<< HEAD
    <div>
      <Footer />
    </div>
  )
=======
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
>>>>>>> d8cb1e9 (feat: added navbar)
}

export default App