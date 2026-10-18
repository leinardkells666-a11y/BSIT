function assessGrade(score) {
if (score < 0 || score > 100) {
    return "Invalid score";
}

if (score >= 95) {
    return "Excellent";
}
else if (score >= 85) {
    return "Very Good";
}else if (score >= 75) {
    return "Passing";
}
else {
    return "Failing";
}
}

const tests = [-5, 0, 74, 75, 84, 85, 94, 95, 100, 120];

for (const t of tests) {
    console.log(Score ${t} -> ${assessGrade(t)});
}


