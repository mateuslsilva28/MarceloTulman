window.addEventListener("load", ()=>{
    var carousel = document.getElementsByClassName("banner")[0]
    var left = document.getElementsByClassName("fa-arrow-left")[0]
    var right = document.getElementsByClassName("fa-arrow-right")[0]
    var qtdImg = 2;
    var cont = 1    
    right.addEventListener("click", ()=>{
        cont++
        if(cont > qtdImg)cont=1
<<<<<<< HEAD
        carousel.style=`background-image: url("../img/carousel/slide-${cont}.webp")`
=======
        carousel.style=`background-image: url("../img/slide-${cont}.webp")`
>>>>>>> cfeec0bce09bad6bb4144085092f145f7341898e
    })
    left.addEventListener("click", ()=>{
        cont--
        if(cont < 1)cont = 2
<<<<<<< HEAD
        carousel.style=`background-image: url("../img/carousel/slide-${cont}.webp")`
=======
        carousel.style=`background-image: url("../img/slide-${cont}.webp")`
>>>>>>> cfeec0bce09bad6bb4144085092f145f7341898e
    })
})