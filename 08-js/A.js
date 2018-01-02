function Person (name, age) {
    this.name = name;
    this.age = age;
}

var a = new Person ('johnson', 35)
console.log(a.name, a.age)