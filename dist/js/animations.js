const homeA = document.querySelector(`#home-a`);
const certificateNum = document.querySelector(`#certificateNum`);
const hoursNum = document.querySelector(`#hoursNum`);
const projectsNum = document.querySelector(`#projectsNum`);

const myCert = 10;
const myHours = 1000;
const myprojects = 27;

document.addEventListener("scroll", () => {
  if (window.pageYOffset > 160) {
    homeA.style.left = `0px`;
  } else homeA.style.left = `75%`;
});

document.addEventListener("scroll", () => {
  if (window.pageYOffset > 600 && window.pageYOffset < 650) {
    if (certificateNum.textContent < myCert) {
      for (let i = 0; i <= myCert; i++) {
        setTimeout(() => {
          certificateNum.textContent = i;
        }, 150 * i);
      }
    }
    if (hoursNum.textContent < myHours) {
      for (let i = 0; i <= myHours; i += 10) {
        setTimeout(() => {
          if (i !== 1000) {
            hoursNum.textContent = i;
          } else {
            hoursNum.textContent = "1000+";
          }
        }, 1.5 * i);
      }
    }
    if (projectsNum.textContent < myprojects) {
      for (let i = 0; i <= myprojects; i++) {
        setTimeout(() => {
          projectsNum.textContent = i;
        }, 75 * i);
      }
    }
  }
});
