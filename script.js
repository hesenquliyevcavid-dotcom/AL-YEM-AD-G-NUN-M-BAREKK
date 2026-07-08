// =======================
// Musiqi
// =======================

const music = document.getElementById("music");

function playMusic(){

music.currentTime = 84;

music.volume = 0.2;

music.play();

let fade = setInterval(()=>{

if(music.volume < 1){

music.volume += 0.05;

}else{

clearInterval(fade);

}

},300);

}


// =======================
// Loader
// =======================

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},4000);


// =======================
// Gün Sayğacı
// =======================

const targetDate = new Date("June 17, 2026 00:00:00").getTime();

function updateCounter(){

const now = new Date().getTime();

let distance = now-targetDate;

if(distance<0){

distance=Math.abs(distance);

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=String(hours).padStart(2,"0");

document.getElementById("minutes").innerHTML=String(minutes).padStart(2,"0");

document.getElementById("seconds").innerHTML=String(seconds).padStart(2,"0");

}

setInterval(updateCounter,1000);

updateCounter();


// =======================
// Hədiyyə
// =======================

function openGift(){

document.getElementById("finalMessage").style.display="block";

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

}
// =======================
// ❤️ Uçan Ürəklər
// =======================

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-50px";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.opacity=Math.random();

heart.style.zIndex="999";

heart.style.pointerEvents="none";

heart.style.transition="all 8s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="110vh";

heart.style.transform="rotate("+(Math.random()*360)+"deg)";

},100);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,350);


// =======================
// 🌹 Gül Ləçəkləri
// =======================

function createPetal(){

const petal=document.createElement("div");

petal.innerHTML="🌹";

petal.style.position="fixed";

petal.style.left=Math.random()*100+"vw";

petal.style.top="-40px";

petal.style.fontSize=(18+Math.random()*18)+"px";

petal.style.pointerEvents="none";

petal.style.transition="10s linear";

petal.style.zIndex="998";

document.body.appendChild(petal);

setTimeout(()=>{

petal.style.top="110vh";

petal.style.transform="rotate(720deg)";

},100);

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(createPetal,1200);


// =======================
// 🎁 Konfeti
// =======================

function confetti(){

for(let i=0;i<120;i++){

const c=document.createElement("div");

c.innerHTML=["🎉","✨","💖","💝"][Math.floor(Math.random()*4)];

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize=(15+Math.random()*20)+"px";

c.style.pointerEvents="none";

c.style.transition="6s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.top="110vh";

c.style.transform="rotate(1080deg)";

},100);

setTimeout(()=>{

c.remove();

},6000);

}

}


// =======================
// 🎁 Hədiyyə Açılanda
// =======================

const oldGift=openGift;

openGift=function(){

oldGift();

confetti();

};