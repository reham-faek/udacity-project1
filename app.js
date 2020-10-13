// sticky navbar
window.addEventListener("scroll",function(){
    const header = document.querySelector(".header");
    header.classList.toggle("sticky",window.scrollY>600);
})
// 
window.onscroll = function(){ 
    const nav = document.getElementById("header");  
    const divHome = document.getElementById("home");
    const divAbout = document.getElementById("about");
    const divTeam = document.getElementById("team");
    const divContact = document.getElementById("contact");
    const links = document.getElementsByTagName("a");
    if(scrollY >= 0){
        nav.classList.add("header");
    }else{
        nav.classList.remove("header");
    }
    
    for(let link of links){
        link.classList.remove("active");
        link.addEventListener("click",function(){
            window.scrollTo(0,link.length);
    })
    }
    if(scrollY >=divContact.offsetTop ){
        links[4].classList.add("active");
    }else if(scrollY >= divTeam.offsetTop){
        links[3].classList.add("active");
    }else if(scrollY >= divAbout.offsetTop){
        links[2].classList.add("active");
    }else if(scrollY >= divHome.offsetTop){
        links[1].classList.add("active");
    }else{
        links[0].classList.add("active");
    }
    
   
    

}


