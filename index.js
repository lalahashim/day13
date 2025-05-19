const babysitterDetails = document.getElementById("babysitter-details");
const babysitterCard = document.getElementById("babysitter");
let bbstDtShow = false;
babysitterCard.addEventListener("click", ()=>{
    if (!bbstDtShow){
        babysitterDetails.classList.remove("dont-show");
    } else {
        babysitterDetails.classList.add("dont-show");
    }
    bbstDtShow = !bbstDtShow;
})

const beautyDetails = document.getElementById("beauty-details");
const beautyCard = document.getElementById("beauty");
let beautyShow = false;
beautyCard.addEventListener("click", ()=>{
    if (!beautyShow){
        beautyDetails.classList.remove("dont-show");
    } else {
        beautyDetails.classList.add("dont-show");
    }
    beautyShow = !beautyShow;
})

const cleaningDetails = document.getElementById("cleaning-details");
const cleaningCard = document.getElementById("cleaning");
let cleaningShow = false;
cleaningCard.addEventListener("click", ()=>{
    if (!cleaningShow){
        cleaningDetails.classList.remove("dont-show");
    } else {
        cleaningDetails.classList.add("dont-show");
    }
    cleaningShow = !cleaningShow;
})

const repairDetails = document.getElementById("repair-details");
const repairCard = document.getElementById("home-repair");
let repairShow = false;
repairCard.addEventListener("click", ()=>{
    if (!repairShow){
        repairDetails.classList.remove("dont-show");
    } else {
        repairDetails.classList.add("dont-show");
    }
    repairShow = !repairShow;
})

const otherDetails = document.getElementById("other-details");
const otherCard = document.getElementById("other-services");
let otherShow = false;
otherCard.addEventListener("click", ()=>{
    if (!otherShow){
        otherDetails.classList.remove("dont-show");
    } else {
        otherDetails.classList.add("dont-show");
    }
    otherShow = !otherShow;
})

const specialCareDetails = document.getElementById("sp-care-details");
const careCard = document.getElementById("special-care");
let careShow = false;
careCard.addEventListener("click", ()=>{
    if (!careShow){
        specialCareDetails.classList.remove("dont-show");
    } else {
        specialCareDetails.classList.add("dont-show");
    }
    careShow = !careShow;
})


const allData = "https://raw.githubusercontent.com/lalahashim/data/refs/heads/main/data.json";
fetch(allData)
.then(response =>{
    if(!response.ok){
        throw new Error("Network response was not ok");
    } 
    return response.json()
})
.then(data =>{
    const cleaningData = data.data.services.find(service => service.title_en.trim() === "Cleaning");
    const cleaningServices = cleaningData.subServices;
    cleaningServices.forEach(service => {
        const subService = document.createElement("p");
        subService.innerHTML = service.title_en;
        cleaningDetails.appendChild(subService);
    });

    const repairData = data.data.services.find(service => service.title_en.trim() === "Home Repair");
    const repairServices = repairData.subServices;
    repairServices.forEach(service => {
        const repairSubService = document.createElement("p");
        repairSubService.innerHTML = service.title_en;
        repairDetails.appendChild(repairSubService);
    });

    const beautyData = data.data.services.find(service => service.title_en.trim() === "Beauty");
    const beautyServices = beautyData.subServices;
    beautyServices.forEach(service => {
        const beautySubService = document.createElement("p");
        beautySubService.innerHTML = service.title_en;
        beautyDetails.appendChild(beautySubService);
    });

    const otherData = data.data.services.find(service => service.title_en.trim() === "Events");
    const otherServices = otherData.subServices;
    otherServices.forEach(service => {
        const otherSubService = document.createElement("p");
        otherSubService.innerHTML = service.title_en;
        otherDetails.appendChild(otherSubService);
    });

    const babysitterData = data.data.services.find(service => service.title_en.trim() === "Education");
    const babysitterServices = babysitterData.subServices;
    babysitterServices.forEach(service => {
        const bbstSubService = document.createElement("p");
        bbstSubService.innerHTML = service.title_en;
        babysitterDetails.appendChild(bbstSubService);
    });

    const specialCareData = data.data.services.find(service => service.title_en.trim() === "Furniture");
    const specialCareServices = specialCareData.subServices;
    specialCareServices.forEach(service => {
        const spcrSubService = document.createElement("p");
        spcrSubService.innerHTML = service.title_en;
        specialCareDetails.appendChild(spcrSubService);
    });
})

const sidebar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menu");
menuIcon.addEventListener("click", ()=>{
    menuIcon.classList.add("dont-show");
    sidebar.classList.remove("dont-show");
})

document.addEventListener("click", (e)=>{
    if(!sidebar.contains(e.target) && !menuIcon.contains(e.target)){
        menuIcon.classList.remove("dont-show");
        sidebar.classList.add("dont-show");
    }
})