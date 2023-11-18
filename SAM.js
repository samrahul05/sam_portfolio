
      //  for navigation purpose  
const  mobilemenubutton = document.getElementById("mobile-menu-button")
const  mobilemenu = document.getElementById("mobile-menu")
mobilemenubutton.addEventListener("click",()=> {
   mobilemenu.classList.toggle("hidden")
})



//    for home section starts 
// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
   strings: ["Developer","Front-End","Back-End"],
   loop: true,
   typeSpeed: 50,
   backSpeed: 25,
   backDelay: 500,
});
// <!-- typed js effect ends -->

// <!-- tilt js effect starts -->

//  home page effect
VanillaTilt.init(document.querySelectorAll(".tilt"), {
   max: 15,
});
// <!-- tilt js effect ends -->


// ["𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 ", "𝐅𝐫𝐨𝐧𝐭-𝐄𝐧𝐝", "𝐁𝐚𝐜𝐤-𝐄𝐧𝐝"]

// for home section ends 
