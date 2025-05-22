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

// function printTeacher: printTeacherFunction = (firstName,lastName)=>{
//   return `${firstName}.${lastName}`
// }


// const printTeacher: printTeacherFunction = (firstName, lastName) => {
//   return `${firstName.charAt(0)}. ${lastName}`;
// };

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName}. ${lastName}`;
}