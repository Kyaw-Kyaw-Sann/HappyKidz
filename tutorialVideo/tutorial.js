var popup_video=document.getElementById("popup-video");
var close=document.getElementById("close");
function showTutorialVideo(){
    popup_video.style.display="block";
}
close.onclick=()=>popup_video.style.display="none";