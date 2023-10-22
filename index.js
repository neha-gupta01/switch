const day = "monday";

switch (day) {
  case "monday":
    console.log("It's Monday. Time to start the week!");
    break;
  case "tuesday":
    console.log("It's Tuesday. Keep going!");
    break;
  case "Wednesday":
    console.log("It's Wednesday. Midweek already!");
    break;
  default:
    console.log("It's some other day.");
}

const score = 85;

switch (true) {
  case score >= 90:
    console.log("A grade");
    break;
  case score >= 80:
    console.log("B grade");
    break;
  case score >= 70:
    console.log("C grade");
    break;
  case score >= 60:
    console.log("D grade");
    break;
  default:
    console.log("F grade");
}

const fruit = "banana";

switch (fruit) {
  case "apple":
  case "cherry":
    console.log("It's a fruit you can eat.");
    break;
  case "car":
    console.log("It's not a fruit.");
    break;
  default:
    console.log("Unknown item.");
}
