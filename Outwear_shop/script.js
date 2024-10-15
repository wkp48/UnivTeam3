function hovering(){
  menubar.style.marginTop = "19px";
  this.menubar.style.opacity = 1;
}

const sence = Boolean(false);

function mouse_over(){
	timer = setInterval(hovering,3);
  sence = true;
}

function mouse_out(){
	clearInterval(timer);
  sence = false;
}

var lastScrollTop = 0;
menubar = document.getElementById("menubar");
window.addEventListener("scroll", function(){
var scrollTop = window.scrollY;
if (scrollTop > lastScrollTop){
  if(sence == false){
    menubar.style.marginTop = "-10px";
    this.menubar.style.opacity = 0;
  }
}else{
    menubar.style.marginTop = "19px";
    setTimeout(function() {
      this.menubar.style.opacity = 1;
    }, 100);
}
lastScrollTop = scrollTop;
})