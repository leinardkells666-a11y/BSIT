const account = {
    username: "jsantos",
    password: "Occ2026!",
    age: 19,
    status: "active",
    email: "jsantos@gmail.com"
};

function validate(data) {
    const errors = [];

if (!data.username || data.username.length < 4) {
    errors.push("Username must be at least 4 characters");
}
if (data.age < 16 || data.age > 70) {
    errors.push("Age must be between 16 and 70");
}
if (data.status !== "active") {
    errors.push("Account is not active");
}
if (data.age >= 18 && data.age <= 60) {
    console.log("Eligible age");
}
    return errors;
}
