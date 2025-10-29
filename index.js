setInterval(myFun, 1000);

function myFun() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  let ms = date.toLocaleDateString();
  document.getElementById("time").innerHTML = time;
  document.querySelector("");
}





