
const education = [
{
  duration: "2021 - 2025",
  degree: "BS/ Computer Science",
  university: "CUST"
},
{
  duration: "2021 - 2025",
  degree: "BS/ Computer Science",
  university: "CUST"
}, {
  duration: "2021 - 2025",
  degree: "BS/ Computer Science",
  university: "CUST"
}
];
const educationContainer = document.getElementById('ed');
const educationList = document.getElementById('list2');
const educationHTML = education.map(item => `
      <li><p>${item.duration}</p>
        <p>${item.degree}</p>
        <p>${item.university}</p></li>
`).join('');

educationList.innerHTML = educationHTML;
const experience = [
{
  occupation: "Senior Developer - Present",
  company: "FigOver software house",
  description: "I'm a senior web developer at FigOver company and I have worked on numerous projects. i make these projects responsive using HTML, CSS and Javascript and explore more!"
},
{
  occupation: "Junior Developer - 2021",
  company: "FigOver software house",
  description: "I'm a junior web developer at FigOver company and I'm gaining experience in web development. i make these projects responsive using HTML, CSS and Javascript and explore more!"
},
{
  occupation: "UI/UX Designer - 2024",
  company: "FigOver software house",
  description: "I'm a UI/UX designer at FigOver company and I focus on creating intuitive user interfaces. i make these projects responsive using HTML, CSS and Javascript and explore more!"
}
];

const experienceContainer = document.getElementById('experiencelist');
const experienceList = document.createElement('ul'); // Create a ul element
const experienceHTML = experience.map(item => `
<li>
<p>${item.occupation}</p>
<p>${item.company}</p>
<p>${item.description}</p>
</li>
`).join('');

experienceList.classList.add('list1');
experienceList.innerHTML = experienceHTML;
experienceContainer.appendChild(experienceList);

const language = [

{
  Name: "English"
},
{
  Name: "French"
}, {
  Name: "Spanish"
}
];
const languageContainer = document.getElementById('lang');
const languageList = document.getElementById('list4');
const languageHTML = language.map(item => `
<li><p>${item.Name}</p></li>
`).join('');

languageList.innerHTML = languageHTML;
const references = [

{
  occupation: "Senior Developer",
  Name: "Jhon Ander",
  company: "Company Name Here",
  Email: "abc@gmail.com",
  Phone_no: "0333-3333333"
},
{
  occupation:"Senior UX Developer",
  Name: "Jhon Ander Paul",
  company: "Company Name Here",
  Email:"abc@gmail.com",
  Phone_no:"0333-3333333"
}
];
const referenceContainer = document.getElementById('ref');
const referenceList = document.getElementById('list6');
const referenceHTML = references.map(item => `
<li>
  <p>${item.occupation}</p>
  <p>${item.Name}</p>
  <p>${item.company}</p>
  <p>${item.Email}</p>
  <p>${item.Phone_no}</p>
  </li>
`).join('');

referenceList.innerHTML = referenceHTML;
const skills = [

{
  Name: "Photoshop"
},
{
  Name: "Graphic Designer"
}, {
  Name: "InDesign"
}, {
  Name: "UI/ UX Designer"
}
];
const skillContainer = document.getElementById('sklls');
const skillList = document.getElementById('list5');
const skillHTML = skills.map(item => `
<li><p>${item.Name}</p></li>
`).join('');

skillList.innerHTML = skillHTML;
