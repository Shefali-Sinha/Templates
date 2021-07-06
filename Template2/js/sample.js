$(document).ready(function () {
    if (localStorage.getItem("userChoice") != null) {
        changeTheme(localStorage.getItem("userChoice"));
    }
    if (localStorage.getItem("userFontChoice") != null) {
        changeFontSize(localStorage.getItem("userFontChoice"));
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
    $("body").style("font-size", fontSize);
}