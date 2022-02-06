// Mock students data
export const studentData = [
    {
        studentName: 'Aiswarya P',
        id: '22134',
        aadharID: '898940001234',
        dob: '2014-03-16T18:30:00.000Z',
        gender: 'Female',
        grade: '3',
        section: 'A',
        existingComorbidites: 'NA',
        bloodGroup: 'A+'
    },
    {
        studentName: 'Akshai R',
        id: '22135',
        aadharID: '760900004564',
        dob: '2013-02-24T18:30:00.000Z',
        gender: 'Male',
        grade: '3',
        section: 'A',
        existingComorbidites: 'NA',
        bloodGroup: 'AB+'
    },
    {
        studentName: 'Anjana Ajith Kumar',
        id: '22136',
        aadharID: '561243217890',
        dob: '2014-02-01T18:30:00.000Z',
        gender: 'Female',
        grade: '3',
        section: 'B',
        existingComorbidites: 'Slightly feverish',
        bloodGroup: 'B+ve'
    },
    {
        studentName: 'Yashly Yesudas',
        id: '22146',
        aadharID: '243556579843',
        dob: '2011-06-17T18:30:00.000Z',
        gender: 'Female',
        grade: '8',
        section: 'B',
        existingComorbidites: 'High fever and cough',
        bloodGroup: 'B+'

    },
    {
        id: "22147",
        studentName: "Y Diyva",
        dob: "2009-01-17T18:30:00.000Z",
        gender: "Female",
        grade: "8",
        section: "A",
        aadharID: "984668219700",
        existingComorbidites: 'Had Jauntice 1 month back',
        bloodGroup: 'AB+'
    },
    {
        id: "22148",
        studentName: "Suman Seetha",
        dob: "2009-12-25T18:30:00.000Z",
        gender: "Female",
        grade: "8",
        section: "A",
        aadharID: "894303392478",
        existingComorbidites: 'NA',
        bloodGroup: 'A+'
    },
    {
        id: "22149",
        studentName: "Eliza Mathew",
        dob: "2005-07-08T18:30:00.000Z",
        gender: "Female",
        grade: "8",
        section: "B",
        aadharID: "994672153129",
        existingComorbidites: 'NA',
        bloodGroup: 'A+'
    },
    {
        id: "22150",
        studentName: "Anita George",
        dob: "2007-09-11T18:30:00.000Z",
        gender: "Female",
        grade: "8",
        section: "B",
        aadharID: "999578471322",
        existingComorbidites: 'NA',
        bloodGroup: 'B+'
    },
    {
        id: "22151",
        studentName: "Ratna Kumar",
        dob: "2003-04-13T18:30:00.000Z",
        gender: "Female",
        grade: "9",
        section: "B",
        aadharID: "456547480560",
        existingComorbidites: 'NA',
        bloodGroup: 'A+'
    }
]

// Header data for student table
export const columnStudents = [
    { title: 'Id', field: 'id' },
    { title: 'Name', field: 'studentName' },
    { title: 'DOB', field: 'dob', type: 'date' },
    { title: 'Gender', field: 'gender' },
    { title: 'Blood Group', field: 'bloodGroup' },
    { title: 'Grade', field: 'grade' },
    { title: 'Section', field: 'section' },
    { title: 'Adhar', field: 'aadharID' },
    { title: 'Existing Comorbidities', field: 'existingComorbidites' }
]