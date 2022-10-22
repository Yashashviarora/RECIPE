let flag=0;
function control(x){
    flag=flag+x;
    slideshow(flag);
}
slideshow(flag);
function slideshow(nums){
    let slides=document.getElementsByClassName("slide");
    if(nums<0){
        flag=slides.length-1;
        nums=slides.length-1;
    }
    if(nums>(slides.length-1)){
        flag=0;
        nums=0;
    }
    for(let y of slides){
        y.style.display = "none";
    }
   
    slides[nums].style.display="block";
    console.log(slides.length);
}
