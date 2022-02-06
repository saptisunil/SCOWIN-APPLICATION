// Mock vaccination drive data
export const vaccineData = [
    {
        vaccinationDate:'2022-02-27T12:19:47.000Z',
        vaccineName:'Covaxin',
        dosesAvailable:250,
        slots:5,
        driveApproval:'Approved',
        driveStatus:'Upcoming',
        id: 1
    },
    {
        vaccinationDate:'2022-01-19T12:19:47.000Z',
        vaccineName:'Covisheild',
        dosesAvailable:500,
        slots:3,
        driveApproval:'Not Approved',
        driveStatus:'Completed',
        id: 2
    },
    {
        vaccinationDate:'2022-02-14T12:19:47.000Z',
        vaccineName:'Sputnik V',
        dosesAvailable:100,
        slots:5,
        driveApproval:'Approved',
        driveStatus:'Upcoming',
        id: 3
    },
    {
        vaccinationDate:'2022-01-20T12:19:47.000Z',
        vaccineName:'Covisheild',
        dosesAvailable:450,
        slots:4,
        driveApproval:'Not Approved',
        driveStatus:'Completed',
        id: 4
    },
    {
        vaccinationDate:'2022-02-15T12:19:47.000Z',
        vaccineName:'Covaxin',
        dosesAvailable:450,
        slots:4,
        driveApproval:'Approved',
        driveStatus:'Upcoming',
        id: 5
    },
    {
        vaccinationDate:'2022-03-25T12:19:47.000Z',
        vaccineName:'Covisheild',
        dosesAvailable:500,
        slots:3,
        driveApproval:'Not Approved',
        driveStatus:'Upcoming',
        id: 6
    }
]

// Header data for vacination drive
export const vaccineHeaders = [
    
    {
        title: 'Vaccination Date',
        field: 'vaccinationDate',
        type: "date"
    },
    {
        title: 'Vaccine Name',
        field: 'vaccineName'
    },
    {
        title: 'Doses Available',
        field: 'dosesAvailable'
    },
    {
        title: 'Slots',
        field: 'slots'
    },
    {
        title: 'Drive Approval',
        field: 'driveApproval'
    },
    {
        title: 'Drive Status',
        field: 'driveStatus'
    }
]
