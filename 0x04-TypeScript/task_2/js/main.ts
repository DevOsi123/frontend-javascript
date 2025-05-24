//Creating an interface called DirectorInterface
interface DirectorInterface  {
   workFromHome():string;
   getCoffeeBreak():string;
   workDirectorTasks():string;
};

//Creating an interface called TeacherInterface
interface TeacherInterface {
  workFromHome():string
  getCoffeeBreak():string
  workTeacherTasks():string
}


//creating a class Director which implements DirectorInterface interface
class Director implements DirectorInterface{
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak():string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }

}

class Teacher implements TeacherInterface{
  workFromHome(): string {
    return "Cannot work from home"
  }

  getCoffeeBreak(): string {
    return "Cannot have a break"
  }

  workTeacherTasks(): string {
    return "Getting to work"
  }
}

// a function which returns teacher or director  when  you put in number or number in string form
function createEmployee(salary: number | string): Teacher | Director{
 if(typeof salary === "number" && salary < 500){
  return new Teacher()
 }
 else{
  return  new Director()
 }
}

function isDirector(employee:Teacher | Director) : employee is Director{
return (employee as Director).workDirectorTasks !== undefined;

}

//a function it accepts employee as an argument
// if the employee is a Director, it will call workDirectorTasks
// if the employee is a Teacher, it will call workTeacherTasks
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)){
    console.log(employee.workDirectorTasks()) ;
  }
  else{
    console.log(employee.workTeacherTasks()) ;
  }

  return "Unknown employee role";
}


type Subjects = "Math" |"History" ;
function teachClass(todayClass:Subjects){
  if(todayClass === "Math"){
    console.log("Teaching Math");
  }
  else if(todayClass === "History"){
    console.log("Teaching History");
  }
  }

 

  teachClass("Math")
  teachClass("History")
 