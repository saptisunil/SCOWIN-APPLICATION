import React from 'react';
import { studentVaccinationHeaders, studentVaccineData } from '../../data/studentVaccination'; 
import Table from '../common/table/table';

const GenerateReports = () => (
  <div>
    <Table columns={studentVaccinationHeaders} rows={studentVaccineData} header="Student Vaccination Information" />
  </div>
);

GenerateReports.propTypes = {};

GenerateReports.defaultProps = {};

export default GenerateReports;
