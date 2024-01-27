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

  var optionsList = document.createElement("ul");
  optionsList.className = "options-list";

  options.forEach(function (option) {
    var listItem = document.createElement("li");
    listItem.textContent = option;
    listItem.onclick = function () {
      document.getElementById("input-text").value = option;
      sendMessage();
    };

    optionsList.appendChild(listItem);
  });

  chatMessages.appendChild(advisorMessage);
  chatMessages.appendChild(optionsList);

  currentStep++;
}

function handleUniversitySelection(selection) {
  // You can process the selected university here
  var chatMessages = document.getElementById("chat-messages");
  var advisorMessage = document.createElement("div");
  advisorMessage.className = "advisor-message";
  advisorMessage.textContent = "Advisor: Great! Now, let me know your major.";

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
}