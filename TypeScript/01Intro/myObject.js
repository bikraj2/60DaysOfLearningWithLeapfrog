var User = {
    name: "Bikraj",
    email: "bikrajshrestha2@gmail.com",
    isActive: "true",
};
function createuser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Bikraj", isPaid: true, email: "bikraj" };
createuser(newUser);
function createCourse() {
    return { name: "React", price: 200, author: "Bikraj" };
}
function createUser(user) {
    return user;
}
console.log(createUser({ name: "Bikraj", email: "", isActive: true, age: 23, address: "" }));
