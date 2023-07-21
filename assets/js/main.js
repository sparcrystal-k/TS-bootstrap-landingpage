const leftSideBar = document.getElementById("leftSideBar");
const mainContent = document.getElementById("mainContent");
function hiddenSideBar() {
  leftSideBar.classList.add("fade-out");
  setTimeout(() => {
    leftSideBar.classList.remove("fade-out");
    leftSideBar.style.display = "none";
  }, 200);
  leftSideBar.style.width = "0px";
  mainContent.className = "content text-center col-12";
}
function showSideBar() {
  leftSideBar.classList.add("fade-in");
  leftSideBar.style.display = "block";
  mainContent.className =
    "content text-center col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8";

  // setTimeout(() => {
  //   leftSideBar.classList.remove("fade-in");
  // }, 100);
}
