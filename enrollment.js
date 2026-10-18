// enrollment.js

const tuitionFee = 450;
const numberOfUnits = 3;
const VAT = 0.12;
const miscellaneousFee = 1200;

const studentName = "Juan Dela Cruz";
const studentCourse = "BSIT";
const studentYearLevel = 2;
const isEnrolled = true;

// Calculate tuition and miscellaneous fees
let totalFee = tuitionFee * numberOfUnits;
totalFee = totalFee + miscellaneousFee;

// Add 12% VAT
const totalWithVAT = totalFee + totalFee * VAT;

// Enrollment counter
let enrollmentCount = 0;
enrollmentCount = enrollmentCount + 1;

// Check enrollment status
let enrollmentStatus;

if (isEnrolled === true) {
    enrollmentStatus = "ENROLLED";
} else {
    enrollmentStatus = "NOT ENROLLED";
}

// Display results
console.log(studentName, studentCourse, studentYearLevel, enrollmentStatus);
console.log(totalFee);
console.log(totalWithVAT);
console.log(enrollmentCount);
