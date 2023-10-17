 const sym = Symbol("mysym1");
 
 const user = {
    username: " Shivam",
    class: "CE-72",
    [sym]: "mysym781",
    Rollno: "20001003115",
    skills: "web-dev"
 }
//  console.log(user);

console.log(user[sym]);
console.log(user)

// user.greeting = function(){
//    console.log("my insta user id is shivamarora01_");
// }
// user.greetingTwo = function(){
//    let name=this.greeting
//    console.log(`my snap id iss ${this.greeting()}`);
// }

// console.log(user.greeting)
// console.log(user.greeting())
// console.log(user.greetingTwo())

//  console.log(user.username);
//  console.log(user["username"]);
//  //unaccesible
//  console.log(user.sym)
//  //unaccesible
//  console.log(typeof(user.sym))
//  //proper way to handle symbol output
//  console.log((user[sym]))
//  //to get typeof
//  console.log(typeof(user[sym]))

// //  Object.freeze(user)
//  user.username = "jayant bhatia";
//  console.log(user)

