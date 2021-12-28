var helper = new Object();

helper.isEmpty = function (list) {
    if (list.length == 0) {
        return true;
    }
    else return false;
}

helper.sum = function (list) {
    if (this.isEmpty(list)) {
        return 0;
    }
    else {
        var s = 0
        for (var n of list) {
            s = s + n;
        }
        return s;
    }
}

helper.avg = function (list) {
    return this.sum(list) / list.length;
}

helper.findMin = function (list) {
    var minN = Number.MAX_SAFE_INTEGER;
    for (var n of list) {
        if (n < minN) {
            minN = n
        }
    }
    return minN;
}

var calculator = new Object();

calculator.numberList = [];
calculator.consoleText = "";
calculator.textBox = document.getElementById("number");
calculator.updateConsoleText = function (text) {
    this.consoleText = text;
    document.getElementById("console").innerHTML = this.consoleText;
}
calculator.listText = "";

calculator.updateListText = function () {
    this.listText = "";
    for (var number of this.numberList) {
        this.listText += "<li>" + number + "</li>";
    }
    document.getElementById("numberList").innerHTML = this.listText;
}

calculator.addToList = function () {
    if (!isNaN(this.textBox.value)) {
        this.numberList.push(parseInt(this.textBox.value));
        this.updateListText();
    }
    else {
        this.updateConsoleText("Please enter a number");
    }
}

calculator.add = function () {
    sum = helper.sum(this.numberList);
    this.updateConsoleText("Sum is " + sum);
}

calculator.average = function () {
    avg = helper.avg(this.numberList);
    this.updateConsoleText("Avg is " + avg);
}

calculator.clearDisplay = function () {
    document.getElementById("numberList").innerHTML = "";
    document.getElementById("console").innerHTML = "";
}

calculator.resetCalc = function () {
    this.numberList = [];
    document.getElementById("numberList").innerHTML = "";
    document.getElementById("console").innerHTML = "";
}

calculator.findMin = function () {
    minN = helper.findMin(this.numberList);
    this.updateConsoleText("Min is " + minN);
}

calculator.refreshList = function () {
    this.updateListText();
}
