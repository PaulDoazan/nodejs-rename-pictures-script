// https://dev.to/emkay860/read-and-rename-all-files-in-a-directory-with-nodejs-2dfo

const fs = require("fs");
const path = require("path");

const folderPath = "./assets";


// read all files in the directory
let filesArr = fs.readdirSync(folderPath);

// Loop through array and rename all files 

filesArr.forEach((file, index) => {
  let fullPath = path.join(folderPath, file);
  let fileExtension = path.extname(file);
  let fileName = path.basename(file, fileExtension);

  let newFileName = "juillet_" + index + "." + fileExtension;

  console.log(fileName)
try {
  fs.renameSync(fullPath, path.join(folderPath, newFileName));
} catch (error) {
  console.error(error)
}
});