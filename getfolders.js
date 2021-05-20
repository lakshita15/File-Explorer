let hide = document.querySelector(".fa-caret-up");
hide.addEventListener("click", function () {
  let files = document.querySelector(".getfolders");

  files.classList.add("active");
  if (files.style.display === "none") {
    files.style.display = "grid";
  } else {
    files.style.display = "none";
  }
});

getfiles();
