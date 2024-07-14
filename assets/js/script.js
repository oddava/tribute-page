const menuIcon = document.querySelector(".menu-icon");
const mobileNavbar = document.querySelector(".mobile-navbar");
const mobile_links_parent = document.querySelectorAll(".mobile__nav__links li")
const mobile_links = document.querySelectorAll(".mobile__nav__links li a")


menuIcon.addEventListener("click", () => {
    if (mobileNavbar.classList.contains("active")){
        mobileNavbar.classList.remove("active");
        mobileNavbar.classList.toggle("inactive");
    } else {
        mobileNavbar.classList.remove("inactive");
        mobileNavbar.classList.toggle("active");
    }
})
mobile_links.forEach((link) => {
    link.addEventListener("click", () => {
        if (mobileNavbar.classList.contains("active")){
            mobileNavbar.classList.remove("active");
            mobileNavbar.classList.toggle("inactive");
        } else {
            mobileNavbar.classList.remove("inactive");
            mobileNavbar.classList.toggle("active");
        }
        mobile_links.forEach((e) => {
            e.classList.remove("active");
        })
        link.classList.add("active");
    })
})