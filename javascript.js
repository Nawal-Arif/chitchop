var picNextBtn = document.querySelector(".pic .next");
var picPrevBtn = document.querySelector(".pic .previous");

var img = document.querySelector(".pic img");
var i=3;
var totalPic=3;
var imgSrc = i+".jpg";

// pic Next button click event//
picNextBtn.addEventListener("click",function(){
    i+=1;
    if(i==totalPic){
        img.setAttribute("src","2.jpg");
        i=2;
    }else if(i==2){
        img.setAttribute("src","1.jpg");
        i=1
    }else{
        img.setAttribute("src","3.jpg");
    }
});


// pic Previous button click event//
picPrevBtn.addEventListener("click",function(){
    i-=1;
    if(i<1){
        img.setAttribute("src",totalPic+".jpg");
        i=totalPic;
    }else{
        img.setAttribute("src",i+".jpg");
    }
});



$(".nav_a").on("click",function(){
    $(".nav_a").removeClass("bold");
    $(this).addClass("bold");
    var hash=this.hash;
    $("html").animate({ scrollTop: $(hash).offset().top},900);
});

