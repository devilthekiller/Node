const { readFile } = require("fs")
console.log("first task");

readFile('./1-names.js', 'utf-8', (err, res) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(res);
console.log("Completed task 1");

})
console.log("starting next task");

















