// CODE here for your Lambda Classes
class Person {
    constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
        this.gender = person.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructor) {
        const person = {
            name: instructor.name,
            age: instructor.age,
            location: instructor.age,
            gender: instructor.gender
        }
        super(person);
        this.specialty = instructor.specialty;
        this.favLanguage = instructor.favLanguage;
        this.catchPhrase = instructor.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(student) {
        const person = {
            name: student.name,
            age: student.age,
            location: student.age,
            gender: student.gender
        }
        super(person);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
    }

    listSubjects() {
        this.favSubjects.map(subject => console.log(subject));
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(projectmanager) {
        const instructor = {
            name: projectmanager.name,
            age: projectmanager.age,
            location: projectmanager.age,
            gender: projectmanager.gender,
            specialty: projectmanager.specialty,
            favLanguage: projectmanager.favLanguage,
            catchPhrase: projectmanager.catchPhrase,
        }
        super(instructor);
        this.gradClassName = projectmanager.gradClassName;
        this.favInstructor = projectmanager.favInstructor;
    }

    standup(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const person = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
  });

const student = new Student({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    previousBackground: 'Worked as a software dev for google',
    className: 'WEBEU2',
    favSubjects: ['react', 'redux', 'postgres', 'javascript']
  });

const instructor = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });


const projectmanager = new ProjectManager({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'CS1',
    favInstructor: 'Sean'
  });