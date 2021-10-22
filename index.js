let navButton =document.querySelector("#push-menu")
let sideBar = document.querySelector(".main-sidebar")
let mainWrapper = document.querySelector(".wrapper")
let footer = document.querySelector("footer")

let sideBarItemMenu = document.querySelectorAll(".menu-open")

// let navProfile = document.querySelector(("#nav-profile"))
let navProfile = document.querySelector(("#nav-profile-icon"))
let profileData = document.querySelector("#nav-profile-data")




const toggleVisibility = () => {
    profileData.classList.toggle("nav-profile-opt-v")
    profileData.classList.toggle("nav-profile-opt-vnot")
}

const toggleDisplay = () => {
    profileData.classList.toggle("nav-profile-opt-hide")
    profileData.classList.toggle("nav-profile-opt-display")
}




navButton.addEventListener('click', () => {
    sideBar.classList.toggle("close-sidebar")
    mainWrapper.classList.toggle("reduce-wrapper")
    footer.classList.toggle("reduce-wrapper")
})

sideBarItemMenu.forEach((navItem) => {

    navItem.addEventListener('click', () => {
        let childNode = navItem.childNodes[3]
        let angleIcon = navItem.childNodes[1].childNodes[3]

        if(angleIcon.style.transform == "rotate(90deg)"){
            angleIcon.style.transform = "none"
        }
        else {
            angleIcon.style.transform = "rotate(90deg)"
        }

        if(childNode.classList.contains("nav-treeview")){
            childNode.classList.toggle("nav-treeview")
            childNode.style.height = (34*childNode.childElementCount) + "px"
        }
        else  {
            childNode.classList.toggle("nav-treeview")
            childNode.style.height = "0px"
        }

    })
})

let T

navProfile.addEventListener('click', () => {
    if(profileData.classList.contains("nav-profile-opt-display")){
        toggleVisibility()
        if(T){
            clearTimeout(T)
        }
        T = setTimeout(toggleDisplay,10)
    }
    else {
        toggleDisplay()

        if(T){
            clearTimeout(T)
        }
        T = setTimeout(toggleVisibility,10)
    }
})

let R

document.addEventListener("click", (evt) => {
    const flyoutElement = document.querySelector(".nav-profile")
    const flyoutElement2 = document.querySelector(".main-sidebar")
    const flyoutElement3 = document.querySelector("#push-menu")

    let targetElement = evt.target
    let targetElement2 = evt.target
    let targetElement3 = evt.target

    let firstElem = false
    let secondElem = false
    let thirdElem = false

    //if mouse clicked on the first element
    do {
        if (targetElement == flyoutElement) {
            firstElem = true
            break
        }
        targetElement = targetElement.parentNode
    } while (targetElement)

    // if mouse clicked on the second element
    do {
        if (targetElement2 == flyoutElement2) {
            secondElem = true
            break
        }
        targetElement2 = targetElement2.parentNode
    } while (targetElement2)

    // if mouse clicked on the second element
    do {
        if (targetElement3 == flyoutElement3) {
            thirdElem = true
            break
        }
        targetElement3 = targetElement3.parentNode
    } while (targetElement3)



    if(!firstElem){
        if(profileData.classList.contains("nav-profile-opt-display")){
            toggleVisibility()
            if(R){
                clearTimeout(T)
            }
            R = setTimeout(toggleDisplay,10)
        }
    }


    if(!secondElem && !thirdElem){
        if(!(sideBar.classList.contains("close-sidebar"))){
            sideBar.classList.add("close-sidebar")
            mainWrapper.classList.toggle("reduce-wrapper")
            footer.classList.toggle("reduce-wrapper")
        }
    }
})
