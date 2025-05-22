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

// Step 1: Define the interface

interface isStudent{
  firstName:string
  lastName:string
  workOnHomework():string
  displayName():string
}

// Step 2: Create the class

class StudentClass implements  isStudent{
    firstName: string;
    lastName: string;

      // Constructor to initialize firstName and lastName
      constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

        // Method to indicate the student is working on homework
          workOnHomework():string{
      return "Currently working"
    }

// Method to display the student's first name
    displayName():string{
      return `${this.firstName}`
}

}

const student1 = new StudentClass("John", "Doe");
console.log(student1.workOnHomework())
console.log(student1.displayName())