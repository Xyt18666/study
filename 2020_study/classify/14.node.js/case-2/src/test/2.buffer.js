let fs = require("fs");
fs.readFile("../json/1.json", (er, d) => {
    if (er) {
        return console.log(er);
    } else {
        return console.log(d);//buffer对象
    }
}); 
