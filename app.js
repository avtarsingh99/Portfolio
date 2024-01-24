function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function getCurrentYear() {
    return new Date().getFullYear();
  }
  
  let currentYear = getCurrentYear();
  let dateElement = document.querySelector("#date");
  dateElement.innerText = "Made by Avtar "+"Copyright " + currentYear+  ". All Rights Reserved."
  

  