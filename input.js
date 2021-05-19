let Ibox = document.querySelector(".address-search-input");
Ibox.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    let ip = Ibox.value
    if(ip==""){
      alert("Enter A valid Path")
    }
    let dij = isFilorNot(Ibox.value);
   
    if (dij == true) {
      console.log(dij);
    } else {
        
        let child = getContent(Ibox.value);
      let folderDiv = document.querySelector(".getfolders");
      folderDiv.innerHTML = "";
      child.forEach((x) => {
        let name = x;
        x = Ibox.value + "\\" + x;
        
        if (!isFilorNot(x)) {
          folderDiv.innerHTML += ` <div class="folderss" 
              style="
                  width: 19vw;
                  style="height: 3rem;color: white;"
                  
                  font-style: oblique;
                  
                  border-radius: 19%;">
              <img src = "folder.png"style="
              width: 8vw;
              
          " ></img>
              <div class="folder-body">
                  <li class="folder-title" style="height: 4rem; list-style:none; color: black;
                  margin-left: 3vw">
                  ${name}
                  </li>
              </div>
              
          
           
       </div>`;
        }
      });

      let folderss = document.querySelectorAll(".folderss");
      folderss.forEach((x) => {
        x.addEventListener("click", function () {
            let val = x.querySelector("li").innerHTML.trim();
          let path = Ibox.value + "\\" + val;
          Ibox.value = path;
          showFOlderss();
        });
      });
    }
  }
});

let submitBtn = document.querySelector('.fa-arrow-right');
submitBtn.addEventListener("click",showFOlderss)
function showFOlderss(){
        let dij = isFilorNot(Ibox.value);
        if (dij == true) {
          console.log(dij);
        } else {
       
          let child = getContent(Ibox.value);
          let folderDiv = document.querySelector(".getfolders");
          folderDiv.innerHTML = ""; //remove prev content
          child.forEach((x) => {
            let name = x;
            x = Ibox.value + "\\" + x;
            //   console.log(isFilorNot(x),x,".........")
            if (!isFilorNot(x)) {
              folderDiv.innerHTML += ` <div class="folderss" 
                  style="
                      width: 19vw;
                      style="height: 3rem;color: white;"
                      
                      font-style: oblique;
                      
                      border-radius: 19%;">
                  <img src = "folder.png"style="
                  width: 8vw;
                  
              " ></img>
                  <div class="folder-body">
                      <li class="folder-title" style="height: 4rem; list-style:none; color: black;
                      margin-left: 3vw">
                      ${name}
                      </li>
                  </div>
                  
              
               
           </div>`;
            }
          });
    
          let folderss = document.querySelectorAll(".folderss");
          folderss.forEach((x) => {
            x.addEventListener("click", function () {
                let val = x.querySelector("li").innerHTML.trim();
              let path = Ibox.value + "\\" + val;
              Ibox.value = path;
              showFOlderss();
            });
          });
        }
      
}
