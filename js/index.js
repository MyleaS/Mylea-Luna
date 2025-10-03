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
copyright.innerHTML = `&copy; ${thisYear} Mylea Spicer`;

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

//Select the form element using its name attribute//
const messageForm = document.forms["leave_message"];

//Add an event listener to the form to handle the submit event//
messageForm.addEventListener("submit", function (event) {
  //Prevent the default form submission behavior; clears out after receives info//
  event.preventDefault();
  //Retrieve the values entered in the form fields//
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  //Your form handling will go here//
  console.log("Form submitted!");

  //Log the values to the console for demonstration purposes//
  console.log("Name:", usersName);
  console.log("Email:", usersEmail);
  console.log("Message:", usersMessage);

  //Select the messages section to display the submitted messages//
  const messagesSection = document.getElementById("messages");
  const messagesList = messagesSection.querySelector("ul");

  //Creat a new <li> element to hold the submitted message//
  const newMessage = document.createElement("li");

  //Set the inner HTML of the <li> to include the user's name, email, and message//
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> wrote: <span>${usersMessage}</span>`;

  //Create a remove button for each message//
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";

  //Add an event listener to the remove button to handle the click event//
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  //Append the button to the <li>//
  newMessage.appendChild(removeButton);

  //Append the <li> to the <ul>//
  messagesList.appendChild(newMessage);

  //Reset the form fields after submission//
  messageForm.reset();
});
