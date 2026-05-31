const reveals=document.querySelectorAll(".reveal");
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting)entry.target.classList.add("show");
});
},{threshold:.18});

reveals.forEach(el=>observer.observe(el));

document.addEventListener("mousemove",e=>{
const glow=document.querySelector(".glow");
glow.style.left=e.clientX-210+"px";
glow.style.top=e.clientY-210+"px";
});

function initYouTubeTrailer(){
const wrapper=document.getElementById("youtube-trailer");
if(!wrapper)return;
const videoId=wrapper.dataset.videoId;
const canSendReferrer=location.protocol==="http:"||location.protocol==="https:";
if(!canSendReferrer)return;
const params=new URLSearchParams({
rel:"0",
playsinline:"1",
enablejsapi:"1",
origin:location.origin,
widget_referrer:location.href
});
const iframe=document.createElement("iframe");
iframe.width="560";
iframe.height="315";
iframe.src=`https://www.youtube.com/embed/${videoId}?${params.toString()}`;
iframe.title="Official trailer on YouTube";
iframe.frameBorder="0";
iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
iframe.referrerPolicy="strict-origin-when-cross-origin";
iframe.allowFullscreen=true;
iframe.loading="eager";
wrapper.classList.add("has-embed");
wrapper.appendChild(iframe);
}

initYouTubeTrailer();
