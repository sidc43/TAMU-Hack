let atr = [];
let obj = {
  name: "",
  major: "",
  year: "",
};

var universityOptions = [
  "Texas A&M University",
  "UT Arlington",
  "UT Dallas",
  "University of Houston",
];
var majorOptions = [
  "Computer Science",
  "Computer Engineering",
  "Software Engineering",
];
var yearOptions = ["Freshman", "Sophomore", "Junior", "Senior"];

var currentStep = 0;

// Add a new function to handle the 'Enter' key press
function handleKeyPress(event) {
  // Check if the pressed key is 'Enter' (key code 13)
  if (event.keyCode === 13) {
    // Call the 'sendMessage' function when 'Enter' key is pressed
    sendMessage();
  }
}

window.onload = function () {
  showOptions(
    "Which university are you from?",
    universityOptions,
    "university-options-container"
  );
  currentStep++;
};

// Update the 'sendMessage' function to include 'handleKeyPress' on 'Enter' key press
function sendMessage() {
  var userInput = document.getElementById("input-text").value;
  if (userInput.trim() === "") return;

  var chatMessages = document.getElementById("chat-messages");
  var userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.textContent = "You: " + userInput;

  chatMessages.appendChild(userMessage);

  switch (currentStep) {
    case 1:
      handleUniversitySelection(userInput);
      currentStep++;
      break;

    case 2:
      showOptions(
        "What is your major?",
        majorOptions,
        "major-options-container"
      );
      break;
    case 3:
      handleMajorSelection(userInput);
      currentStep++;
      break;
    case 4:
      showOptions("What is your year?", yearOptions, "year-options-container");
      break;
    case 5:
      atr = trimArray(atr);
      obj.name = atr[0];
      obj.major = atr[1].replace(/\s/g, "");
      obj.year = atr[2];
      console.log(obj);
      getCollegeData();
      break;
  }

  currentStep++;
  document.getElementById("input-text").value = "";
}

function getCollegeData() {
  fetch(`http://localhost:3000/college/${obj.name}/${obj.major}/${obj.year}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

function trimArray(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] != null) result.push(array[i]);
  }
  return result;
}

function showOptions(message, options, containerId) {
  var chatMessages = document.getElementById("chat-messages");
  var advisorMessage = document.createElement("div");
  advisorMessage.className = "advisor-message";
  advisorMessage.innerHTML = `<pre style="font-family: 'Montserrat'">  Advisor: ${message} </pre>`;

  var optionsContainer = document.getElementById(containerId);
  optionsContainer.innerHTML = "";

  options.forEach(function (option) {
    var optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.onclick = function () {
      document.getElementById("input-text").value = option;
      atr[currentStep] = option;
      sendMessage();
    };

    optionsContainer.appendChild(optionButton);
  });

  chatMessages.appendChild(advisorMessage);
  chatMessages.appendChild(optionsContainer);
}

function handleUniversitySelection(selection) {
  var chatMessages = document.getElementById("chat-messages");
  var advisorMessage = document.createElement("div");
  advisorMessage.className = "advisor-message";

  showOptions("What is your major?", majorOptions, "major-options-container");
}

function handleMajorSelection(selection) {
  var chatMessages = document.getElementById("chat-messages");
  var advisorMessage = document.createElement("div");
  advisorMessage.className = "advisor-message";

  chatMessages.appendChild(advisorMessage);

  showOptions("What is your year?", yearOptions, "year-options-container");
}
