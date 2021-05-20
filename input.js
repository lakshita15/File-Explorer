let Ibox = document.querySelector(".address-search-input");
Ibox.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    let ip = Ibox.value;
    if (ip == "") {
      alert("Enter A valid Path");
    }
    let dij = isFilorNot(Ibox.value);

    if (dij == true) {
      let child = getContent(Ibox.value);
      console.log(child);
      console.log(dij);
    } else {
      // console.log('............................',Ibox.value)
      let child = getContent(Ibox.value);
      // console.log(child)
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
                  <i class  = "fas fa-folder"style="background-color: #90c3e100;color: #102343f0;box-shadow: 3px 3px 5px #102343;padding: 2vw;"></i>
              <div class="folder-body">
                  <li class="folder-title" style="
                  min-height: 5rem;
                  max-height: 10rem;
                  list-style:none;
                  color: #102343;
                  ">
                  ${name}
                  </li>
              </div>
              
          
           
       </div>`;
        } else {
          folderDiv.innerHTML += ` <div class="folderss" 
          style="
              width: 19vw;
              style="height: 3rem;color: white;"
              
              font-style: oblique;
              
              border-radius: 19%;">
              <i class  = "fas fa-folder"style="background-color: #90c3e100;color: #102343f0;box-shadow: 3px 3px 5px #102343;padding: 2vw;"></i>
          <div class="folder-body">
              <li class="folder-title" style="
              min-height: 5rem;
              max-height: 10rem;
              list-style:none;
              color: #102343;
              ">
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

let submitBtn = document.querySelector(".fa-arrow-right");
submitBtn.addEventListener("click", showFOlderss);
function showFOlderss() {
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
                  <i class  = "fas fa-folder"style="background-color: #90c3e100;color: #102343f0;box-shadow: 3px 3px 5px #102343;padding: 2vw;"></i>
                  <div class="folder-body">
                      <li class="folder-title" style="
                      min-height: 5rem;
                      max-height: 10rem;
                      list-style:none;
                      color: #102343;
                      ">
                      ${name}
                      </li>
                  </div>
                  
              
               
           </div>`;
      } else {
        folderDiv.innerHTML += ` <div class="folderss" 
              style="
                  width: 19vw;
                  style="height: 3rem;color: white;"
                  
                  font-style: oblique;
                  
                  border-radius: 19%;">
                  <i class  = "fas fa-folder"style="background-color: #90c3e100;color: #102343f0;box-shadow: 3px 3px 5px #102343;padding: 2vw;"></i>
              <div class="folder-body">
                  <li class="folder-title" style="
                  min-height: 5rem;
                  max-height: 10rem;
                  list-style:none;
                  color: #102343;
                  ">
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

let backbtn = document.querySelector(".fa-arrow-left");
backbtn.addEventListener("click", function () {
  let string = Ibox.value;
  let substring = string.slice(0, string.lastIndexOf("\\"));
  // console.log(substring)
  Ibox.value = "";

  string = substring;

  Ibox.value = string;
});
