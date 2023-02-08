//basic node console
// console.log("Hello Node")

//path
const path = require("path");
// dirname
// console.log('Folder name: ', path.dirname(__filename))

// filename
// console.log('File name: ', path.basename(__filename))

// extension name
// console.log('File name: ', path.extname(__filename))

// object with current file name,direname etc,
// console.log('File name: ', path.parse(__filename))

//joining folders/files
// console.log(path.join(__dirname,"test","test.js"))

//file system
const fs = require("fs");
//make a directory
// fs.mkdir(path.join(__dirname,"test-folder"),(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("directory created..")
//     }
// });

//make a file in directory
// fs.writeFile(
//   path.join(__dirname, "test-folder", "testfile.txt"),
//   "Created test txt",
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Created file");
//     }
//   }
// );

// the write file method if recalled will not create the same file but it will replace the data to the given data so we have to append the data by using append method
// fs.writeFile(
//     path.join(__dirname, "test-folder", "testfile.txt"),
//     "Created test txt",
//     (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         fs.appendFile(path.join(__dirname, "test-folder", "testfile.txt"),", New data in txt file",(err)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log("Data added....")
//             }

//         })
//       }
//     }
//   );

//reading the file by two methods
// 1st
// fs.readFile(
//   path.join(__dirname, "test-folder", "testfile.txt"),
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       //this will return the file data in buffer(Buffer refers to the particular memory location in memory)
//       //so we have to convert the buffer into string by these methods

//       //1st: we will store the data in a variable by taking the buffer from value
//       const content = Buffer.from(data); //output <Buffer 43 72 65 61 74 65 64 >
//       //2nd: we will convert it into string
//       console.log(content.toString()); //output the file data/innner text
//     }
//   }
// );

// 2nd
//by simply defining the unicode in the start
// fs.readFile(
//   path.join(__dirname, "test-folder", "testfile.txt"),
//   "utf-8", //unicode
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   }
// );

//File Status
// fs.stat("./test-folder/testfile.txt",(err,stats)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(stats)
//     }
// })

// copy of file
// fs.copyFile("./test-folder/testfile.txt", "./test-folder/copy.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     const data = fs.readFileSync("./test-folder/copy.txt","utf-8");
//     console.log(data);
//   }
// });

//delete file
// fs.unlink("./test-folder/copy.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

//OS
const os = require("os");
//os type
// console.log("OS:",os.type())

//os platform
// console.log("OS:",os.platform())

// //CPU ARCHITECTURE
// console.log("OS:",os.arch())

// //CPU DETAILS
// console.log("OS:",os.cpus())

//FREE MEMORY
// console.log("OS:",os.freemem())

//TOTAL MEMORY
// console.log("OS:",os.totalmem())

//UPTIME
// console.log("OS:",os.uptime())

// server
const http = require("http");
//broweser info detect broweser npm module
const { detect } = require("detect-browser");
const browser = detect();
//creating server logs
const myServer = http.createServer((req, res) => {
  console.log("Request Recieved");
  const log = ` 
    date: ${new Date()},
    osType: ${os.type()},
    browserInfo:${JSON.stringify(browser)}
    url: ${req.url},
    
  `;
  if (req.url === "/favicon.ico") {
    return res.end();
  }
  fs.appendFile("logs.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;
      case "/contact":
        res.end("Contact Page");
        break;
      case "/about":
        res.end("About Page");
        break;
      default:
        res.end("404 not found jani");
    }
  });
});
myServer.listen(3000, () => {
  console.log("Server Runnig..");
});
