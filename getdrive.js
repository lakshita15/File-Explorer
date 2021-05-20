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
  console.log("hi");
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
    let template = document.querySelector(".template");
    template.innerHTML += `<div class="card" 
     style="
     height: 12vw;
     width: 18vw;
     background-color: #102343;
     font-style: oblique;
     opacity: 0.8;
     border-radius: 10%;
     padding: 1vw;
     box-shadow: 2px 0px 22px 3px #102343;
     border: 3px solid #282caa;
     ">
           
            <div class="card-body">
                <h2 class="card-title" style="height: 3rem;color: #98c1d9;padding: 1vw;">
                ${disk.mounted}
                </h2>
            </div>
            
        <div class="progress-bar">
              <div class="percentage"></div>
          </div>
          <div class="info" style="
          display: flex;
          font-size: 1.3vw;
          color: #98c1d9;
          margin-top: 1vw;
          justify-content: space-between;
      ">
              <div class="size">${driveSize} GB</div>
              <div class="file">${width}%</div>
          </div>
         
     </div>`;

    let percentage = template.querySelector(".percentage");
    percentage.style.width = `${width}%`;

    // console.log(template)
  }
}

getDrive();
