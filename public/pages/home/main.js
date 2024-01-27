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

function sendMessage() {
  var userInput = document.getElementById("input-text").value;
  if (userInput.trim() === "") return;

  var chatMessages = document.getElementById("chat-messages");
  var userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.textContent = "You: " + userInput;

  chatMessages.appendChild(userMessage);

  // Handle different steps
  switch (currentStep) {
    case 0:
      showOptions("Which university are you from?", universityOptions);
      break;
    case 1:
      handleUniversitySelection(userInput);
      break;
    case 2:
      showOptions("What is your major?", majorOptions);
      break;
    case 3:
      handleMajorSelection(userInput);
      break;
    // Add more cases for additional steps if needed
  }

  document.getElementById("input-text").value = "";
}

function showOptions(message, options) {
  var chatMessages = document.getElementById("chat-messages");
  var advisorMessage = document.createElement("div");
  advisorMessage.className = "advisor-message";
  advisorMessage.textContent = "Advisor: " + message;

  var optionsContainer = document.createElement("div");
  optionsContainer.className = "options-container";

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
  // You can process the selected university here
  var chatMessages = document.getElementById("chat-messages");
  var advisorMessage = document.createElement("div");
  advisorMessage.className = "advisor-message";
  chatMessages.appendChild(advisorMessage);

  currentStep++;
}

function handleMajorSelection(selection) {
  // You can process the selected major here
  var chatMessages = document.getElementById("chat-messages");
  var advisorMessage = document.createElement("div");
  advisorMessage.className = "advisor-message";
  advisorMessage.textContent =
    "Advisor: Excellent! We are ready to assist you with your queries.";

  chatMessages.appendChild(advisorMessage);

  // Add logic to connect with AdvisorGPT or perform other actions based on user input
  // For now, let's assume the conversation ends here.
  currentStep++;
}
