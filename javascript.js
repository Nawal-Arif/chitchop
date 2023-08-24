var picNextBtn = document.querySelector(".pic .next");
var picPrevBtn = document.querySelector(".pic .previous");

var img = document.querySelector(".pic img");
var i=1;
var totalPic=3;
var imgSrc = i+".jpg";

// pic Next button click event//
picNextBtn.addEventListener("click",function(){
    
    if(i==1){
        img.setAttribute("src","1.jpg");
        i=2;
    }else if(i==2){
        img.setAttribute("src","2.jpg");
        i=3;
    }else{
        img.setAttribute("src","3.jpg");
        i=1;
    }
});


// pic Previous button click event//
picPrevBtn.addEventListener("click",function(){
    
    if(i==1){
        img.setAttribute("src","3.jpg");
        i=3;
    }else if(i==3){
        img.setAttribute("src","2.jpg");
        i=2;
    }else{
        img.setAttribute("src","1.jpg");
        i=1;
    }
});



$(".nav_a").on("click",function(){
    $(".nav_a").removeClass("bold");
    $(this).addClass("bold");
    var hash=this.hash;
    $("html").animate({ scrollTop: $(hash).offset().top},900);
});

