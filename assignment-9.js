function buttonOne() {
    alert("You clicked my button! Hello World!");
}

function buttonTwo() {
  alert("You clicked my button now it's red! Hello World!");
  document.getElementById("color").style.color = "red";
}

function buttonThree(gottem) {
  gottem.innerHTML = "GOTTEM";
  alert("GOTTEM! Hello World!");
}
