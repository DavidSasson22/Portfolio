const c = document.querySelector(`#skillsC`);
const python = document.querySelector(`#skillsPython`);
const html = document.querySelector(`#skillsHtml`);
const sass = document.querySelector(`#skillsSass`);
const js = document.querySelector(`#skillsJs`);
const react = document.querySelector(`#skillsReact`);
const nodeJs = document.querySelector(`#skillsNode`);
const mongo = document.querySelector(`#skillsMongo`);
const linux = document.querySelector(`#skillsLinux`);

const cR = 50;
const pythonR = 75;
const htmlR = 85;
const sassR = 85;
const jsR = 95;
const reactR = 92;
const nodeJsR = 88;
const mongoR = 80;
const linuxR = 70;

let activate = true;

document.addEventListener("scroll", () => {
  if (window.pageYOffset > 450) {
    console.log(activate);
    if (activate) {
      activate = false;
      setTimeout(() => {
        c.style.width = `${cR}%`;
      }, 100);
      setTimeout(() => {
        python.style.width = `${pythonR}%`;
      }, 300);
      setTimeout(() => {
        html.style.width = `${htmlR}%`;
      }, 500);
      setTimeout(() => {
        sass.style.width = `${sassR}%`;
      }, 700);
      setTimeout(() => {
        js.style.width = `${jsR}%`;
      }, 900);
      setTimeout(() => {
        react.style.width = `${reactR}%`;
      }, 1100);
      setTimeout(() => {
        nodeJs.style.width = `${nodeJsR}%`;
      }, 1300);
      setTimeout(() => {
        mongo.style.width = `${mongoR}%`;
      }, 1500);
      setTimeout(() => {
        linux.style.width = `${linuxR}%`;
      }, 1700);
    }
  }
});
