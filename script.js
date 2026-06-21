let currentPage = 0;

/* NAVIGATION */
function showPage(index){
let pages = document.querySelectorAll(".page, .screen");

pages.forEach(p => p.classList.remove("active"));

if(pages[index]){
pages[index].classList.add("active");
}
}

function nextPage(){
currentPage++;
showPage(currentPage);
}

/* PASSWORD */
function check(){
let pass = document.getElementById("pass").value;

if(pass === "2506"){
document.getElementById("lock").classList.remove("active");
startIntro();
}else{
document.getElementById("error").innerText = "Wrong code.";
}
}

/* INTRO */
function startIntro(){
let introText = "A message is loading...";
let i = 0;

document.getElementById("intro").classList.add("active");

let type = document.getElementById("type");

let t = setInterval(()=>{
type.innerText += introText[i];
i++;

if(i >= introText.length){
clearInterval(t);
setTimeout(()=>nextPage(), 1500);
}
},80);
}

/* STRICT */
function setStrict(level){

let msgs = [
"",
"Mild… I don’t believe this.",
"Strict… accurate.",
"Very strict… very accurate.",
"Government level confirmed."
];

document.getElementById("strictResult").innerText = msgs[level];
}

/* MEMORY */
function mem(i){

let m = [
"You taught me discipline even when I resisted.",
"I understand your sacrifices more now.",
"We argue… but I remember everything.",
"You are stronger than you realize."
];

document.getElementById("memText").innerText = m[i];
}

/* HEART */
function heart(){

let h = [
"I see you now.",
"I understand more than before.",
"Thank you for everything.",
"I love you."
];

document.getElementById("heartText").innerText =
h[Math.floor(Math.random()*h.length)];
}

/* ENVELOPE */
function openLetter(){
document.getElementById("letter").classList.remove("hidden");
}
