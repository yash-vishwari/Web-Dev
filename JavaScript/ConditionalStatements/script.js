let age = 5;

if (age >= 18) {
  console.log("Eligible for voting");
} else {
  console.log(" Not eligible for Voting");
}

let num = 4;
if (num % 2 == 0) {
  console.log(` Number ${num} is even`);
} else {
  console.log(`Number ${num} is odd`);
}

let grade = 93;

if (grade > 90) {
  console.log("Grade A");
} else if (grade > 75 && grade <= 90) {
  console.log("Grade B");
}

if (grade > 50 && grade <= 75) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

let username = "calmBoy";
let password = "NGU";

let user = "calmBoy";
let pswd = "NGU";
if (username === user && password === pswd) {
  console.log("Login Successfull");
} else {
  console.log("Login Failed");
}

let name = "Pihu";
let data;

// if(name). //id string pr object is not empty means length >0 -----> treated as True
// {
//     data =name;
// }

// else{
//     data ="N/A";
// }
//  --------------------------------ShortHand-------------------------------------

data = name || "N/A";

console.log(data);
// public long countOne(String num,int ind,int tight)
// {

//     if(ind ==num.length())
//     {
//         return 1;
//     }

//     int lb =0;
//     int hb =9;
//     if(tight ==1)
//     {
//         hb =num.charAt(ind)-'0';
//     }

//     for()
// // }

let choice = 30;

switch (choice) {
  case 1: {
    console.log("tea");
    break;
  }

  case 2: {
    console.log("Lassi");
    break;
  }

  case 3: {
    console.log("Coffee");
    break;
  }

  default: {
    console.log("paani");
  }
}
