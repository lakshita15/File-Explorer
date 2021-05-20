let arr = [];

function view(dirpath, mode) {
  if (mode == "tree") {
    // console.log("Tree working")
    viewTree(dirpath, "");
  } else if (mode == "flat") {
    viewFlat(dirpath);
    // console.log("Flat working")
  } else {
    console.log("Wrong mode");
  }
}
                                          // check if the given file exists or not //     
                                          //lstatSync is used to get the extension of the file                                                                           
function isFilorNot(dirpath) {
  // check extension
  return fs.lstatSync(dirpath).isFile();
}
                                                     //Get Content of directory and push it in array//                                                                   
function getContent(dirpath) {
  let filesss = fs.readdirSync(dirpath);
  for (let i in filesss) {
    console.log(arr.push(i));
  }
  return filesss;
} 
                                                 
function viewFlat(dirpath) {
  let isFile = isFilorNot(dirpath);
  if (isFile == true) {
    console.log(dirpath + "*");
  } else {
    console.log(dirpath);
    // recursion
    let content = getContent(dirpath);
    // console.log(content);
    for (let i in content) {
      let childPath = p.join(dirpath, content[i]); //path.join a method in node.js join specified path segments into one path.
      viewFlat(childPath);
    }
  }
}
function viewTree(dirpath, indent) {
  let isFile = isFilorNot(dirpath);
  if (isFile == true) {
  
    console.log(indent, p.basename(dirpath) + "*"); // it return last portion of path 
  } else {
  
    console.log(indent, p.basename(dirpath));
    // recursion
    let content = getContent(dirpath);
    // console.log(content);
    for (let i = 0; i < content.length; i++) {
      
      let childPath = p.join(dirpath, content[i]);
     
      viewTree(childPath, indent + "\t");
    }
  }
}
module.exports = {
  viewFun: view,
};
