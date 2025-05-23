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


function createEmployee(salary:number | string):string{
 if(typeof salary === "number" && salary){
  return "Teacher"
 }
 else{
  return  "Director";
 }
}

console.log(createEmployee(200));

console.log(createEmployee(1000));

console.log(createEmployee('$500'));
