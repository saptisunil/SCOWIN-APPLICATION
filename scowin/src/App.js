import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import VaccinationDrive from './components/VaccinationDrive/VaccinationDrive';
import Vaccine from './components/Vaccination/Vaccination';
import Managestud from './components/ManageStudent/ManageStudent';
import GenerateReports from './components/GenerateReports/GenerateReports';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <div className='container mt-5'>
          {/* To display different components based on routes */}
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/vaccination' element={<Vaccine />} />
            <Route path='/vaccinationDrive' element={<VaccinationDrive />} />
            <Route path='/manageStudent' exact element={<Managestud />} />
            <Route path='/generateReport' exact element={<GenerateReports />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;