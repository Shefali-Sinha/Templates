$(document).ready(function () {
  if (localStorage.getItem("userChoice") != null) {
    changeTheme(localStorage.getItem("userChoice"));
  }
});

function applyTheme(event) {
  var color = $(event.target).val();
  localStorage.setItem("userChoice", color);
  changeTheme(color);
}

function changeTheme(color) {
  $("body").css("background-color", color);
}

function applyFontSize(event) {
  var fontSize = $(event.target).val();
  localStorage.setItem("userFontChoice", fontSize);
  changeFontSize(fontSize);
}

function changeFontSize(fontSize) {
  $(".fontsize-content").css("font-size", fontSize);
}

function applyFontFamily(event) {
  var fontFamily = $(event.target).val();
  changeFontFamily(fontFamily);
}

function changeFontFamily(fontFamily) {
  $(".fontsize-content").css("font-family", fontFamily);
}


const accordion = document.querySelectorAll(".content-box");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}