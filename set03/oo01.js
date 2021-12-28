var p = {name:"aish"}

// var x = new p();
// console.log(x.name);    

p.show = function aa() {
    console.log(this.name);
}
p.show();


