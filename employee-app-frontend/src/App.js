import React from "react";
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import EmployeeList from "./components/EmployeeList";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import PageNotFound from "./components/PageNotFound";
import CreateOrFindAndUpdateEmployee from "./components/CreateOrFindAndUpdateEmployee";
import DeleteEmployeeComponent from "./components/DeleteEmployeeComponent";
import ViewEmployee from "./components/ViewEmployee";

function App() {
  return (
    <div>
      <BrowserRouter>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/" element={<EmployeeList />} />
              <Route path="/employees" element={<EmployeeList />} />
              <Route path="/employees/:id" element={<CreateOrFindAndUpdateEmployee />} />
              <Route path="/delete-employee/:id" element={<DeleteEmployeeComponent />} />
              <Route path="/employee/:id" element={<ViewEmployee />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
