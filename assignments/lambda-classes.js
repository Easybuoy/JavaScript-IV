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

    random(student) {
        let max = 100 - student.grade;
        let min = 0 - student.grade;
        let rand = Math.floor(Math.random() * (max - min + 1)) + min;
        return student.grade = student.grade + rand;
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
        this.grade = 90;
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

    graduate() {
        if (this.grade > 70) {
            return `Yaayyy!!, Congratulations ${this.name}, you have just graduated.`;
        }
        return `Hi ${this.name}, you have not reached the minimum score for graduating. Kindly revisit and resubmit your assignments to increase your score.`;
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

  console.log('============================================');
  console.log('person name:', person.name);
  console.log('person location:', person.location);
  console.log('person age:', person.age);
  console.log('person gender:', person.gender);
  console.log('person speak:', person.speak());

const student = new Student({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    previousBackground: 'Worked as a software dev for google',
    className: 'WEBEU2',
    favSubjects: ['react', 'redux', 'postgres', 'javascript']
  });

  console.log('============================================');
  console.log('student name:', student.name);
  console.log('student location:', student.location);
  console.log('student age:', student.age);
  console.log('student gender:', student.gender);
  console.log('student previousBackground:', student.previousBackground);
  console.log('student className:', student.className);
  console.log('student favsubjects:', student.favSubjects);
  console.log('student listsubject:', student.listSubjects());
  console.log('student PRAssignment:', student.PRAssignment('React'));
  console.log('student sprintChallenge:', student.sprintChallenge('Redux'));
  console.log('student graduate:', student.graduate());

const instructor = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  console.log('============================================');
  console.log('instructor name:', instructor.name);
  console.log('instructor location:', instructor.location);
  console.log('instructor age:', instructor.age);
  console.log('instructor gender:', instructor.gender);
  console.log('instructor favLanguage:', instructor.favLanguage);
  console.log('instructor specialty:', instructor.specialty);
  console.log('instructor catchPhrase:', instructor.catchPhrase);
  console.log('instructor demo:', instructor.demo('Node API'));
  console.log('instructor grade:', instructor.grade(student, 'Postgres'));
  console.log('instructor random:', instructor.random(student));


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

  console.log('============================================');
  console.log('projectmanager name:', projectmanager.name);
  console.log('projectmanager location:', projectmanager.location);
  console.log('projectmanager age:', projectmanager.age);
  console.log('projectmanager gender:', projectmanager.gender);
  console.log('projectmanager favLanguage:', projectmanager.favLanguage);
  console.log('projectmanager specialty:', projectmanager.specialty);
  console.log('projectmanager catchPhrase:', projectmanager.catchPhrase);
  console.log('projectmanager gradClassName:', projectmanager.gradClassName);
  console.log('projectmanager favInstructor:', projectmanager.favInstructor);
  console.log('projectmanager standup:', projectmanager.standup('webeu2'));
  console.log('projectmanager debugsCode:', projectmanager.debugsCode(student, 'Javascript'));

