let uName;
let uMajor;
let uYear;

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

var currentStep = 0;

window.onload = function () {
  showOptions(
    "Which university are you from?",
    universityOptions,
    "university-options-container"
  );
};

function sendMessage() {
  var userInput = document.getElementById("input-text").value;
  if (userInput.trim() === "") return;

  var chatMessages = document.getElementById("chat-messages");
  var userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.textContent = "You: " + userInput;

  chatMessages.appendChild(userMessage);

  switch (currentStep) {
    case 0:
      handleUniversitySelection(userInput);
      break;
    case 1:
      showOptions(
        "What is your major?",
        majorOptions,
        "major-options-container"
      );
      break;
    case 2:
      handleMajorSelection(userInput);
      break;
  }

  document.getElementById("input-text").value = "";
}

function showOptions(message, options, containerId) {
  var chatMessages = document.getElementById("chat-messages");
  var advisorMessage = document.createElement("div");
  advisorMessage.className = "advisor-message";
  advisorMessage.textContent = "Advisor: " + message;

  var optionsContainer = document.getElementById(containerId);
  optionsContainer.innerHTML = "";

  options.forEach(function (option) {
    var optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.onclick = function () {
      document.getElementById("input-text").value = option;
      sendMessage();
    };

    optionsContainer.appendChild(optionButton);
  });

  chatMessages.appendChild(advisorMessage);
  chatMessages.appendChild(optionsContainer);

  currentStep++;
}

function handleUniversitySelection(selection) {
  var chatMessages = document.getElementById("chat-messages");
  var advisorMessage = document.createElement("div");
  advisorMessage.className = "advisor-message";
  advisorMessage.textContent =
    "Advisor: Thank you for providing your university information.";

  chatMessages.appendChild(advisorMessage);

  showOptions("What is your major?", majorOptions, "major-options-container");
  currentStep++;
}

function handleMajorSelection(selection) {
  var chatMessages = document.getElementById("chat-messages");
  var advisorMessage = document.createElement("div");
  advisorMessage.className = "advisor-message";
  advisorMessage.textContent =
    "Advisor: Excellent! We are ready to assist you with your queries.";

  chatMessages.appendChild(advisorMessage);

  currentStep++;
}
