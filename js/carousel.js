window.addEventListener("load", ()=>{
    var carousel = document.getElementsByClassName("banner")[0]
    var left = document.getElementsByClassName("fa-arrow-left")[0]
    var right = document.getElementsByClassName("fa-arrow-right")[0]
    var qtdImg = 2;
    var cont = 1    
    right.addEventListener("click", ()=>{
        cont++
        if(cont > qtdImg)cont=1
        carousel.style=`background-image: url("../img/carousel/slide-${cont}.webp")`
    })
    left.addEventListener("click", ()=>{
        cont--
        if(cont < 1)cont = 2
        carousel.style=`background-image: url("../img/carousel/slide-${cont}.webp")`
    })
})