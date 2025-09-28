// Select the <body> element from the document and store it in a variable//
const body = document.body;

// Create a new <footer> element//
const footer = document.createElement("footer");

// Append the <footer> as the last child of the <body>//
body.appendChild(footer);

// Create a new Date object and get the current year//
const today = new Date();
const thisYear = today.getFullYear();

// Create a new <p> element for the copyright//
const copyright = document.createElement("p");
copyright.innerHTML = `&copy; ${thisYear} My Website`;

// Append the <p> element to the <footer>//
footer.appendChild(copyright);

// Create an array of technical skills and store it in a variable named skills//
const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Adobe Photoshop",
  "GitHub",
  "Microsoft Office",
];

// Select the <section> element with id "skills" and store it in a variable//
const skillsSection = document.getElementById("skills");

// Select the <ul> element inside the skillsSection
const skillsList = skillsSection.querySelector("ul");

// Loop through the skills array and create a <li> for each skill//
for (let i = 0; i < skills.length; i++) {
  // Create a new <li> element for each skill
  const skill = document.createElement("li");

  // Set the inner text of the <li> to the current skill from the array
  skill.innerText = skills[i];

  // Append the <li> element to the <ul> skillsList
  skillsList.appendChild(skill);
}
