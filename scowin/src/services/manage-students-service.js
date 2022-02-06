// To get all the student details
export function getStudentsDetails() {
    return fetch("http://localhost:3000/studentData").then(res => res.json()).then(result => {
        return result;
    }).catch(console.log);
}

// To add new students
export function addStudent(requestBody) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    return fetch('http://localhost:3000/studentData', requestOptions)
        .then(response => response.json())
        .then(data => data).catch(console.log);
}

// To edit details of existing students
export function editStudentDetails(requestBody) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    return fetch(`http://localhost:3000/studentData/${requestBody.id}`, requestOptions)
        .then(response => response.json())
        .then(data => data).catch(console.log);
}
