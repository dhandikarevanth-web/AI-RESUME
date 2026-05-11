function generateResume(){

  document.getElementById("previewName").innerText =
  document.getElementById("name").value;

  document.getElementById("previewEmail").innerText =
  document.getElementById("email").value;

  document.getElementById("previewPhone").innerText =
  document.getElementById("phone").value;

  document.getElementById("previewSummary").innerText =
  document.getElementById("summary").value;

  document.getElementById("previewSkills").innerText =
  document.getElementById("skills").value;

  document.getElementById("previewEducation").innerText =
  document.getElementById("education").value;

  document.getElementById("previewProjects").innerText =
  document.getElementById("projects").value;

  document.getElementById("previewExperience").innerText =
  document.getElementById("experience").value;

  document.getElementById("previewCertifications").innerText =
  document.getElementById("certifications").value;

  document.getElementById("previewLanguages").innerText =
  document.getElementById("languages").value;
}

function generateSummary(){

  document.getElementById("summary").value =
  "Motivated developer skilled in AI tools, web development, APIs and responsive UI design.";
}

function suggestSkills(){

  document.getElementById("skills").value =
  "HTML, CSS, JavaScript, React.js, Node.js, GitHub, APIs, Responsive Design";
}

function improveProjects(){

  document.getElementById("projects").value =
  "Built an AI-powered ATS resume builder with live preview, resume analysis and modern templates.";
}

function atsSuggestions(){

  alert(
    "Suggested Keywords: Leadership, Communication, Teamwork, APIs, Database Management"
  );
}

function calculateATS(){

  let score = 80;

  document.getElementById("atsScore").innerText =
  score + "% ATS Friendly";

  document.getElementById("circleValue").innerText =
  score + "%";

  document.getElementById("strengthBar").value = score;
}

function openLogin(){

  document.getElementById("loginModal").style.display = "block";
}

function closeLogin(){

  document.getElementById("loginModal").style.display = "none";
}

function openSignup(){

  document.getElementById("signupModal").style.display = "block";
}

function closeSignup(){

  document.getElementById("signupModal").style.display = "none";
}

function switchToSignup(){

  closeLogin();

  openSignup();
}

function switchToLogin(){

  closeSignup();

  openLogin();
}

const template = document.getElementById("templateSelect");

if(template){

  template.addEventListener("change", function(){

    const preview = document.getElementById("resumePreview");

    if(this.value === "blue"){

      preview.style.background =
      "linear-gradient(to right,#1e3c72,#2a5298)";
    }

    else if(this.value === "dark"){

      preview.style.background = "#222";
    }

    else if(this.value === "green"){

      preview.style.background =
      "linear-gradient(to right,#11998e,#38ef7d)";
    }

    else{

      preview.style.background =
      "rgba(255,255,255,0.1)";
    }

  });

}
