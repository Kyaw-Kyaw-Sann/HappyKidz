//start nav bar
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
//end nav bar

var percent=document.querySelector('.percent');
var progess=document.querySelector('.progress');
var text=document.querySelector('.text');
//start two big div
var load=document.querySelector('.loading');
var videoGallery=document.querySelector('.videoGallery');

//end two big div
var count=0;//these are initial position
var per= 0;
var loading=setInterval(animate,5);//loop time taken for once
function animate(){
    if(count==100 && per==400){//this condition is very important
        // percent.classList.add('text-blink');
        // text.classList.add("changeDisplay");
        load.style.display="none";
        videoGallery.style.display="block";
        clearInterval(loading);
    }else{
        per=per+4;//slow or fast
        count=count+1;//slow or fast
        progess.style.width=per+'px';
        percent.textContent=count+"%";
    }
}
//start display control
const all=document.querySelector("#all")
const cartoons=document.querySelector("#cartoon");
const songs=document.querySelector("#songs");
function All(){
    all.style.display="block";
   cartoons.style.display="none";
    songs.style.display="none";
}
function Cartoons(){
    all.style.display="none";
   cartoons.style.display="block";
    songs.style.display="none";
}
function Songs(){
    all.style.display="none";
   cartoons.style.display="none";
    songs.style.display="block";
}
//end display control
//starat vid-list
let listVideo=document.querySelectorAll(".vid");
let mainVideo=document.querySelector('.main-video video');
let title=document.querySelector('.main-video .tttle');
listVideo.forEach(video =>{ //video has two child nodes(just normal syntax for queryselectorAll() method)
    video.onclick=()=>{//this line also normal syntax for queryselectorAll() method)
        listVideo.forEach(vid=>
        vid.classList.remove('active'));//delete default choice
        video.classList.add('active');//no allow concurrent remove and add for only one variable
        if(video.classList.contains('active')){
            let src=video.children[0].getAttribute('src');
            mainVideo.src=src;
            let text=video.children[1].innerHTML;
            title.innerHTML=text;
        }
    };
});
//end video-list