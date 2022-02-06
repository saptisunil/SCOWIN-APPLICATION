// Mock vaccinated students data
export const studentVaccineData = [
    {
        studentName:'Aiswarya P',
        id:'22134',
        aadharID:'8989 4000 1234',
        dob:'16/03/2014',
        gender:'Female',
        grade:'3',
        vaccinationStatus: 'Completed',
        vaccineName:'Covaxin',
        vaccinationDate: '21/01/2022',
        dosage:'1',
        comorbiditiesDetails:'Fever'
    },
    {
        studentName:'Akshai R',
        id:'22135',
        aadharID:'7609 0000 4564',
        dob:'02/03/2014',
        gender:'male',
        vaccinationStatus: 'Partially Completed',
        grade:'3',
        vaccineName:'Covaxin',
        vaccinationDate: '21/01/2022',
        dosage:'2',
        comorbiditiesDetails:'NA'
    },
    {
        studentName:'Anjana Ajith Kumar',
        id:'22136',
        aadharID:'5612 4321 7890',
        dob:'02/02/2014',
        gender:'Female',
        vaccinationStatus: 'Completed',
        grade:'3',
        vaccineName:'Covaxin',
        vaccinationDate: '21/01/2022',
        dosage:'1',
        comorbiditiesDetails:'bodypain'
    },
    {
        studentName:'John AH',
        id:'22137',
        aadharID:'4756 5758 9090',
        dob:'15/07/2015',
        vaccinationStatus: 'Completed',
        gender:'Male',
        grade:'4',
        vaccineName:'Covaxin',
        vaccinationDate: '21/01/2022',
        dosage:'2',
        comorbiditiesDetails:'NA'
    },
    {
        studentName:'Joy E',
        id:'22138',
        aadharID:'7585 5644 2124',
        dob:'31/01/2015',
        vaccinationStatus: 'Completed',
        gender:'Male',
        grade:'2',
        vaccineName:'Covaxin',
        vaccinationDate: '20/01/2022',
        dosage:'2',
        comorbiditiesDetails:'Headache'
    },
    {
        studentName:'Millie Babe',
        id:'22139',
        aadharID:'3445 6757 9000',
        dob:'20/11/2010',
        gender:'Female',
        vaccinationStatus: 'Completed',
        grade:'7',
        vaccineName:'Covisheild',
        vaccinationDate: '20/01/2022',
        dosage:'1',
        comorbiditiesDetails:'Sevre body pain'
    },
    {
        studentName:'Nikitha John',
        id:'22140',
        aadharID:'4590 7800 3214',
        dob:'24/01/2013',
        gender:'Female',
        vaccinationStatus: 'Partially Completed',
        grade:'4',
        vaccineName:'Covisheild',
        vaccinationDate: '20/01/2022',
        dosage:'1',
        comorbiditiesDetails:'NA'
    }
]

// Header data for vaccinated students table
export const studentVaccinationHeaders = [
    {
        title: 'Student Name',
        field: 'studentName'
    },
    {
        title: 'Student ID',
        field: 'id'
    },
    {
        title: 'Aadhar ID',
        field: 'aadharID'
    },
    {
        title: 'Date of Birth',
        field: 'dob'
    },
    {
        title: 'Gender',
        field: 'gender'
    },
    {
        title: 'Vaccination Name',
        field: 'vaccineName'
    },
    {
        title: 'Vaccination Status',
        field: 'vaccinationStatus'
    },
    {
        title: 'Vaccination Date',
        field: 'vaccinationDate'
    },
    {
        title: 'Vaccine dosage',
        field: 'dosage'
    },
    {
        title: 'Comorbidities Details',
        field: 'comorbiditiesDetails'
    }
]
