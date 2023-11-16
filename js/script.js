const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

// Object & Properties with Dot Notation
const learning = {};

learning.topic = "JS";
learning.learningGoals = [
    "Learning coding essentials",
    "Using more efficient tools",
    "Relaxing",
    "Build confidence"
]
learning.catagory = "Front End Development"
learning.topicImportance = "High";

// change, removing values and an array item
learning.topic = "JavaScript."; 
learning.learningGoals.splice(1, 1); 

// displays text and removes a class
topicElement.innerText = `✅ I'm learning ${learning.topic}`;
topicElement.classList.remove("hide");

countElement.innerText = `✅ I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");