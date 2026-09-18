// start menu
// let subMenu=document.getElementById("subMenu");
var icon=document.getElementById("icon");
var menu=document.getElementById("menu");
function displayMenu(){
    icon.style.display="none";
    menu.style.display="block";
}
function displayIcon(){
    icon.style.display="block";
    menu.style.display="none";
}
function displayIcon1(){
    icon.style.display="block";
    menu.style.display="none";
}
function displayIcon2(){
    icon.style.display="block";
    menu.style.display="none";
}
function displayIcon3(){
    icon.style.display="block";
    menu.style.display="none";
}
function displayIcon4(){
    icon.style.display="block";
    menu.style.display="none";
}
// end menu
// start toggle //
const btn1=document.getElementById("btn");
// const login1=document.getElementById("logIn");
const body=document.getElementById("bodyColor")
// const container=document.getElementById("container");

function light(){//default position
    // login1.style.left="50px";//replacement,also add and assign
    btn1.style.left="0";
     body.style.background="#2a5298";
    // container.style.background="black";
}
function dark(){
    // login.style.left="-400px";
    btn1.style.left="55px";
    body.style.background="rgba(0, 0, 139, 0.898)"
    // container.style.background="lightblue";
}
// end toggle //
// start tutorial video
var popup_video=document.getElementById("popup-video");
var closeVideo=document.getElementById("close");
function showTutorialVideo(){
    popup_video.style.display="block";
}
closeVideo.onclick=()=>popup_video.style.display="none";
// end tutorial video
//start favorite
var popup_video2=document.getElementById("popup-video2");
var closeVideo2=document.getElementById("close2");
function showTutorialVideo2(){
    popup_video2.style.display="block";
}
closeVideo2.onclick=()=>popup_video2.style.display="none";
// var popup_video3=document.getElementById("popup-video3");
// var closeVideo3=document.getElementById("close3");
// function showTutorialVideo3(){
//     popup_video3.style.display="block";
// }
// closeVideo3.onclick=()=>popup_video3.style.display="none";
//end favorite
//start add1
var choose1=document.getElementById("choose1");
var add1=document.getElementById("add1");
function addToFav1(){
    let chooseImg=choose1.getAttribute('src');
    add1.src=chooseImg;
    popup_video2.style.display="none";
}
var choose2=document.getElementById("choose2");
function addToFav2(){
    let chooseImg=choose2.getAttribute('src');
    add1.src=chooseImg;
    popup_video2.style.display="none";
}
var choose3=document.getElementById("choose3");
function addToFav3(){
    let chooseImg=choose3.getAttribute('src');
    add1.src=chooseImg;
    popup_video2.style.display="none";
}
var choose4=document.getElementById("choose4");
function addToFav4(){
    let chooseImg=choose4.getAttribute('src');
    add1.src=chooseImg;
    popup_video2.style.display="none";
}
var choose5=document.getElementById("choose5");
function addToFav5(){
    let chooseImg=choose5.getAttribute('src');
    add1.src=chooseImg;
    popup_video2.style.display="none";
}
var choose6=document.getElementById("choose6");
function addToFav6(){
    let chooseImg=choose6.getAttribute('src');
    add1.src=chooseImg;
    popup_video2.style.display="none";
}
var choose7=document.getElementById("choose7");
function addToFav7(){
    let chooseImg=choose7.getAttribute('src');
    add1.src=chooseImg;
    popup_video2.style.display="none";
}
var choose8=document.getElementById("choose8");
function addToFav8(){
    let chooseImg=choose8.getAttribute('src');
    add1.src=chooseImg;
    popup_video2.style.display="none";
}
var choose9=document.getElementById("choose9");
function addToFav9(){
    let chooseImg=choose9.getAttribute('src');
    add1.src=chooseImg;
    popup_video2.style.display="none";
}
var choose10=document.getElementById("choose10");
function addToFav10(){
    let chooseImg=choose10.getAttribute('src');
    add1.src=chooseImg;
    popup_video2.style.display="none";
}
var choose11=document.getElementById("choose11");
function addToFav11(){
    let chooseImg=choose11.getAttribute('src');
    add1.src=chooseImg;
    popup_video2.style.display="none";
}
var choose12=document.getElementById("choose12");
function addToFav12(){
    let chooseImg=choose12.getAttribute('src');
    add1.src=chooseImg;
    popup_video2.style.display="none";
}
var choose13=document.getElementById("choose13");
function addToFav13(){
    let chooseImg=choose13.getAttribute('src');
    add1.src=chooseImg;
    popup_video2.style.display="none";
}
var choose14=document.getElementById("choose14");
function addToFav14(){
    let chooseImg=choose14.getAttribute('src');
    add1.src=chooseImg;
    popup_video2.style.display="none";
}
//start 
// strat home
var counter=2;
setInterval(function(){
    document.getElementById('radio'+counter).checked=true;
    counter++;
    if(counter>4){
        counter=1;
    }
},5000);

// end home
// start login
const btn=document.getElementById("btn1");
const login=document.getElementById("logIn1");
const Register=document.getElementById("Register");
// const container=document.getElementById("container");

function logIn(){//default position
    login.style.left="50px";//replacement,also add and assign
    Register.style.left="450px";
     btn.style.left="0";
    // container.style.background="black";
}
function register(){
    login.style.left="-400px";
    Register.style.left="50px";
    btn.style.left="110px"
    // container.style.background="lightblue";
}
const passwordBox=document.getElementById("password-box");
const hide1=document.getElementById("hide1");
const hide2=document.getElementById("hide2");
const passwordBox1=document.getElementById("password-box1");
const hide3=document.getElementById("hide3");
const hide4=document.getElementById("hide4");
function toggle(){
    if(passwordBox.type=="password"){
        passwordBox.type="text";
        hide1.style.display="block";
        hide2.style.display="none";
    }
    else{
        passwordBox.type="password";
        hide1.style.display="none";
        hide2.style.display="block";
    }
}
function toggle1(){
    if(passwordBox1.type=="password"){
        passwordBox1.type="text";
        hide3.style.display="block";
        hide4.style.display="none";
    }
    else{
        passwordBox1.type="password";
        hide3.style.display="none";
        hide4.style.display="block";
    }
}
// end login
//start popup video
// var video_container=document.querySelectorAll('.video-container video');
// var video=document.querySelector('.popup-video');
// var popup_container=document.querySelector('.popup-video video');
// var close_vid=document.querySelector('.popup-video span');
// video_container.forEach(vid => {
//     vid.onclick=()=>{
//     video.style.display="block";
//     popup_container.src=vid.getAttribute('src');
//     }
// });
// close_vid.onclick=()=>{
//     video.style.display="none";
// }
//end popup video