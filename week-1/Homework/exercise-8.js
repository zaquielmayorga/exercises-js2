/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/ 

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job:
      {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
      }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job:
      {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
      }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job:
      {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
      }
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job:
      {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
      }
  },

];

//YOUR CODE HERE

mentors.filter((hola) => hola.job.city == "Barcelona" && hola.skills.includes("React")).forEach((hello) => console.log(`hola mi nombre es ${hello.firstName} ${hello.lastName}`))

// mentors.filter((hablame) => hablame.job.city == "Barcelona").forEach((eres) => eres.class == "Jun1" , eres.skills.push("SQL") , console.log(eres.skills)) 

mentors.forEach((hablame) => {
 if  (hablame.job.city == "Barcelona"){
   hablame.class = "June1";
   hablame.skills.push("SQL")
 }
 console.log(hablame.skills)
})
// 3. Create an object method with the name .addSkill() to be able to add skills from it
// for (const key in mentors) {

//   mentors[key].addSkill = function(dato){
//   return this.skills.push(dato)
// }
// console.log(mentors[key]);

// }
mentors.forEach((main) => main.addSkill = function(unomas) {
  this.skills.push(unomas)
})
mentors[0].addSkill("nigga")

console.log(mentors[0])

// 4. Create a function to add a skill to all members in a list of mentors

// function addSkill(mentors,newSkill){

//   for (const key in mentors){

//     mentors[key].skills.push(newSkill);

//   addSkill(mentors, "PHP")

  function addSkill(holaAngelo , newSkill){
    return  holaAngelo.forEach((comoestasangelo) => comoestasangelo.skills.push(newSkill))
  }
  console.log(addSkill(mentors , "niggaZaquiel"))



//console.log(mentor[key].skill)
//   }
//   //your code here
// }
// for ( const key in mentors){

//   let city = mentors[key].job.city
//   let class1 = "Jun1"
//   if( city == "Barcelona" ) {
//     mentors[key].class == class1
//     mentors[key].skills.push("SQL")
//   }
// console.log(mentors[key].skills)
// } 
// for (const key in mentors) {
//  let city = mentors[key].job.city
//  let skill = mentors[key].skills
//  let firstName =  mentors[key].firstName
//  let lastName = mentors[key].lastName

 
//  if ( city == "Barcelona" &&  skill.includes("React") ) {
//    return console.log( `Hi, my name is ${firstName} ${lastName}. I work in Barcelona and i know React.`)
//  }
   
// }
//mentors.forEach(function (obj) {
  Object.assign(obj, {
    removeSkill: function (skillToRemove) {
      let indexOfElement = this.skills.indexOf(skillToRemove);
      this.skills.splice(indexOfElement, 1);
    },
  });
});

function removeSkillToMentors(mentorsArr, skillToRemove) {
  mentorsArr.forEach((obj) => {
    obj.removeSkill(skillToRemove);
  });
}

removeSkillToMentors(mentors, "Hypothetical_new_skill");

console.log(
  "     // Console.log: removeSkillToMentors(mentors, 'Hypothetical_new_skill')"
);
console.log(mentors);

// 6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills
let mentorWithMoreSkills = (mentorsArr) => {
  let allNumberOfSkills = mentorsArr
    .map((obj) => {
      return obj.skills.length;
    })
    .sort();
  let maxNumberOfSkills = allNumberOfSkills.pop();
  let nameOfMentors = mentorsArr
    .filter((obj) => {
      return obj.skills.length == maxNumberOfSkills;
    })
    .forEach((obj) => {
      console.log(
        `The max number of skills are ${maxNumberOfSkills}; and ${obj.firstName} match this criteria.`
      );
    });
};

console.log(
  "     // Console.log: the name of the mentor with more number of skills"
);

mentorWithMoreSkills(mentors);

// 7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

mentors.forEach(function (obj) {
  Object.assign(obj, {
    addStudentLikes: function (newLikes) {
      this.studentLikes += newLikes;
    },
  });
});

// 8. Create a function that adds a student like to all mentors in the array

let addStudentLikes = (mentorsArr, newLikes) => {
  mentorsArr.forEach((obj) => {
    obj.addStudentLikes(newLikes);
  });
};

addStudentLikes(mentors, 1);

console.log("     // Console.log: After assign addStudentLikes");
console.log(mentors);
//
