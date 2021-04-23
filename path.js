// in node.js we import like that
// const React = require("react");

const path = require("path");
// const printSomething = require("./async");

console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.dirname(__dirname));

// printSomething();

console.log(
  path.join("/nodejs_intro_basics_filesystemapi", "/paths", "/index.js")
);

console.log(path.extname("index.html"));
console.log(path.extname(__filename));
