//joining path of directory
function getfiles(x) {
  const directoryPath = x || path.join("./../../../Downloads", "downloads");
  //passsing directoryPath and callback function
  fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    //listing all files using forEach
    let allFiles = document.querySelectorAll(".files")
    allFiles.forEach(x=>{
      x.remove();
    })
    files.forEach(function (file) {
      // Do whatever you want to do with the file
      // console.log(file);
      let getallfiles = document.querySelector(".allfiles");
     
      getallfiles.innerHTML += `<div class="file" 
      style="
      display: flex;
      max-height: 10rem;
      min-height: 3vw;
      border-bottom: 3px solid #80808021;
      ">
            
            <div class="file-body">
                <li class="file-title">
                    ${file}
                </li>
            </div>            
     </div>`;
   
    });
    let hide = document.querySelector(".fa-chevron-up")
    hide.addEventListener("click", function(){
        
        let files = document.querySelector(".allfiles");
        files.classList.add("active")
        if(files.style.display=== "none"){
            files.style.display= "block";
        }else{
            files.style.display= "none";
        }
    })

  });
}

getfiles();
