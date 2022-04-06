let num = 50;
if (num < 49) {
  console.log("Wrong!");
} else if (num > 100) {
  console.log("Many!");
} else {
  console.log("Right!");
}

num = 50 ? console.log("Right!") : console.log("Wrong!");

switch (num) {
  case num < 49:
    console.log("Wrong!");
    break;
  case num > 100:
    console.log("Many");
    break;
  case num > 80:
    console.log("Still a lot");
  case 50:
    console.log("Right!");
    break;
  default:
    console.log("Something went wrong!");
    break;
}
