const c = document.querySelector(`#skillsC`);
const python = document.querySelector(`#skillsPython`);
const html = document.querySelector(`#skillsHtml`);
const js = document.querySelector(`#skillsJs`);
const react = document.querySelector(`#skillsReact`);
const nodeJs = document.querySelector(`#skillsNode`);
const mongo = document.querySelector(`#skillsMongo`);

const cR = 50;
const pythonR = 70;
const htmlR = 85;
const jsR = 95;
const reactR = 92;
const nodeJsR = 88;
const mongoR = 80;

let activate = true;

document.addEventListener("scroll", () => {
  if (window.pageYOffset > 450) {
    console.log(activate);
    if (activate) {
      console.log(`active`);
      activate = false;
      for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
          if (i <= cR) c.style.width = `${i}%`;
          if (i <= pythonR) python.style.width = `${i}%`;
          if (i <= htmlR) html.style.width = `${i}%`;
          if (i <= jsR) js.style.width = `${i}%`;
          if (i <= reactR) react.style.width = `${i}%`;
          if (i <= nodeJsR) nodeJs.style.width = `${i}%`;
          if (i <= mongoR) mongo.style.width = `${i}%`;
        }, 25 * i);
      }
    }
  }
});
