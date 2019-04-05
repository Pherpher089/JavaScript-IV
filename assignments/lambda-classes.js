// CODE here for your Lambda Classes

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this. location = attributes.location;
        this.gender = attributes.gender;
    }

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor (attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }

    listsSubjects(){
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }

    debusCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }

}

/*TESTING CODE HERE*/

const fred = new Person({
    name: 'Fred',
    age: 37,
    location: 'Bedrock'
  });

  fred.speak();

const sean = new Student({
    name: 'Sean',
    age: 23,
    location: 'Sunnyvale',
    previousBackground: 'Machine Learning',
    className:'Data Science',
    favSubjects: ['SLQ','PHP', 'UI']
})

const chris = new Student({
    name: 'Chris',
    age: 26,
    location: 'Sunnyvale',
    previousBackground: 'Game Development',
    className:'Full Stack Web Development',
    favSubjects: ['HTML','CSS', 'JS']
})

sean.listsSubjects();
chris.PRAssignment('JavaScript');
sean.sprintChallenge('Advanced CSS');

const camPope = new Instructor({
    name: 'Cameron Pope',
    location: 'Utah',
    age: 33,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`
  });

  camPope.demo('OOP');
  camPope.grade(sean, 'HTML'); 

const bLent = new ProjectManager({
    name: 'Cameron Pope',
    location: 'Utah',
    age: 33,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'CS1',
    favInstructor: camPope.name
})

bLent.standUp('webpt_lent');
bLent.debusCode(chris, 'JavaScript');
