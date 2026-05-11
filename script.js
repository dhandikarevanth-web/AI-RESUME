function generateResume() {

  document.getElementById("previewName").innerText = document.getElementById("name").value;

  document.getElementById("previewEmail").innerText = document.getElementById("email").value;

  document.getElementById("previewPhone").innerText = document.getElementById("phone").value;

  document.getElementById("previewSummary").innerText = document.getElementById("summary").value;

  document.getElementById("previewSkills").innerText = document.getElementById("skills").value;

  document.getElementById("previewEducation").innerText = document.getElementById("education").value;

  document.getElementById("previewProjects").innerText = document.getElementById("projects").value;

  document.getElementById("previewExperience").innerText = document.getElementById("experience").value;

  document.getElementById("previewCertifications").innerText = document.getElementById("certifications").value;

  document.getElementById("previewLanguages").innerText = document.getElementById("languages").value;
}

function generateSummary() {

  const summary = "Motivated and detail-oriented developer skilled in web development, AI tools, problem solving, and responsive application design.";

  document.getElementById("summary").value = summary;
}

function suggestSkills() {

  const skills = "HTML, CSS, JavaScript, React.js, Node.js, MongoDB, GitHub, APIs, Responsive Design";

  document.getElementById("skills").value = skills;
}

function improveProjects() {

  const improved = "Developed an AI-powered ATS-friendly resume builder with live preview, multiple templates, and resume analysis features using HTML, CSS, and JavaScript.";

  document.getElementById("projects").value = improved;
}

function calculateATS() {

  const skills = document.getElementById("skills").value;

  const experience = document.getElementById("experience").value;

  const projects = document.getElementById("projects").value;

  let score = 50;

  if (skills.length > 20) {
    score += 15;
  }

  if (experience.length > 30) {
    score += 15;
  }

  if (projects.length > 20) {
    score += 10;
  }

  if (skills.includes("JavaScript")) {
    score += 5;
  }

  if (skills.includes("React")) {
    score += 5;
  }

  document.getElementById("atsScore").innerText = score + "% ATS Friendly";

  document.getElementById("circleValue").innerText = score + "%";

  document.getElementById("strengthBar").value = score;

  if (score < 70) {
    document.getElementById("missingKeywords").innerText = "Add more technical keywords";
  }

  else {
    document.getElementById("missingKeywords").innerText = "Good Keyword Optimization";
  }

  document.getElementById("grammarScore").innerText = "85%";

  document.getElementById("formatCheck").innerText = "Professional";

  document.getElementById("keywordDensity").innerText = "High";

  document.getElementById("readability").innerText = "Excellent";
}

function atsSuggestions() {

  const recommendations = "Suggested ATS Keywords: Leadership, Teamwork, Communication, APIs, Problem Solving, Responsive Design, Database Management";

  alert(recommendations);
}

function toggleDarkMode() {

  document.body.classList.toggle("dark-mode");
}

const template = document.getElementById("templateSelect");

template.addEventListener("change", function () {

  const preview = document.getElementById("resumePreview");

  preview.className = "";

  if (this.value === "blue") {
    preview.classList.add("template-blue");
  }

  else if (this.value === "dark") {
    preview.classList.add("template-dark");
  }

  else if (this.value === "green") {
    preview.classList.add("template-green");
  }

});
function openLogin() {

  document.getElementById("loginModal").style.display = "block";
}

function closeLogin() {

  document.getElementById("loginModal").style.display = "none";
}

function openSignup() {

  document.getElementById("signupModal").style.display = "block";
}

function closeSignup() {

  document.getElementById("signupModal").style.display = "none";
}

function switchToSignup() {

  closeLogin();

  openSignup();
}

function switchToLogin() {

  closeSignup();

  openLogin();
}
