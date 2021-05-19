const nodeDiskInfo = require("node-disk-info");

function getDrive() {
  try {
    const disks = nodeDiskInfo.getDiskInfoSync();
getresults(disks);
    console.log(disks);
  } catch (e) {
    console.error(e);
  }
}
function getresults(disks) {
    console.log("hi")
  let count = 1;
  for (let disk of disks) {
    count++;
    let driveSize = disk.used / (1000 * 1000 * 1000);
    driveSize = "" + driveSize;
    let x = driveSize.split(".");
    driveSize = x[0] + "." + x[1].substring(0, 2);
    let width = disk.used / disk.blocks;
    width = width * 100 + "";
    x = width.split(".");
    width = x[0] + "." + x[1].substring(0, 2);
    let template = document.querySelector(".template")
    template.innerHTML +=
     `<div class="card" 
     style="
     width: 18vw;
     background-color: hsl(235deg 21% 21% / 63%);
     font-style: oblique;
     padding-left: 0.5vw;
     opacity: 0.8;
     border-radius: 10%;
     box-shadow: 7px 4px 9px 2px black;
     /* border: 3px solid #bbf9af; */
     ">
           
            <div class="card-body">
                <h2 class="card-title" style="height: 3rem;color: white;">
                ${disk.mounted}
                </h2>
            </div>
            
        <div class="progress-bar">
              <div class="percentage"></div>
          </div>
          <div class="info" style="
          display: flex;
          justify-content: space-between;
      ">
              <div class="size">${driveSize} GB</div>
              <div class="file">${width}%</div>
          </div>
         
     </div>`;
         
        let percentage = template.querySelector(".percentage");
        percentage.style.width = `${width}%`
       
        // console.log(template)
  }
  
}

getDrive();
