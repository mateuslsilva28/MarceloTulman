window.addEventListener("load", ()=>{
    var toggle = document.getElementsByClassName("toggle")[0];
    var menu = document.getElementsByClassName("menu")[0];   
    var dropdown = document.getElementsByClassName("dropdown");
    var menuDropdown = document.getElementsByClassName("menu-dropdown");
    var arrow = document.getElementsByClassName("arrow");
    var isActive = false;
    var isDropdownActive = [false, false, false]
    window.addEventListener("resize", ()=>resize());
    toggle.addEventListener("click", ()=>{
        if(isActive == false){
            toggle.setAttribute("class", "toggle fas fa-times fa-2x")
            menu.classList.add("show-top")
            isActive = true;
            window.addEventListener("resize", ()=>resize());            
        }
        else{
            mode_default()
            window.addEventListener("resize", ()=>resize());
        }
    })
    for (const iterator of dropdown) {
        iterator.addEventListener("click", ()=>{
            console.log("mobile")
            switch (iterator) {
                case dropdown[0]:
                    verificar(0)
                    break;
                case dropdown[1]:
                    verificar(1)
                    break;
                case dropdown[2]:
                    verificar(2)
                    break;
            }
        })
    }
    function mode_default (){
        toggle.setAttribute("class", "toggle fas fa-bars fa-2x")
        menu.classList.remove("show-top")
        for (let index = 0; index < dropdown.length; index++) {
            menuDropdown[index].classList.add("hide")
            isDropdownActive[index] = false
            arrow[index].setAttribute("class", "arrow fas fa-arrow-down")
        }
        isActive = false;
    }
    function resize (){
        width = window.innerWidth;
        if(width <=767){
            mode_default();
        }
    }
    function verificar (id){
        if (isDropdownActive[id] == false){
            menuDropdown[id].classList.remove("hide")
            arrow[id].setAttribute("class", "arrow fas fa-arrow-up");
            isDropdownActive[id] = true
        }
        else{
            menuDropdown[id].classList.add("hide")
            arrow[id].setAttribute("class", "arrow fas fa-arrow-down");
            isDropdownActive[id] = false
        }
    }
})