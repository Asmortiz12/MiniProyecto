import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";
import { Area } from "./entities/area";
import { Course } from "./entities/course";

let students: Student[] = [];
let teacher: Teacher[] = [];
let area:Area[]=[];
let course:Course[]=[];

enum Carrera {
    DesarrolloDeSoftware = "Desarrollo de Software",
    Turismo = "Turismo",
    Gastronomia = "Gastronomía",
    Marketing="Marketing"
  }
enum Asignatura {
    Metodologias = "Metodologías de desarrollo ",
    Diseño= "Diseño de interfaces ",
    Programacion = "Programacion visual",
    BaseD="Base de datos avanzado"
  }
  
  enum Nivel {
    PRIMERO = "Primer semestre",
    SEGUNDO = "Segundo semestre",
    TERCERO = "Tercer semestre",
    CUARTO = "Cuarto semestre",
    QUINTO = "Quinto semestre",
  }
  

function addStudent() {
    let currentStudent: Student = {
        name: readHtml("nameStudent"),
        identification: parseInt(readHtml("identificationStudent")),
        address: readHtml("addressStudent"),
        registracionCode: parseInt(readHtml("registrationCodeStudent")),
        carrer: readHtml("carrerStudent"),
        level: readHtml("levelStudent"),

    }
    students.push(currentStudent);
    console.log(students);
    console.table(students);
}


function addTeacher() {
    let currentTeacher: Teacher = {
        name: readHtml("nameTeacher"),
        identification: parseInt(readHtml("identificationTeacher")),
        address: readHtml("addressTeacher"),
        title: readHtml("titleTeacher"),
        asignature: readHtml("asignatureTeacher"),

    }
    teacher.push(currentTeacher);
    console.log(teacher);
    console.table(teacher);
}

function addArea(){
    let currentArea:Area={
        name:readHtml("nameArea"),
        description:readHtml("descriptionArea"),
        career:readHtml("careerArea"),
    }
    area.push(currentArea);
    console.log(area)
    console.table(area)
}
function addCourse(){
    let currentCourse:Course={
        numberStudents:parseInt(readHtml("numberStudentsCourse")),
        activity:readHtml("activityCourse"),
        nameTeacher:readHtml("nameTeacherCourse"),
    }
    course.push(currentCourse);
    console.log(course)
    console.table(course)
}

function Select  ():void{
    let career= document.getElementById("careerArea") as HTMLSelectElement;
    let careers= Object.values(Carrera);
    careers.forEach(
        (career1)=>{
            let option=document.createElement("option");
            option.value=career1;
            option.text=career1,
                  career.add(option);
        }
    );
    let careerstudent= document.getElementById("carrerStudent") as HTMLSelectElement;
    let careersstudets= Object.values(Carrera);
    careersstudets.forEach(
        (careerstudent1)=>{
            let option=document.createElement("option");
            option.value=careerstudent1;
            option.text=careerstudent1,
                  careerstudent.add(option);
        }
    );
    let asignatura= document.getElementById("asignatureTeacher") as HTMLSelectElement;
    let asignaturas= Object.values(Asignatura);
    asignaturas.forEach(
        (asignatura1)=>{
            let option=document.createElement("option");
            option.value=asignatura1;
            option.text=asignatura1,
                  asignatura.add(option);
        }
    );
    let nivel= document.getElementById("levelStudent") as HTMLSelectElement;
    let niveles= Object.values(Nivel);
    niveles.forEach(
        (nivel1)=>{
            let option=document.createElement("option");
            option.value=nivel1;
            option.text=nivel1,
                  nivel.add(option);
        }
    );
}

function readHtml(id: string): string {
    return (<HTMLInputElement>document.getElementById(id)).value;
}
Select()
