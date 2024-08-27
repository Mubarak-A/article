var shareBtn = document.querySelector(".share__icon");
var mobileShareBtn = document.querySelector(".mobileshare__icon");
var activeDesktopImage = document.querySelector(".activedesktop__img");
var subContainer = document.querySelector(".subcontainer");
var wrapperFooter = document.querySelector(".wrapper--footer");
var activeMobileFooter = document.querySelector(".activemobile--footer");
var wrapper = document.querySelector(".wrapper");


shareBtn.addEventListener("click", function() {
    activeDesktopImage.classList.toggle("hide__activeimg");
    subContainer.classList.toggle("active--containergap");
    activeMobileFooter.classList.toggle("disappear__mobile");
    wrapper.classList.add("activemobile--wrapperradius");
    if(activeMobileFooter.classList.contains("disappear__mobile")) {
        wrapperFooter.classList.remove("disappear__mobile");
        wrapper.classList.remove("activemobile--wrapperradius");
    } else if(!activeMobileFooter.classList.contains("disappear__mobile")) {
        wrapperFooter.classList.add("disappear__mobile");
    }
})

mobileShareBtn.addEventListener("click", function() {
    subContainer.classList.toggle("active--containergap");
    if(!activeMobileFooter.classList.contains("disappear__mobile")) {
        activeMobileFooter.classList.add("disappear__mobile");
        wrapperFooter.classList.remove("disappear__mobile");
        activeDesktopImage.classList.add("hide__activeimg");
        wrapper.classList.remove("activemobile--wrapperradius");
    }
})
