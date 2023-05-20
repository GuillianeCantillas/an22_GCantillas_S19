const prompt=require("prompt-sync")({sigint:true}); 

function login() {

  var username = prompt("Enter your username:");
  if (username === "" || username === null) {
  	console.log("username should not be empty.");
    var username = prompt("Enter your username:");
  } 
  
   var password = prompt("Enter your password:");
  if (password === "" || password === null) {
   console.log("password should not be empty.");
   var password = prompt("Enter your password:");
   }

 var role = prompt("Enter your role:");
  if (role === "" || role === null) {
  	console.log("role should not be empty.");
  	var role = prompt("Enter your role:");
 }
 
  console.log("Username:", username);
  console.log("Password:", password);
  console.log("Role:", role);

  switch(role) {
  case "Admin", "admin":
    console.log("Welcome back to the class portal, admin!");
    break;
  case "Teacher", "teacher":
    console.log("Thank you for logging in, teacher!");
    break;
case "Student", "student":
	console.log("Welcome to the class portal, student!");
	break; 
  default:
    console.log("Role out of range.");
    }
}

login()

function calculateAve() {
    const num1 = parseFloat(prompt('Enter the first number:'));
    const num2 = parseFloat(prompt('Enter the second number:'));
    const num3 = parseFloat(prompt('Enter the third number:'));
    const num4 = parseFloat(prompt('Enter the fourth number:'));
  
  const ave = (num1 + num2 + num3 + num4) / 4;
  const roundedAverage = Math.round(ave);

  let lettergrade;
  if (ave >= 90) {
    lettergrade = 'A';
  } else if (ave >= 80) {
    lettergrade = 'B';
  } else if (ave >= 70) {
    lettergrade = 'C';
  } else if (ave >= 60) {
    lettergrade = 'D';
  } else {
    lettergrade = 'F';
  }

  console.log(`The average is ${ave.toFixed(2)}, it is rounded to ${roundedAverage} 
  	and the letter equivalent is ${lettergrade}.`);

	if (roundedAverage <= 74){
		console.log(`\n Hello, student, your average is ${roundedAverage} 
  	and the letter equivalent is F.`);
	} else if (roundedAverage >= 85 && roundedAverage <= 89){
		console.log(`\n Hello, student, your average is ${roundedAverage} 
  	and the letter equivalent is B.`);
	} else if (roundedAverage >= 90 && roundedAverage <= 95){
		console.log(`\n Hello, student, your average is ${roundedAverage} 
  	and the letter equivalent is A.`);
	} else if (roundedAverage > 96){
		console.log(`\n Hello, student, your average is ${roundedAverage} 
  	and the letter equivalent is A+.`);
}

}

calculateAve();

	

