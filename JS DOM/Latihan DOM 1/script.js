const btn1 = document.getElementsByTagName('button')[0];
btn1.addEventListener("click", function() {
    document.body.classList.toggle('dark-mode');
    document.body.style.transition = '0.5s';
});

const newBtn = document.createElement('button');
const newBtnText = document.createTextNode('Random Color Mode');
newBtn.append(newBtnText);
btn1.after(newBtn);
newBtn.style.marginInline = '25px';

newBtn.addEventListener("click", function() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
    document.body.style.transition = '0.5s';
});

const sliderR = document.createElement('input');
sliderR.setAttribute('type', 'range');
sliderR.setAttribute('min', '0');
sliderR.setAttribute('max', '255');
sliderR.setAttribute('value', '255');
const h3R = document.getElementsByTagName('h3')[0];
h3R.after(sliderR);

const sliderG = document.createElement('input');
sliderG.setAttribute('type', 'range');
sliderG.setAttribute('min', '0');
sliderG.setAttribute('max', '255');
sliderG.setAttribute('value', '255');
const h3G = document.getElementsByTagName('h3')[1];
h3G.after(sliderG);

const br = document.createElement('br');
const sliderB = document.createElement('input');
sliderB.setAttribute('type', 'range');
sliderB.setAttribute('min', '0');
sliderB.setAttribute('max', '255');
sliderB.setAttribute('value', '255');
const h3B = document.getElementsByTagName('h3')[2];
h3B.after(sliderB);

sliderR.addEventListener("input", function() {
    document.body.style.backgroundColor = 'rgb('+sliderR.value+', '+sliderG.value+', '+sliderB.value+')';
    document.querySelector('.p-red').innerHTML = sliderR.value;
});
sliderG.addEventListener("input", function() {
    document.body.style.backgroundColor = 'rgb('+sliderR.value+', '+sliderG.value+', '+sliderB.value+')';
    document.querySelector('.p-green').innerHTML = sliderG.value;
});
sliderB.addEventListener("input", function() {
    document.body.style.backgroundColor = 'rgb('+sliderR.value+', '+sliderG.value+', '+sliderB.value+')';
    document.querySelector('.p-blue').innerHTML = sliderB.value;
});

document.body.addEventListener('mousemove', function(e) {
    const x = Math.round((e.clientX / window.innerWidth) * 255);
    const y = Math.round((e.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+x+', '+y+', 255)';
});
