// Define arrays for different parts of motivational messages
const intro = ["You've got this", "Believe in yourself", "Stay positive", "Keep going"];
const subjects = ["today", "in life", "right now", "in your journey"];
const verbs = ["can", "will", "have the ability to", "have the strength to"];
const objects = ["achieve greatness", "overcome any obstacle", "reach your goals", "make a difference"];

// Function to generate a random number from 0 -> num - 1, num will be the length of the array we're using
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }

// Function to generate a random motivational message
function generateRandomMessage() {
    const randomIntroIndex = generateRandomNumber(intro.length);
    const randomSubjectIndex = generateRandomNumber(subjects.length);
    const randomVerbIndex = generateRandomNumber(verbs.length);
    const randomObjectIndex = generateRandomNumber(objects.length);

    const randomMessage = `${intro[randomIntroIndex]}, ${subjects[randomSubjectIndex]}! You ${verbs[randomVerbIndex]} ${objects[randomObjectIndex]}.`;

    return randomMessage;
}

// Generate and print a random motivational message
const uniqueMessage = generateRandomMessage();
console.log(uniqueMessage);
