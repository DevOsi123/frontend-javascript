// 1. Define the Student interface
interface Student {
    firstName:string,
    lastName:string,
    age:number,
    location:string
};

// 2. Create two students
const student1:Student = {
    firstName : "Alexander",
    lastName : "Gate",
    age : 20,
    location : "Accra"
};

const student2:Student = {
    firstName : "James",
    lastName : "Milner",
    age : 20,
    location : "Accra"
};

// 3. Create the array
const studentList:Student[] = [student1,student2];


// 4. Create the table using Vanilla JavaScript
const table = document.createElement("table");
table.border = "1";

// Add a header row
const headerRow = document.createElement("tr");
const header1 = document.createElement("th");
header1.textContent = "First Name";
const header2 = document.createElement("th");
header2.textContent = "Location";

headerRow.append(header1);
headerRow.append(header2);
table.appendChild(headerRow);

// 5. Add rows for each student
studentList.forEach((Student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = Student.firstName;
    
    const locationCell = document.createElement("td");
    locationCell.textContent = Student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row)
});

// 6. Add the table to the body of the HTML page
document.body.appendChild(table);