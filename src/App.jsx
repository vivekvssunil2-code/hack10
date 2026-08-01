import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Report from "./pages/Report";
import Dashboard from "./pages/Dashboard";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Home Page */}
        <Route 
          path="/" 
          element={<Home />} 
        />


        {/* Complaint Report Page */}
        <Route 
          path="/report" 
          element={<Report />} 
        />


        {/* Admin Dashboard */}
        <Route 
          path="/dashboard" 
          element={<Dashboard />} 
        />


      </Routes>

    </BrowserRouter>

  );

}


export default App;