function Person (name, age) {
    this.name = name;
    this.age = age;
    this.license = [];
}

Person.prototype.teachDrive = function (vehicleType) {
    if (this.age <18) {
        console.log("Age must be at least 18");
    }
    else {
        console.log(this.name + " can drive " + vehicleType);
        this.issueLicense(vehicleType);
    }
}

Person.prototype.issueLicense = function (vehicleType) {
    if (this.age <18) {
        console.log("Age must be at least 18");
    }
    else {
        this.license.push(vehicleType);
        if (this.license.length==1) {
            this.drive = function(vehicleType) {
                if (this.license.includes(vehicleType)) {
                    console.log(this.name + " is driving " + vehicleType)
                }
                else {
                    console.log(this.name + "needs a license to drive " + vehicleType)
                }
            }
            }
    }
}
var prabhat = new Person("Prabhat", 40);
var shivanshi = new Person("Shivanshi", 15);

prabhat.teachDrive("car");
console.log(prabhat.license);
prabhat.drive("car");
prabhat.drive("truck");