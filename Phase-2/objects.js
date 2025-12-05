const rudra = {
    name : "Rudra",
    "fullname" : "Rudra Katkar", //this property cant be accessed using dot notation because of the quotes
    age : 20,
    location : "Airoli",
    email : "rudrakatkar9@gmail.com"
}

//how to access object properties

console.log(rudra.age)

console.log(rudra["email"])

/*
there is also a symbol datatype in js which
is used to create unique identifiers for object properties.
*/

// object with singleton or with constructor
const user = {}

    user.id = "rudra2005",
    user.name = "Rudra Katkar",
    user.isLoggedIn = 1;

    console.log(user);

const user2 = {
    email : "rudrakatkar9@gmail.com",
    fullname : {
        userFullname : {
            name : "Rudra Katkar",
            age : 20
        }
    }

}
console.log(user2.fullname.userFullname.name);
console.log(user2.fullname.userFullname.age);
//this means we can also create nested objects in js

const obj1 = {a : 1, b : 2, c : 3};
const obj2 = {d : 4, e : 5, f : 6};

//merging two objects

const mergedObj = Object.assign({}, obj1, obj2); //using Object.assign() method
console.log(mergedObj);

const obj3 = {...obj1, ...obj2}; //using spread operator
console.log(obj3);

//this is how you can merge two objects in js by two ways

