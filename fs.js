const path = require("path");
const fs = require("fs");

const rootFolder = path.join(__dirname, "test");

// // to create folder
// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) {
//     return console.log("Something unexpected happened!!!");
//   }
//   console.log("Folder Created!!!");
// });

// // to write
// fs.writeFile(
//   path.join(rootFolder, "index.js"),
//   "console.log('hello from index.js')",
//   (err) => {
//     if (err) {
//       return console.log("Something unexpected happened!!!");
//     }
//     console.log("File Created!!!");
//   }
// );

// //to read
// fs.readFile(path.join(rootFolder, "index.js"), "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return console.log("Something unexpected happened!!!");
//   }
//   console.log(data);
// });

// // to unlink / to remove file
// fs.unlink(path.join(rootFolder, "index.js"), (err) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("File removed");
// });

// // to remove folder
// fs.rmdir(rootFolder, (err) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("Folder removed");
// });

// read and show directory
fs.readdir(__dirname, "utf-8", (err, files) => {
  console.log(files);
});
