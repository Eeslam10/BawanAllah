<<<<<<< HEAD
import React from 'react'
import Footer from '/src/components/footer/Footer'
=======
import "./App.css";
// import Dashboard from './components/Dashboard/Dashboard'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Inventory from "./pages/Inventory/Inventory";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Inventory /> },
    // { path: "/sidebar", element: <Sidebar /> },
    // { path: "/questionnaire", element: <QuestionnairePage /> },
    // { path: "/signup", element: <Signup /> },
    // { path: "/login", element: <Login /> },
    // { path: "/forgot-password", element: <Forgotpassword /> },
    // { path: "/dashboard", element: <Dashboard /> },
    // { path: "/settings", element: <Settings />}
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