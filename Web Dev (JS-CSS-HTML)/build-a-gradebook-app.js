** start of script.js **

/**
 * Calculates the average of an array of test scores.
 *
 * @param {number[]} scores - An array of numerical test scores.
 * @returns {number} The average score, or 0 if the array is empty.
 */
function getAverage(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    console.warn("getAverage received an empty or invalid array. Returning 0.");
    return 0;
  }

  const sum = scores.reduce((total, score) => total + score, 0);
  return sum / scores.length;
}

/**
 * Returns a string representing a letter grade based on the given score.
 *
 * @param {number} score - The student's numerical score.
 * @returns {string} The corresponding letter grade ("A+", "A", "B", "C", "D", "F").
 */
function getGrade(score) {
  if (typeof score !== 'number' || isNaN(score)) {
    console.error("getGrade received an invalid score. Please provide a number.");
    return "Invalid Score"; // Or throw an error, depending on desired behavior
  }
  if (score < 0 || score > 100) {
    console.warn(`Score ${score} is out of the 0-100 range. Assigning grade based on nearest boundary.`);
  }

  if (score === 100) {
    return "A+";
  } else if (score >= 90 && score <= 99) { // Note: 100 is handled by A+
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else { // 0 - 59
    return "F";
  }
}

/**
 * Determines if a score corresponds to a passing grade.
 * A passing grade is anything other than "F".
 *
 * @param {number} score - The student's numerical score.
 * @returns {boolean} True if the grade is passing, false otherwise.
 */
function hasPassingGrade(score) {
  const grade = getGrade(score);
  return grade !== "F";
}

/**
 * Generates a student message summarizing their performance in a course.
 *
 * @param {number[]} totalScores - An array of all scores in the class.
 * @param {number} studentScore - The specific student's score.
 * @returns {string} A formatted message indicating class average, student grade, and pass/fail status.
 */
function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const studentGrade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);

  let message = `Class average: ${average}. Your grade: ${studentGrade}. `;

  if (passed) {
    message += "You passed the course.";
  } else {
    message += "You failed the course.";
  }

  return message;
}

// --- Example Usage (for testing purposes) ---
// const classTestScores = [85, 92, 78, 65, 95, 50, 88, 72, 100, 60];
// const studentOneScore = 88;
// const studentTwoScore = 55;
// const studentThreeScore = 100;

// console.log("--- Get Average Examples ---");
// console.log(`Average of [85, 92, 78]: ${getAverage([85, 92, 78])}`); // Expected: 85
// console.log(`Class average: ${getAverage(classTestScores)}`);

// console.log("\n--- Get Grade Examples ---");
// console.log(`Grade for 95: ${getGrade(95)}`); // Expected: A
// console.log(`Grade for 82: ${getGrade(82)}`); // Expected: B
// console.log(`Grade for 68: ${getGrade(68)}`); // Expected: D
// console.log(`Grade for 59: ${getGrade(59)}`); // Expected: F
// console.log(`Grade for 100: ${getGrade(100)}`); // Expected: A+

// console.log("\n--- Has Passing Grade Examples ---");
// console.log(`Has passing grade for 70: ${hasPassingGrade(70)}`); // Expected: true
// console.log(`Has passing grade for 59: ${hasPassingGrade(59)}`); // Expected: false
// console.log(`Has passing grade for 100: ${hasPassingGrade(100)}`); // Expected: true

// console.log("\n--- Student Message Examples ---");
// console.log(studentMsg(classTestScores, studentOneScore)); // Student passed
// console.log(studentMsg(classTestScores, studentTwoScore)); // Student failed
// console.log(studentMsg(classTestScores, studentThreeScore)); // Student passed

// Example with edge cases for getAverage and getGrade
// console.log(getAverage([])); // Should log warning and return 0
// console.log(getGrade("abc")); // Should log error and return "Invalid Score"


** end of script.js **

