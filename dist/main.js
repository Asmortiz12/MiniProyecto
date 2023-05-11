"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teacher = [];
let area = [];
let course = [];
var Carrera;
(function (Carrera) {
    Carrera["DesarrolloDeSoftware"] = "Desarrollo de Software";
    Carrera["Turismo"] = "Turismo";
    Carrera["Gastronomia"] = "Gastronom\u00EDa";
    Carrera["Marketing"] = "Marketing";
})(Carrera || (Carrera = {}));
var Asignatura;
(function (Asignatura) {
    Asignatura["Metodologias"] = "Metodolog\u00EDas de desarrollo ";
    Asignatura["Dise\u00F1o"] = "Dise\u00F1o de interfaces ";
    Asignatura["Programacion"] = "Programacion visual";
    Asignatura["BaseD"] = "Base de datos avanzado";
})(Asignatura || (Asignatura = {}));
var Nivel;
(function (Nivel) {
    Nivel["PRIMERO"] = "Primer semestre";
    Nivel["SEGUNDO"] = "Segundo semestre";
    Nivel["TERCERO"] = "Tercer semestre";
    Nivel["CUARTO"] = "Cuarto semestre";
    Nivel["QUINTO"] = "Quinto semestre";
})(Nivel || (Nivel = {}));
function addStudent() {
    let currentStudent = {
        name: readHtml("nameStudent"),
        identification: parseInt(readHtml("identificationStudent")),
        address: readHtml("addressStudent"),
        registracionCode: parseInt(readHtml("registrationCodeStudent")),
        carrer: readHtml("carrerStudent"),
        level: readHtml("levelStudent"),
    };
    students.push(currentStudent);
    console.log(students);
    console.table(students);
}
function addTeacher() {
    let currentTeacher = {
        name: readHtml("nameTeacher"),
        identification: parseInt(readHtml("identificationTeacher")),
        address: readHtml("addressTeacher"),
        title: readHtml("titleTeacher"),
        asignature: readHtml("asignatureTeacher"),
    };
    teacher.push(currentTeacher);
    console.log(teacher);
    console.table(teacher);
}
function addArea() {
    let currentArea = {
        name: readHtml("nameArea"),
        description: readHtml("descriptionArea"),
        career: readHtml("careerArea"),
    };
    area.push(currentArea);
    console.log(area);
    console.table(area);
}
function addCourse() {
    let currentCourse = {
        numberStudents: parseInt(readHtml("numberStudentsCourse")),
        activity: readHtml("activityCourse"),
        nameTeacher: readHtml("nameTeacherCourse"),
    };
    course.push(currentCourse);
    console.log(course);
    console.table(course);
}
function Select() {
    let career = document.getElementById("careerArea");
    let careers = Object.values(Carrera);
    careers.forEach((career1) => {
        let option = document.createElement("option");
        option.value = career1;
        option.text = career1,
            career.add(option);
    });
    let careerstudent = document.getElementById("carrerStudent");
    let careersstudets = Object.values(Carrera);
    careersstudets.forEach((careerstudent1) => {
        let option = document.createElement("option");
        option.value = careerstudent1;
        option.text = careerstudent1,
            careerstudent.add(option);
    });
    let asignatura = document.getElementById("asignatureTeacher");
    let asignaturas = Object.values(Asignatura);
    asignaturas.forEach((asignatura1) => {
        let option = document.createElement("option");
        option.value = asignatura1;
        option.text = asignatura1,
            asignatura.add(option);
    });
    let nivel = document.getElementById("levelStudent");
    let niveles = Object.values(Nivel);
    niveles.forEach((nivel1) => {
        let option = document.createElement("option");
        option.value = nivel1;
        option.text = nivel1,
            nivel.add(option);
    });
}
function readHtml(id) {
    return document.getElementById(id).value;
}
Select();
