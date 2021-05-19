const view = require("./view");
let sign = window.prompt('Are you feeling lucky');

//joining path of directory 
function getfiles(){
    
    const directoryPath = path.join("./../../../Downloads", 'organized_files');
    //passsing directoryPath and callback function
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        console.log(files)
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            // console.log(file);
            let getallfiles = document.querySelector(".getfolders")
            getallfiles.innerHTML+=`<div class="folderss" 
            style="
                width: 19vw;
                style="height: 3rem;color: white;"
                
                font-style: oblique;
                padding-left: 2vw;
                border-radius: 19%;">
            <i class  = "fas fa-folder"style="font-size: 6vw;color: #98c1d9;"></i>
            <div class="folder-body">
                <li class="folder-title" style="height: 4rem; list-style:none; color: #98c1d9 ;
               ">
                ${file}
                </li>
            </div>
            
        
         
     </div>`
           
            
        });
        let hide = document.querySelector(".fa-caret-up")
         hide.addEventListener("click", function(){
        
        let files = document.querySelector(".getfolders");
      
        files.classList.add("active")
        if(files.style.display=== "none"){
            files.style.display= "flex";
        }else{
            files.style.display= "none";
        }
    })

    
    });
}
getfiles();
