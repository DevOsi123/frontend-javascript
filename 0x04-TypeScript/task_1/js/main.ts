interface Directors {
    firstName: string
    lastName: string
    location: string
    fullTimeEmployee: boolean
    numberOfReports: 17
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction{
  (firstName: string,lastName: string):string;
}



//charAt(0) returns the first letter of the name
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher("john","Doe"))