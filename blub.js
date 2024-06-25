
var state = false;
function change(img1, img2 , id) {
    console.log('change() function called');
    var pic;
    if (state === false) {
        pic = img1;
    } else {
        pic = img2;
    }
    document.getElementById(id).src = pic;
    state = !state;
  
}
function openTab(tabName) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }