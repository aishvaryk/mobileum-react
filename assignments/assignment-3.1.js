function Person(name, age) {
    this.name = name;
    this.age = age;
    this.license = [];
}

teachDrive = function (person, vehicleType) {
    if (person.age < 18) {
        console.log("Age must be at least 18");
    }
    else {
        console.log(person.name + " can drive " + vehicleType);
        issueLicense(person, vehicleType);
    }
}

var drive = function drive(vehicleType) {
    if (this.license.includes(vehicleType)) {
        console.log(this.name + " is driving " + vehicleType)
    }
    else {
        console.log(this.name + "needs a license to drive " + vehicleType)
    }
}

var issueLicense = function (person, vehicleType) {
    if (person.age < 18) {
        console.log("Age must be at least 18");
    }
    else {
        person.license.push(vehicleType);
        if (person.license.length == 1) {
            person.drive = drive;
        }
    }
}
var prabhat = new Person("Prabhat", 40);
var shivanshi = new Person("Shivanshi", 15);

teachDrive(prabhat, "car");
console.log(prabhat.license);
prabhat.drive("car");
prabhat.drive("truck");